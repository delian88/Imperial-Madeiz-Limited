import { drizzle } from "drizzle-orm/postgres-js";
import { eq, desc, asc } from "drizzle-orm";
import postgres from "postgres";
import fs from "fs";
import path from "path";
import * as schema from "./schema";
import { INITIAL_PROJECTS, INITIAL_INSIGHTS } from "./seed-data";
import type {
  Project,
  Insight,
  Inquiry,
  NewInquiry,
  VendorApplication,
  NewVendorApplication,
} from "./schema";

const connectionString = process.env.DATABASE_URL;

const isLivePostgresConfigured = Boolean(
  connectionString &&
    !connectionString.includes("[YOUR-PASSWORD]") &&
    !connectionString.includes("your-project-ref")
);

let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (!isLivePostgresConfigured || !connectionString) {
    return null;
  }
  if (!dbInstance) {
    const client = postgres(connectionString, {
      prepare: false,
      connect_timeout: 5,
    });
    dbInstance = drizzle(client, { schema });
  }
  return dbInstance;
}

// Local persistent JSON store for zero-config fallback when Supabase env vars are not yet connected
const LOCAL_STORE_PATH = path.join(process.cwd(), "src", "db", "local-store.json");

interface LocalStoreData {
  inquiries: Inquiry[];
  vendorApplications: VendorApplication[];
}

function readLocalStore(): LocalStoreData {
  try {
    if (fs.existsSync(LOCAL_STORE_PATH)) {
      const raw = fs.readFileSync(LOCAL_STORE_PATH, "utf-8");
      return JSON.parse(raw) as LocalStoreData;
    }
  } catch {
    // ignore read error
  }
  return {
    inquiries: [
      {
        id: 1,
        fullName: "Kwame Mensah-Agave",
        email: "k.mensah@volta-invest.gh",
        companyName: "Volta Corridor Infrastructure Ltd",
        phone: "+233 24 555 0192",
        interestedService: "Build & Design",
        budgetRange: "> $500,000",
        projectDetails:
          "Interested in partnering on the 24-hour commercial retail plaza and residential block development at Agave-Dzebetato.",
        acceptedTerms: true,
        status: "reviewed",
        createdAt: new Date("2026-10-15T10:30:00Z"),
      },
      {
        id: 2,
        fullName: "Engr. Tunde Adeyemi",
        email: "t.adeyemi@westafrica-epc.ng",
        companyName: "Lagos-Accra Civil Consortium",
        phone: "+234 80 312 4490",
        interestedService: "Construction Management",
        budgetRange: "> $1,000,000",
        projectDetails:
          "EPC consortium inquiry regarding civil works for the Alkebulan City Private Jet Aerodrome and arterial road network.",
        acceptedTerms: true,
        status: "new",
        createdAt: new Date("2026-11-02T14:15:00Z"),
      },
    ],
    vendorApplications: [
      {
        id: 1,
        companyName: "GoldCoast Structural Steel & Concrete Ltd",
        rcNumber: "CS-88492019",
        yearEstablished: "2014",
        contactPerson: "Ing. Selorm Dzeklo",
        website: "https://goldcoaststeel.com.gh",
        businessAddress: "Plot 14, Tema Heavy Industrial Area, Greater Accra / Sogakope",
        phone: "+233 20 889 3411",
        email: "procurement@goldcoaststeel.com.gh",
        tinNumber: "C0004928172",
        bankAccountName: "GoldCoast Structural Steel & Concrete Ltd",
        bankName: "Stanbic Bank Ghana",
        accountNumber: "9040008172635",
        productsOrServices:
          "Reinforced concrete batching, structural steel fabrication, and pre-cast drainage culverts for Alkebulan City Phase 1.",
        countryOfOrigin: "Ghana",
        acceptedTerms: true,
        status: "approved",
        createdAt: new Date("2026-10-20T09:00:00Z"),
      },
    ],
  };
}

function writeLocalStore(data: LocalStoreData) {
  try {
    fs.mkdirSync(path.dirname(LOCAL_STORE_PATH), { recursive: true });
    fs.writeFileSync(LOCAL_STORE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    // ignore write error in read-only environments
  }
}

export async function getAllProjects(category?: string): Promise<Project[]> {
  const db = getDb();
  if (db) {
    try {
      const rows = await db
        .select()
        .from(schema.projects)
        .orderBy(asc(schema.projects.sortOrder));
      if (rows.length > 0) {
        return category && category !== "all"
          ? rows.filter((r) => r.category === category)
          : rows;
      }
    } catch {
      // Fallback to seed dataset
    }
  }

  const fallback: Project[] = INITIAL_PROJECTS.map((p, idx) => ({
    id: idx + 1,
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category,
    categoryLabel: p.categoryLabel,
    location: p.location,
    acreage: p.acreage ?? null,
    capacity: p.capacity ?? null,
    completionTarget: p.completionTarget ?? "2030",
    clientOrPartner: p.clientOrPartner ?? "Imperial Madeiz Limited",
    heroImage: p.heroImage,
    galleryImages: p.galleryImages,
    summary: p.summary,
    description: p.description,
    highlights: p.highlights,
    metrics: p.metrics,
    featured: p.featured ?? true,
    sortOrder: p.sortOrder ?? idx + 1,
    createdAt: new Date("2026-01-01T00:00:00Z"),
  }));

  if (category && category !== "all") {
    return fallback.filter((p) => p.category === category);
  }
  return fallback;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const db = getDb();
  if (db) {
    try {
      const [row] = await db
        .select()
        .from(schema.projects)
        .where(eq(schema.projects.slug, slug))
        .limit(1);
      if (row) return row;
    } catch {
      // Fallback
    }
  }
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getAllInsights(): Promise<Insight[]> {
  const db = getDb();
  if (db) {
    try {
      const rows = await db
        .select()
        .from(schema.insights)
        .orderBy(desc(schema.insights.id));
      if (rows.length > 0) return rows;
    } catch {
      // Fallback
    }
  }

  return INITIAL_INSIGHTS.map((ins, idx) => ({
    id: idx + 1,
    slug: ins.slug,
    title: ins.title,
    subtitle: ins.subtitle,
    category: ins.category,
    sourceName: ins.sourceName,
    sourceUrl: ins.sourceUrl,
    author: ins.author,
    publishedAt: ins.publishedAt,
    coverImage: ins.coverImage,
    imageCaption: ins.imageCaption ?? null,
    galleryImages: ins.galleryImages,
    youtubeVideoId: ins.youtubeVideoId ?? null,
    excerpt: ins.excerpt,
    bodyParagraphs: ins.bodyParagraphs,
    keyQuotes: ins.keyQuotes,
    featured: ins.featured ?? true,
    createdAt: new Date("2026-01-01T00:00:00Z"),
  }));
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const db = getDb();
  if (db) {
    try {
      const [row] = await db
        .select()
        .from(schema.insights)
        .where(eq(schema.insights.slug, slug))
        .limit(1);
      if (row) return row;
    } catch {
      // Fallback
    }
  }
  const all = await getAllInsights();
  return all.find((i) => i.slug === slug) ?? null;
}

export async function createInquiry(
  input: NewInquiry
): Promise<{ inquiry: Inquiry; storage: "supabase_drizzle" | "local_fallback" }> {
  const db = getDb();
  if (db) {
    try {
      const [inserted] = await db
        .insert(schema.inquiries)
        .values(input)
        .returning();
      return { inquiry: inserted, storage: "supabase_drizzle" };
    } catch {
      // Fallback to local store
    }
  }

  const store = readLocalStore();
  const nextId =
    store.inquiries.reduce((max, item) => Math.max(max, item.id), 0) + 1;
  const created: Inquiry = {
    id: nextId,
    fullName: input.fullName,
    email: input.email,
    companyName: input.companyName ?? null,
    phone: input.phone ?? null,
    interestedService: input.interestedService,
    budgetRange: input.budgetRange,
    projectDetails: input.projectDetails,
    acceptedTerms: input.acceptedTerms ?? true,
    status: "new",
    createdAt: new Date(),
  };
  store.inquiries.unshift(created);
  writeLocalStore(store);
  return { inquiry: created, storage: "local_fallback" };
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  const db = getDb();
  if (db) {
    try {
      return await db
        .select()
        .from(schema.inquiries)
        .orderBy(desc(schema.inquiries.createdAt));
    } catch {
      // Fallback
    }
  }
  return readLocalStore().inquiries;
}

export async function createVendorApplication(
  input: NewVendorApplication
): Promise<{
  vendor: VendorApplication;
  storage: "supabase_drizzle" | "local_fallback";
}> {
  const db = getDb();
  if (db) {
    try {
      const [inserted] = await db
        .insert(schema.vendorApplications)
        .values(input)
        .returning();
      return { vendor: inserted, storage: "supabase_drizzle" };
    } catch {
      // Fallback
    }
  }

  const store = readLocalStore();
  const nextId =
    store.vendorApplications.reduce((max, item) => Math.max(max, item.id), 0) +
    1;
  const created: VendorApplication = {
    id: nextId,
    companyName: input.companyName,
    rcNumber: input.rcNumber,
    yearEstablished: input.yearEstablished,
    contactPerson: input.contactPerson,
    website: input.website ?? null,
    businessAddress: input.businessAddress,
    phone: input.phone,
    email: input.email,
    tinNumber: input.tinNumber,
    bankAccountName: input.bankAccountName,
    bankName: input.bankName,
    accountNumber: input.accountNumber,
    productsOrServices: input.productsOrServices,
    countryOfOrigin: input.countryOfOrigin ?? "Ghana",
    acceptedTerms: input.acceptedTerms ?? true,
    status: "pending_review",
    createdAt: new Date(),
  };
  store.vendorApplications.unshift(created);
  writeLocalStore(store);
  return { vendor: created, storage: "local_fallback" };
}

export async function getAllVendorApplications(): Promise<VendorApplication[]> {
  const db = getDb();
  if (db) {
    try {
      return await db
        .select()
        .from(schema.vendorApplications)
        .orderBy(desc(schema.vendorApplications.createdAt));
    } catch {
      // Fallback
    }
  }
  return readLocalStore().vendorApplications;
}

