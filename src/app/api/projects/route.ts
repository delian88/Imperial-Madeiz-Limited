import { NextRequest, NextResponse } from "next/server";
import { getAllProjects } from "@/db";

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get("category") ?? undefined;
    const data = await getAllProjects(category);
    return NextResponse.json({
      success: true,
      count: data.length,
      projects: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}

