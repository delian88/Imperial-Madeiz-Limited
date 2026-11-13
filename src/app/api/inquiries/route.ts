import { NextRequest, NextResponse } from "next/server";
import { createInquiry, getAllInquiries } from "@/db";

export async function GET() {
  try {
    const list = await getAllInquiries();
    return NextResponse.json({
      success: true,
      count: list.length,
      inquiries: list,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch inquiries",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      companyName,
      phone,
      interestedService,
      budgetRange,
      projectDetails,
      acceptedTerms,
    } = body;

    if (!fullName || !email || !projectDetails) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide your name, email address, and project details.",
        },
        { status: 400 }
      );
    }

    const result = await createInquiry({
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      companyName: companyName ? String(companyName).trim() : null,
      phone: phone ? String(phone).trim() : null,
      interestedService: interestedService || "Build & Design",
      budgetRange: budgetRange || "> $50,000",
      projectDetails: String(projectDetails).trim(),
      acceptedTerms: Boolean(acceptedTerms ?? true),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Imperial Madeiz Limited. Our executive project team will respond shortly.",
        storage: result.storage,
        inquiry: result.inquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to submit inquiry",
      },
      { status: 500 }
    );
  }
}

