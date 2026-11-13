import React from "react";
import Link from "next/link";
import { getAllProjects } from "@/db";
import { ArrowUpRight, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects & Master Plan | Imperial Madeiz Limited",
  description:
    "Explore the 2,000+ acre Alkebulan City Ghana Master Plan at Agave-Dzebetato and flagship projects by Imperial Madeiz Limited.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="w-full">
      {/* Header (Exact match to sabcltd.com/sabc-projects/) */}
      <section className="bg-[#002C5F] text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
            ALKEBULAN CITY GHANA &amp; REGIONAL PORTFOLIO
          </span>
          <h1 className="text-[40px] sm:text-[54px] font-bold text-white mt-2">
            Let&apos;s Build Something Great. Together.
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mt-3">
            We master-plan, design, build, and provide construction management
            services across West Africa.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 lg:px-12 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group bg-white border border-gray-200 rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-[#181b31]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#002C5F]/90 text-white text-[11px] font-inter uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-inter text-[#002C5F] flex items-center gap-1 mb-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FE5D5B]" />
                    {project.location}
                  </p>
                  <h2 className="text-xl font-semibold text-[#181b31] group-hover:text-[#002C5F] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#7A7A7A] mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs font-inter text-[#54595F]">
                    <strong className="text-[#181b31]">Scale:</strong>{" "}
                    {project.acreage || "Master Zone"}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold uppercase tracking-wider text-[#002C5F] group-hover:text-[#FE5D5B]"
                  >
                    Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

