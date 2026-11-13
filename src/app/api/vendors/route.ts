import { NextRequest, NextResponse } from "next/server";
import { createVendorApplication, getAllVendorApplications } from "@/db";

export async function GET() {
  try {
    const list = await getAllVendorApplications();
    return NextResponse.json({
      success: true,
      count: list.length,
      vendors: list,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch vendor applications",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      companyName,
      rcNumber,
      yearEstablished,
      contactPerson,
      website,
      businessAddress,
      phone,
      email,
      tinNumber,
      bankAccountName,
      bankName,
      accountNumber,
      productsOrServices,
      countryOfOrigin,
      acceptedTerms,
    } = body;

    if (
      !companyName ||
      !rcNumber ||
      !contactPerson ||
      !phone ||
      !email ||
      !productsOrServices
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please complete all required vendor registration fields (*).",
        },
        { status: 400 }
      );
    }

    const result = await createVendorApplication({
      companyName: String(companyName).trim(),
      rcNumber: String(rcNumber).trim(),
      yearEstablished: String(yearEstablished || "2020").trim(),
      contactPerson: String(contactPerson).trim(),
      website: website ? String(website).trim() : null,
      businessAddress: String(businessAddress || "Accra, Ghana").trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      tinNumber: String(tinNumber || "N/A").trim(),
      bankAccountName: String(bankAccountName || companyName).trim(),
      bankName: String(bankName || "Stanbic Bank").trim(),
      accountNumber: String(accountNumber || "0000000000").trim(),
      productsOrServices: String(productsOrServices).trim(),
      countryOfOrigin: String(countryOfOrigin || "Ghana").trim(),
      acceptedTerms: Boolean(acceptedTerms ?? true),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your Vendor / EPC Contractor Registration for the Alkebulan City Project has been logged successfully.",
        storage: result.storage,
        vendor: result.vendor,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit vendor application",
      },
      { status: 500 }
    );
  }
}

