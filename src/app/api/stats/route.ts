import { NextResponse } from "next/server";
import {
  getAllProjects,
  getAllInsights,
  getAllInquiries,
  getAllVendorApplications,
  getDb,
} from "@/db";
import { isSupabaseConfigured } from "@/lib/supabase";

export async function GET() {
  const [projects, insights, inquiries, vendors] = await Promise.all([
    getAllProjects(),
    getAllInsights(),
    getAllInquiries(),
    getAllVendorApplications(),
  ]);

  return NextResponse.json({
    success: true,
    backend: {
      orm: "Drizzle ORM (PostgreSQL dialect)",
      databaseProvider: "Supabase PostgreSQL",
      livePostgresConnected: Boolean(getDb()),
      supabaseClientConfigured: isSupabaseConfigured(),
    },
    counts: {
      projects: projects.length,
      insights: insights.length,
      inquiries: inquiries.length,
      vendors: vendors.length,
    },
    inquiries,
    vendors,
  });
}

