import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/db";
import {
  MapPin,
  Calendar,
  Layers,
  Users,
  CheckCircle2,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const related = allProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-[420px] bg-[#181b31] overflow-hidden flex items-end">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001836] via-[#002C5F]/65 to-black/30" />

        <div className="relative z-10 max-w-[1140px] mx-auto w-full px-6 lg:px-12 pb-14 text-white">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-inter uppercase tracking-wider text-[#FFBC7D] hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-[#FE5D5B] text-white text-xs font-inter uppercase tracking-wider font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-inter text-white/80 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FFBC7D]" />{" "}
              {project.location}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mt-2 max-w-3xl">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-[#002C5F] text-white py-6 px-6 lg:px-12 border-b border-white/15">
        <div className="max-w-[1140px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <span className="block text-xs font-inter uppercase tracking-wider text-white/65">
                {m.label}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[#FFBC7D]">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#181b31]">
              Project Overview &amp; Architectural Scope
            </h2>
            <p className="text-[17px] text-[#54595F] font-medium leading-relaxed">
              {project.summary}
            </p>
            <p className="text-[16px] text-[#7A7A7A] leading-relaxed">
              {project.description}
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-[#181b31] mb-4">
                Key Infrastructure &amp; Master-Plan Highlights
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="p-4 bg-[#f8fafc] border-l-4 border-[#002C5F] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#002C5F] shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[#181b31]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-[#181b31] mb-4">
                Project &amp; Site Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-gray-200 h-60"
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Fact Sheet */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#f8fafc] border border-gray-200 p-7 space-y-5">
              <h3 className="text-lg font-semibold text-[#181b31] border-b border-gray-200 pb-3">
                Project Fact Sheet
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#002C5F] shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-[#7A7A7A]">
                      Location
                    </span>
                    <strong className="text-[#181b31]">
                      {project.location}
                    </strong>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-[#002C5F] shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-[#7A7A7A]">
                      Acreage / Allocation
                    </span>
                    <strong className="text-[#181b31]">
                      {project.acreage || "2,000+ Acre Master Plan"}
                    </strong>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#002C5F] shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-[#7A7A7A]">
                      Capacity &amp; Impact
                    </span>
                    <strong className="text-[#181b31]">
                      {project.capacity}
                    </strong>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#002C5F] shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-[#7A7A7A]">
                      Completion Target
                    </span>
                    <strong className="text-[#181b31]">
                      {project.completionTarget}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full py-3.5 bg-[#002C5F] hover:bg-[#181b31] text-white text-center font-inter text-sm font-medium transition-colors"
                >
                  Inquire About This Zone
                </Link>
                <Link
                  href="/become-a-vendor"
                  className="block w-full py-3 border border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white text-center font-inter text-sm font-medium transition-colors"
                >
                  Bid as EPC Contractor / Vendor
                </Link>
              </div>
            </div>

            {/* Related Projects */}
            <div className="border border-gray-200 p-6 space-y-4">
              <h4 className="font-semibold text-[#181b31]">
                Other Master-Plan Zones
              </h4>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/projects/${r.slug}`}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-none text-sm text-[#54595F] hover:text-[#002C5F]"
                >
                  <span>{r.title}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

