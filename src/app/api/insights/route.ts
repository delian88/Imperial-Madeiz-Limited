import { NextResponse } from "next/server";
import { getAllInsights } from "@/db";

export async function GET() {
  try {
    const data = await getAllInsights();
    return NextResponse.json({
      success: true,
      count: data.length,
      insights: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch insights",
      },
      { status: 500 }
    );
  }
}

