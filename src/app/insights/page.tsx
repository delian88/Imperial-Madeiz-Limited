import React from "react";
import Link from "next/link";
import { getAllInsights } from "@/db";
import { COMPANY_INFO } from "@/db/seed-data";
import {
  ArrowUpRight,
  ExternalLink,
  Newspaper,
  Youtube,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Insights, Press & Videos | Imperial Madeiz Limited",
  description:
    "Official press coverage from Graphic Online, AdomOnline, and video updates from Imperial Madeiz Limited on the Alkebulan City Ghana Development Project at Agave-Dzebetato.",
};

export default async function InsightsPage() {
  const insights = await getAllInsights();

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#002C5F] text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
            PRESS RELEASES, GRAPHIC ONLINE ARCHIVE &amp; VIDEOS
          </span>
          <h1 className="text-[38px] sm:text-[52px] font-bold text-white mt-2">
            Building the Architecture of Future African Cities
          </h1>
          <p className="text-lg text-white/85 mt-3 max-w-3xl">
            Read verified national news reports from Graphic Online and
            AdomOnline alongside official video briefings from Imperial Madeiz
            Limited (@imperialmadeiz1804).
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto space-y-12">
        {insights.map((article, idx) => (
          <article
            key={article.slug}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="lg:col-span-5">
              <div className="overflow-hidden bg-[#181b31] h-72 relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover object-top"
                />
                {idx === 0 && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#FE5D5B] text-white text-xs font-inter font-semibold uppercase">
                    Featured Graphic Online Report
                  </span>
                )}
              </div>
              {article.imageCaption && (
                <p className="text-xs text-[#7A7A7A] mt-2 italic">
                  {article.imageCaption}
                </p>
              )}
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-inter text-[#002C5F] font-semibold uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-[#FE5D5B]" />
                    {article.sourceName}
                  </span>
                  <span>•</span>
                  <span>{article.publishedAt}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-[#181b31] mt-2">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="hover:text-[#002C5F] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm font-medium text-[#54595F] mt-1">
                  {article.subtitle}
                </p>

                <p className="text-[15.5px] text-[#7A7A7A] mt-4 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/insights/${article.slug}`}
                  className="bg-[#002C5F] hover:bg-[#181b31] text-white px-6 py-3 text-sm font-inter font-medium inline-flex items-center gap-2 transition-colors"
                >
                  Read Complete Article <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-inter text-[#54595F] hover:text-[#002C5F] inline-flex items-center gap-1.5 underline"
                >
                  View Original Source ({article.sourceName}){" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Official YouTube Channel Videos Section */}
      <section className="bg-[#f8fafc] py-20 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-inter uppercase tracking-[0.2em] text-[#FE5D5B] font-semibold flex items-center gap-1.5">
                <Youtube className="w-4 h-4" /> OFFICIAL VIDEO CHANNEL
              </span>
              <h2 className="text-3xl font-semibold text-[#181b31] mt-1">
                Alkebulan City Ghana Video Briefings
              </h2>
            </div>
            <a
              href={COMPANY_INFO.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-inter font-semibold text-[#002C5F] hover:text-[#FE5D5B] inline-flex items-center gap-1.5"
            >
              Visit @imperialmadeiz1804 on YouTube{" "}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.videos.map((v) => (
              <div
                key={v.id}
                className="bg-white border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-inter uppercase tracking-wider text-[#002C5F] font-semibold">
                    {v.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold text-[#181b31] mt-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#7A7A7A] mt-2 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

