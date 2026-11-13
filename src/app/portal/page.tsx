"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Database,
  Building2,
  FileSpreadsheet,
  Users,
  RefreshCw,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface PortalStats {
  backend: {
    orm: string;
    databaseProvider: string;
    livePostgresConnected: boolean;
    supabaseClientConfigured: boolean;
  };
  counts: {
    projects: number;
    insights: number;
    inquiries: number;
    vendors: number;
  };
  inquiries: Array<{
    id: number;
    fullName: string;
    email: string;
    companyName: string | null;
    interestedService: string;
    budgetRange: string;
    projectDetails: string;
    status: string;
    createdAt: string;
  }>;
  vendors: Array<{
    id: number;
    companyName: string;
    rcNumber: string;
    contactPerson: string;
    countryOfOrigin: string;
    phone: string;
    email: string;
    productsOrServices: string;
    status: string;
    createdAt: string;
  }>;
}

export default function PortalPage() {
  const [data, setData] = useState<PortalStats | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchStats() {
    setLoading(true);
    try {
      const res = await fetch("/api/stats");
      const json = await res.json();
      setData(json);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="w-full min-h-[80vh] bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-[#002C5F] text-white py-16 px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
              CLIENT &amp; EPC PARTNER PORTAL • DRIZZLE ORM + SUPABASE BACKEND
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Imperial Madeiz Executive &amp; Partner Portal
            </h1>
            <p className="text-sm text-white/80 mt-1">
              Real-time overview of Alkebulan City Master-Plan zones, project
              inquiries, and registered West African EPC vendors.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchStats}
            className="bg-white/15 hover:bg-white hover:text-[#002C5F] text-white px-5 py-3 text-sm font-inter font-medium inline-flex items-center gap-2 transition-colors self-start"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh Live Records
          </button>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-12 max-w-[1240px] mx-auto space-y-10">
        {/* Backend Architecture Status Banner */}
        <div className="bg-white border border-gray-200 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#002C5F] text-white flex items-center justify-center shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#181b31] flex items-center gap-2">
                <span>TypeScript + Drizzle ORM + Supabase PostgreSQL</span>
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-inter font-semibold rounded">
                  Active
                </span>
              </h3>
              <p className="text-xs text-[#54595F] mt-1">
                Schema: <code className="text-[#002C5F]">src/db/schema.ts</code>{" "}
                (tables: <code>projects</code>, <code>insights</code>,{" "}
                <code>inquiries</code>, <code>vendor_applications</code>) • SQL
                Migration:{" "}
                <code className="text-[#002C5F]">
                  supabase/migrations/0001_initial_imperial_madeiz.sql
                </code>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#002C5F] text-white text-xs font-inter font-semibold uppercase tracking-wider inline-flex items-center gap-1"
            >
              New Inquiry <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/become-a-vendor"
              className="px-4 py-2 border border-[#002C5F] text-[#002C5F] text-xs font-inter font-semibold uppercase tracking-wider inline-flex items-center gap-1"
            >
              Register Vendor <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Summary Counters */}
        {data && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-gray-200 border-t-4 border-t-[#002C5F]">
                <span className="text-xs font-inter uppercase tracking-wider text-[#7A7A7A]">
                  Master-Plan Zones
                </span>
                <div className="text-3xl font-bold text-[#181b31] mt-1">
                  {data.counts.projects}
                </div>
                <span className="text-xs text-[#002C5F] mt-1 block">
                  2,000+ Acres at Agave-Dzebetato
                </span>
              </div>

              <div className="bg-white p-6 border border-gray-200 border-t-4 border-t-[#FE5D5B]">
                <span className="text-xs font-inter uppercase tracking-wider text-[#7A7A7A]">
                  Verified Press Reports
                </span>
                <div className="text-3xl font-bold text-[#181b31] mt-1">
                  {data.counts.insights}
                </div>
                <span className="text-xs text-[#54595F] mt-1 block">
                  Graphic Online &amp; AdomOnline
                </span>
              </div>

              <div className="bg-white p-6 border border-gray-200 border-t-4 border-t-[#002C5F]">
                <span className="text-xs font-inter uppercase tracking-wider text-[#7A7A7A]">
                  Project &amp; Investor Inquiries
                </span>
                <div className="text-3xl font-bold text-[#181b31] mt-1">
                  {data.counts.inquiries}
                </div>
                <span className="text-xs text-emerald-700 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Logged via{" "}
                  <code>/api/inquiries</code>
                </span>
              </div>

              <div className="bg-white p-6 border border-gray-200 border-t-4 border-t-[#FE5D5B]">
                <span className="text-xs font-inter uppercase tracking-wider text-[#7A7A7A]">
                  Registered EPC Vendors
                </span>
                <div className="text-3xl font-bold text-[#181b31] mt-1">
                  {data.counts.vendors}
                </div>
                <span className="text-xs text-emerald-700 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Logged via{" "}
                  <code>/api/vendors</code>
                </span>
              </div>
            </div>

            {/* Inquiries & Vendors Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inquiries */}
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-semibold text-[#181b31] flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-[#002C5F]" />
                    Recent Project Inquiries
                  </h3>
                  <span className="text-xs font-inter text-[#7A7A7A]">
                    Table: <code>inquiries</code>
                  </span>
                </div>

                <div className="space-y-4">
                  {data.inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 bg-[#f8fafc] border border-gray-200 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-sm text-[#181b31]">
                          {inq.fullName}{" "}
                          {inq.companyName ? `(${inq.companyName})` : ""}
                        </strong>
                        <span className="px-2 py-0.5 bg-[#002C5F] text-white text-[11px] font-inter">
                          {inq.interestedService}
                        </span>
                      </div>
                      <p className="text-xs text-[#54595F]">
                        Email: {inq.email} • Budget: {inq.budgetRange}
                      </p>
                      <p className="text-xs text-[#181b31] pt-1">
                        {inq.projectDetails}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vendors */}
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-semibold text-[#181b31] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FE5D5B]" />
                    Registered EPC Vendors &amp; Contractors
                  </h3>
                  <span className="text-xs font-inter text-[#7A7A7A]">
                    Table: <code>vendor_applications</code>
                  </span>
                </div>

                <div className="space-y-4">
                  {data.vendors.map((v) => (
                    <div
                      key={v.id}
                      className="p-4 bg-[#f8fafc] border border-gray-200 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-sm text-[#181b31]">
                          {v.companyName} ({v.countryOfOrigin})
                        </strong>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 text-[11px] font-inter font-semibold">
                          RC: {v.rcNumber}
                        </span>
                      </div>
                      <p className="text-xs text-[#54595F]">
                        Contact: {v.contactPerson} • {v.phone} • {v.email}
                      </p>
                      <p className="text-xs text-[#181b31] pt-1">
                        {v.productsOrServices}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

