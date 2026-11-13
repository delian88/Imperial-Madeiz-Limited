import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  category: text("category").notNull(), // 'city-marks' | 'residential' | 'corporate-buildings' | 'auditorium' | 'healthcare-education'
  categoryLabel: text("category_label").notNull(),
  location: text("location").notNull(),
  acreage: text("acreage"),
  capacity: text("capacity"),
  completionTarget: text("completion_target").default("2030 (5-Year Phase)"),
  clientOrPartner: text("client_or_partner").default("Imperial Madeiz Limited"),
  heroImage: text("hero_image").notNull(),
  galleryImages: jsonb("gallery_images").$type<string[]>().notNull(),
  summary: text("summary").notNull(),
  description: text("description").notNull(),
  highlights: jsonb("highlights").$type<string[]>().notNull(),
  metrics: jsonb("metrics")
    .$type<{ label: string; value: string }[]>()
    .notNull(),
  featured: boolean("featured").default(true).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insights = pgTable("insights", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  category: text("category").notNull(),
  sourceName: text("source_name").notNull(),
  sourceUrl: text("source_url").notNull(),
  author: text("author").notNull(),
  publishedAt: text("published_at").notNull(),
  coverImage: text("cover_image").notNull(),
  imageCaption: text("image_caption"),
  galleryImages: jsonb("gallery_images")
    .$type<{ url: string; caption: string }[]>()
    .notNull(),
  youtubeVideoId: text("youtube_video_id"),
  excerpt: text("excerpt").notNull(),
  bodyParagraphs: jsonb("body_paragraphs").$type<string[]>().notNull(),
  keyQuotes: jsonb("key_quotes")
    .$type<{ speaker: string; role: string; quote: string }[]>()
    .notNull(),
  featured: boolean("featured").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  companyName: text("company_name"),
  phone: text("phone"),
  interestedService: text("interested_service").notNull(), // 'Pre Construction Services' | 'Build & Design' | 'Construction Management' | 'Smart City Investment'
  budgetRange: text("budget_range").notNull(),
  projectDetails: text("project_details").notNull(),
  acceptedTerms: boolean("accepted_terms").default(true).notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const vendorApplications = pgTable("vendor_applications", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  rcNumber: text("rc_number").notNull(),
  yearEstablished: text("year_established").notNull(),
  contactPerson: text("contact_person").notNull(),
  website: text("website"),
  businessAddress: text("business_address").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  tinNumber: text("tin_number").notNull(),
  bankAccountName: text("bank_account_name").notNull(),
  bankName: text("bank_name").notNull(),
  accountNumber: text("account_number").notNull(),
  productsOrServices: text("products_or_services").notNull(),
  countryOfOrigin: text("country_of_origin").default("Ghana").notNull(),
  acceptedTerms: boolean("accepted_terms").default(true).notNull(),
  status: text("status").default("pending_review").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;

export type Insight = typeof insights.$inferSelect;
export type NewInsight = typeof insights.$inferInsert;

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;

export type VendorApplication = typeof vendorApplications.$inferSelect;
export type NewVendorApplication = typeof vendorApplications.$inferInsert;

