import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsightBySlug, getAllInsights } from "@/db";
import {
  ArrowLeft,
  ExternalLink,
  Quote,
  Newspaper,
  Calendar,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);
  if (!article) {
    notFound();
  }

  const allInsights = await getAllInsights();
  const others = allInsights.filter((i) => i.slug !== article.slug);

  return (
    <div className="w-full">
      {/* Article Header */}
      <section className="bg-[#002C5F] text-white py-16 px-6 lg:px-12">
        <div className="max-w-[960px] mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-inter uppercase tracking-wider text-[#FFBC7D] hover:text-white mb-5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights &amp; Press
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-inter text-white/80 mb-3">
            <span className="px-3 py-1 bg-[#FE5D5B] text-white font-semibold uppercase">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Newspaper className="w-3.5 h-3.5 text-[#FFBC7D]" />{" "}
              {article.sourceName}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#FFBC7D]" />{" "}
              {article.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mt-3">
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-16 px-6 lg:px-12 max-w-[960px] mx-auto">
        {/* Featured Image */}
        <figure className="mb-10 border border-gray-200 bg-[#f8fafc] overflow-hidden shadow-md">
          <img
            src={article.coverImage}
            alt={article.imageCaption || article.title}
            className="w-full max-h-[520px] object-cover object-top"
          />
          {article.imageCaption && (
            <figcaption className="p-4 text-sm font-inter text-[#54595F] bg-white border-t border-gray-100">
              <strong>Photo Caption:</strong> {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Full Article Paragraphs */}
        <div className="space-y-5 text-[17px] text-[#181b31]/90 leading-relaxed">
          {article.bodyParagraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "text-xl font-medium text-[#002C5F]" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Quotes Highlight */}
        {article.keyQuotes.length > 0 && (
          <div className="my-12 grid grid-cols-1 gap-6">
            {article.keyQuotes.map((q, idx) => (
              <blockquote
                key={idx}
                className="p-7 bg-[#002C5F] text-white border-l-4 border-[#FE5D5B]"
              >
                <Quote className="w-6 h-6 text-[#FFBC7D] mb-2" />
                <p className="text-lg italic leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer className="mt-3 text-xs font-inter uppercase tracking-wider text-[#FFBC7D] font-semibold">
                  — {q.speaker}, {q.role}
                </footer>
              </blockquote>
            ))}
          </div>
        )}

        {/* Photo Gallery from the Groundbreaking */}
        {article.galleryImages.length > 0 && (
          <div className="my-12">
            <h3 className="text-2xl font-semibold text-[#181b31] mb-4">
              Event &amp; Project Photo Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {article.galleryImages.map((img, i) => (
                <figure
                  key={i}
                  className="border border-gray-200 overflow-hidden bg-white"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-60 object-cover"
                  />
                  <figcaption className="p-3 text-xs text-[#54595F]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Embedded YouTube Video */}
        {article.youtubeVideoId && (
          <div className="my-12">
            <h3 className="text-2xl font-semibold text-[#181b31] mb-4">
              Related Video Briefing (@imperialmadeiz1804)
            </h3>
            <div className="aspect-video bg-black border border-gray-200 shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${article.youtubeVideoId}`}
                title={article.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Source Attribution Link */}
        <div className="mt-10 p-6 bg-[#f8fafc] border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-inter uppercase tracking-wider text-[#7A7A7A]">
              Verified News Source
            </span>
            <h4 className="text-base font-semibold text-[#181b31]">
              {article.sourceName}
            </h4>
          </div>
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#002C5F] text-white px-5 py-2.5 text-xs font-inter uppercase tracking-wider font-semibold inline-flex items-center gap-2"
          >
            Read Original Publication <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* More Articles */}
        {others.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-[#181b31] mb-6">
              More Press &amp; Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/insights/${o.slug}`}
                  className="p-5 border border-gray-200 hover:border-[#002C5F] transition-colors block"
                >
                  <span className="text-xs font-inter text-[#002C5F] font-semibold">
                    {o.sourceName}
                  </span>
                  <h4 className="text-lg font-semibold text-[#181b31] mt-1">
                    {o.title}
                  </h4>
                  <p className="text-xs text-[#7A7A7A] mt-2 line-clamp-2">
                    {o.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

