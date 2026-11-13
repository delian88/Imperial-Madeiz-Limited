"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  Play,
  MapPin,
  Quote,
  ExternalLink,
  CheckCircle2,
  X,
} from "lucide-react";
import type { Project, Insight } from "@/db/schema";
import { COMPANY_INFO } from "@/db/seed-data";
import { AnimatedText, FadeInBlock } from "./AnimatedText";

interface HomeClientProps {
  projects: Project[];
  insights: Insight[];
}

const HERO_SLIDES = [
  {
    number: "/01",
    heading: "Simple & Authentic",
    description: "Smart City Design and Building Solutions",
    subtext:
      "Spearheading the 2,000+ Acre Multi-Billion-Dollar Alkebulan City Ghana Development Project at Agave-Dzebetato, South Tongu District, Volta Region.",
    image: "/images/hero-slide-1.webp",
    badge: "ALKEBULAN CITY GHANA • 2,000+ ACRES",
  },
  {
    number: "/02",
    heading: "Quality & Experience",
    description: "Aesthetically Stunning Urban Solutions",
    subtext:
      "Capacity for 5 Million Habitats & 509,000+ Family Homes—Featuring a 7-Star Hotel, Teaching Hospital with Heliport, University, and Private Jet Aerodrome.",
    image: "/images/agave-groundbreaking-1.jpg",
    badge: "LED BY DR. DELORN MADEIZ & MRS. ANAEL MADEIZ",
  },
  {
    number: "/03",
    heading: "Simple & Authentic",
    description: "Catalyst for a 24-Hour African Economy",
    subtext:
      "Executed by a 5-Nation West African Consortium (Ghana, Nigeria, Togo, Benin & Côte d'Ivoire) Generating 2,000,000+ Jobs and 2,000+ Start-Up SMEs.",
    image: "/images/hero-slide-3.webp",
    badge: "VISION 2030 MASTER EXECUTION",
  },
];

const SERVICES_CARDS = [
  {
    title: "Pre-construction Services",
    subtitle: "2,000+ Acre Master Planning, Land Stewardship & Feasibility",
    image: "/images/service-preconstruction.jpg",
    href: "/services#pre-construction",
  },
  {
    title: "Design & Build Services",
    subtitle: "Smart City Architecture, Aviation, Hospital & 7-Star Hospitality",
    image: "/images/service-design-build.jpg",
    href: "/services#design-build",
  },
  {
    title: "Construction Management",
    subtitle: "5-Nation EPC Execution (Ghana, Nigeria, Togo, Benin & Côte d'Ivoire)",
    image: "/images/service-construction-mgmt.jpg",
    href: "/services#construction-management",
  },
];

const PROCESS_STEPS = [
  {
    num: "01.",
    title: "Consultation & Community Stewardship",
    description:
      "We begin every landmark development with deep stakeholder alignment—working hand-in-hand with Traditional Rulers (Togbega Gadagbe Hlitabo IV, Torgbui Kavi VI, and Tator Seshie), the South Tongu District Assembly, and international investors to align vision, land stewardship, and community prosperity.",
  },
  {
    num: "02.",
    title: "Proposal & Master-Plan Feasibility",
    description:
      "Once requirements for residential, commercial, aviation, or institutional zones are defined, our multidisciplinary engineering and quantity surveying teams prepare a comprehensive proposal outlining schedules, environmental sustainability, partner consortiums, and transparent cost estimates.",
  },
  {
    num: "03.",
    title: "Design Phase & Smart Urban Architecture",
    description:
      "Careful consideration of bioclimatic architecture, 24-hour utility grids, and spatial layout is essential to the success of Alkebulan City. We translate bold pan-African ambitions into world-class blueprints—from 509,000+ smart residential homes to our 7-Star Hotel and Teaching Hospital.",
  },
  {
    num: "04.",
    title: "Construction & Regional Consortium Execution",
    description:
      "Executed by top-tier construction firms across Ghana, Nigeria, Togo, Benin, and Côte d’Ivoire—with 60% of our 5,000+ site workforce recruited locally—clients and partners receive weekly progress updates, rigorous cost control, and first-class engineering execution.",
  },
  {
    num: "05",
    title: "Inspection, Commissioning & Handover",
    description:
      "Following completion of each phase toward our 2030 inauguration, independent structural, safety, and environmental inspectors verify every building and utility system before final commissioning—delivering sustainable assets built for generations yet unborn.",
  },
];

const FILTER_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "city-marks", label: "City Marks" },
  { id: "corporate-buildings", label: "Corporate Buildings" },
  { id: "residential", label: "Residential" },
  { id: "auditorium", label: "Auditorium" },
];

export default function HomeClient({ projects, insights }: HomeClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const graphicArticle = insights[0];

  return (
    <div id="lqd-site-content" className="w-full overflow-x-hidden">
      {/* =====================================================================
          SECTION 1: SABC FULL-SCREEN HERO SWIPER SLIDER
         ===================================================================== */}
      <section className="relative w-full h-[85vh] sm:h-[86vh] min-h-[580px] sm:min-h-[620px] max-h-[880px] bg-[#121b1d] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].heading}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001836]/90 via-[#002C5F]/65 to-black/45" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content with Kinetic Stagger Animation */}
        <div className="relative z-10 max-w-[1240px] mx-auto h-full px-5 sm:px-8 lg:px-14 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-inter uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 sm:mb-5 max-w-full truncate"
              >
                <span className="w-2 h-2 rounded-full bg-[#FE5D5B] animate-pulse shrink-0" />
                <span className="truncate">{HERO_SLIDES[currentSlide].badge}</span>
                <span className="text-[#FFBC7D] font-bold shrink-0">
                  {HERO_SLIDES[currentSlide].number}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[34px] sm:text-[54px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-tight"
              >
                {HERO_SLIDES[currentSlide].heading}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[20px] sm:text-[28px] font-normal text-[#FFBC7D] mt-2 sm:mt-3 leading-snug"
              >
                {HERO_SLIDES[currentSlide].description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[14.5px] sm:text-[17px] text-white/85 mt-3 sm:mt-4 max-w-2xl leading-relaxed font-normal"
              >
                {HERO_SLIDES[currentSlide].subtext}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <Link
                  href="/projects/alkebulan-city-master-plan"
                  className="btn-liquid-y bg-[#002C5F] border border-white/25 hover:border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 font-inter text-[14px] sm:text-[15px] font-medium inline-flex items-center gap-2"
                >
                  <span className="btn-txt-primary gap-2">
                    Explore Alkebulan City <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="btn-txt-clone gap-2 bg-[#FE5D5B]">
                    View 2,000+ Acre Plan <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveVideoId("XUAvEAaFru4")}
                  className="bg-white/15 hover:bg-white text-white hover:text-[#002C5F] backdrop-blur-md px-5 sm:px-6 py-3.5 sm:py-4 font-inter text-[14px] sm:text-[15px] font-medium inline-flex items-center gap-2.5 transition-all"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FE5D5B] text-white flex items-center justify-center shrink-0">
                    <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Watch Vision 2030</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Chevron Controls */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
            )
          }
          className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-[#002C5F] text-white items-center justify-center transition-colors border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
          }
          className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-[#002C5F] text-white items-center justify-center transition-colors border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Pagination & Mobile-Optimized Metrics */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-black/55 backdrop-blur-md border-t border-white/15">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-14 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 transition-all ${
                      currentSlide === idx
                        ? "w-8 sm:w-10 bg-[#FE5D5B]"
                        : "w-2.5 bg-white/40 hover:bg-white"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[11px] sm:text-xs font-inter text-white/75 truncate">
                {HERO_SLIDES[currentSlide].number} — Agave-Dzebetato, Volta Region
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-white font-inter text-xs">
              <div>
                <span className="text-[#FFBC7D] font-bold text-sm">2,000+</span>{" "}
                Acres
              </div>
              <div>
                <span className="text-[#FFBC7D] font-bold text-sm">5M</span>{" "}
                Habitats
              </div>
              <div>
                <span className="text-[#FFBC7D] font-bold text-sm">2M+</span>{" "}
                Jobs
              </div>
              <div>
                <span className="text-[#FFBC7D] font-bold text-sm">509K+</span>{" "}
                Homes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: WHO WE ARE (with Kinetic Text Split Animation)
         ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Dual-Image Overlap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative pb-10 sm:pb-16"
          >
            <div className="w-[85%] sm:w-[82%] overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src="/images/who-we-are-1.jpg"
                alt="Imperial Madeiz Limited Smart City Architecture"
                className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="w-[74%] sm:w-[68%] ml-auto -mt-24 sm:-mt-44 relative z-10 shadow-2xl border-4 border-white bg-white overflow-hidden group">
              <img
                src="/images/delorn-madeiz-hd.jpg"
                alt="Dr Delorn Madeiz addressing the gathering at Agave-Dzebetato"
                className="w-full h-[210px] sm:h-[270px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-[#002C5F] text-white p-3 sm:p-3.5 text-[11px] sm:text-xs font-inter leading-snug">
                <strong className="block text-[#FFBC7D]">
                  Dr. Delorn Madeiz — Founder &amp; CEO
                </strong>
                Addressing the ground-breaking ceremony at Agave-Dzebetato.
              </div>
            </div>
          </motion.div>

          {/* Right Narrative with Text Reveal Animations */}
          <div className="lg:col-span-6 space-y-5">
            <FadeInBlock direction="up" delay={0.05}>
              <h6 className="lqd-highlight-grow text-[13px] sm:text-[14px] font-inter font-semibold uppercase tracking-[0.18em] text-[#002C5F]">
                IMPERIAL MADEIZ LIMITED (MEDEIZ LIMITED)
              </h6>
            </FadeInBlock>

            <AnimatedText
              text="Who We Are"
              as="h2"
              className="text-[32px] sm:text-[42px] lg:text-[46px] font-semibold text-[#181b31] leading-[1.15]"
            />

            <FadeInBlock direction="up" delay={0.15}>
              <p className="text-[15.5px] sm:text-[16.5px] text-[#54595F] font-medium leading-relaxed">
                We are a premier private investment, urban development, and
                full-service building construction group spearheading the
                multi-billion-dollar{" "}
                <strong className="text-[#002C5F]">
                  Alkebulan City Ghana Development Project
                </strong>
                . Whilst offering general consulting and contracting expertise in
                pre-construction, construction management, and design-and-build
                services, we are driven as we build future cities with unique and
                influential architectural design.
              </p>
            </FadeInBlock>

            <FadeInBlock direction="up" delay={0.25}>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#7A7A7A] leading-relaxed">
                Led by Founder &amp; CEO{" "}
                <strong className="text-[#181b31]">Dr. Delorn Madeiz</strong> and
                Executive Director{" "}
                <strong className="text-[#181b31]">Mrs. Anael Madeiz</strong>, our
                flagship 2,000+ acre modern smart city at{" "}
                <strong className="text-[#181b31]">
                  Agave-Dzebetato in the South Tongu District of the Volta Region
                </strong>{" "}
                is engineered for a capacity of 5 million habitats—featuring
                residential and business zones, a university, vocational college,
                teaching hospital with helicopter emergency services, sports
                academy, stadium, 7-star hotel, shopping mall, cyber security
                centre, energy plants, and a private jet aerodrome.
              </p>
            </FadeInBlock>

            {/* Graphic Online Quote Box with animated reveal */}
            <FadeInBlock direction="left" delay={0.35}>
              <blockquote className="border-l-4 border-[#002C5F] bg-[#f8fafc] p-4 text-[14px] sm:text-[14.5px] text-[#54595F] italic">
                &ldquo;Job creation is at the heart of our mission; the city is
                envisioned to be a vibrant hub of economic activity, stimulating
                local businesses and generating over two million jobs and 2,000
                start-up SMEs in Ghana and across Africa through a 24-hour
                economy.&rdquo;
                <footer className="not-italic font-semibold text-[#002C5F] mt-1.5 text-xs uppercase tracking-wider">
                  — Dr. Delorn Madeiz, CEO (Graphic Online Report)
                </footer>
              </blockquote>
            </FadeInBlock>

            <FadeInBlock direction="up" delay={0.45}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="btn-liquid-y bg-[#002C5F] text-white px-7 sm:px-8 py-3.5 sm:py-4 font-inter text-[14px] sm:text-[15px] font-medium inline-flex items-center gap-2"
                >
                  <span className="btn-txt-primary gap-2">
                    Learn More About Us <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="btn-txt-clone gap-2 bg-[#181b31]">
                    Our Story &amp; Leadership <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  href="/insights/modern-city-project-takes-off-at-agave-dzebetato"
                  className="text-[#002C5F] hover:text-[#FE5D5B] font-inter text-[14px] font-semibold inline-flex items-center gap-1.5 underline underline-offset-4"
                >
                  Read Graphic Online Article <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInBlock>
          </div>
        </div>

        {/* Animated Metrics Counters */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {COMPANY_INFO.keyStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-3.5 sm:p-4 bg-[#f8fafc] border-l-2 border-[#002C5F] hover:bg-white hover:shadow-md transition-all"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#002C5F]">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-inter text-[#54595F] mt-1 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: OUR SERVICES (with Kinetic Headings)
         ===================================================================== */}
      <section className="bg-[#f5f7fa] py-16 sm:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 sm:mb-14">
            <div className="lg:col-span-6">
              <FadeInBlock direction="up">
                <h6 className="lqd-highlight-grow text-xs sm:text-[14px] font-inter font-semibold uppercase tracking-[0.18em] text-[#002C5F] mb-2">
                  Our services
                </h6>
              </FadeInBlock>
              <AnimatedText
                text="Industrial engineering and infrastructure."
                as="h2"
                className="text-[30px] sm:text-[40px] font-semibold text-[#181b31] leading-[1.18]"
              />
            </div>
            <div className="lg:col-span-6">
              <FadeInBlock direction="up" delay={0.2}>
                <p className="text-[15px] sm:text-[16.5px] text-[#54595F] leading-relaxed">
                  We embrace holistic development and support for communities and
                  employees—recruiting 60% of our 5,000+ site workers locally in
                  the South Tongu District while uniting premier construction
                  firms from Ghana, Nigeria, Togo, Benin, and Côte d&apos;Ivoire.
                </p>
              </FadeInBlock>
            </div>
          </div>

          {/* Cards with Hover Tilt and Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <Link
                  href={card.href}
                  className="lqd-fb-card block rounded-[4px] overflow-hidden shadow-md group relative bg-white"
                >
                  <div className="lqd-fb-img relative h-[260px] sm:h-[320px] overflow-hidden bg-[#181b31]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-[#002C5F]/35 transition-colors duration-300" />
                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#002C5F] group-hover:bg-[#FE5D5B] group-hover:text-white flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-300 scale-90 group-hover:scale-105">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="lqd-fb-content p-5 sm:p-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-[18px] sm:text-[19px] font-semibold text-[#181b31] tracking-[-0.3px] leading-snug">
                        {card.title}
                      </h2>
                      <p className="text-xs text-[#7A7A7A] mt-1">
                        {card.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#002C5F] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CORE VALUES & PARTNERS
         ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-[#f8fafc] to-white">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <FadeInBlock direction="up">
                <h6 className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold mb-2">
                  D.I.C.E. ETHOS &amp; REGIONAL CONSORTIUM
                </h6>
              </FadeInBlock>
              <AnimatedText
                text="Core Values & Partners"
                as="h2"
                className="text-[32px] sm:text-[40px] font-semibold text-[#181b31] leading-tight"
              />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { code: "D", title: "Dependable", desc: "5-Year Vision 2030 Delivery" },
                  { code: "I", title: "Innovative", desc: "24-Hour Smart City Tech" },
                  { code: "C", title: "Customer-Centric", desc: "509,000+ Family Homes" },
                  { code: "E", title: "Ethical", desc: "Community & Land Harmony" },
                ].map((v, idx) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-3 sm:p-3.5 border border-gray-200 bg-white hover:border-[#002C5F] transition-colors"
                  >
                    <span className="text-xs font-bold text-[#FE5D5B]">
                      0{v.code}
                    </span>
                    <h4 className="text-[15px] sm:text-[16px] font-semibold text-[#181b31]">
                      {v.title}
                    </h4>
                    <p className="text-[11px] text-[#7A7A7A] mt-0.5">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <FadeInBlock direction="up">
                <h6 className="text-[16.5px] sm:text-[18px] font-normal text-[#54595F] leading-relaxed">
                  We are constantly growing, learning, and improving, and our
                  strategic partners across West Africa and the global diaspora
                  are steadily increasing. Our projects are people-focused—uniting
                  construction firms from{" "}
                  <strong className="text-[#002C5F]">
                    Ghana, Nigeria, Togo, Benin, and Côte d&apos;Ivoire
                  </strong>{" "}
                  with real estate leaders such as{" "}
                  <strong className="text-[#002C5F]">BlueGates Global</strong>.
                </h6>
              </FadeInBlock>

              <FadeInBlock direction="up" delay={0.15}>
                <h6 className="text-[15px] sm:text-[16.5px] font-normal text-[#7A7A7A] leading-relaxed">
                  We are proud to have a portfolio of remarkable financial
                  institutions, traditional authorities in Agave-Dzebetato
                  (Paramount Chief Togbega Gadagbe Hlitabo IV, Torgbui Kavi VI,
                  and Tator Seshie), and the South Tongu District Assembly (Hon.
                  Victoria Dzeklo &amp; Hon. Peter Doe Newton) driving our vision
                  and company values.
                </h6>
              </FadeInBlock>

              {/* Partner Logos Strip */}
              <div className="pt-4 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-5 items-center">
                {[
                  { src: "/images/partner-zenith.png", name: "Zenith Bank" },
                  { src: "/images/partner-uba.png", name: "UBA" },
                  { src: "/images/partner-stanbic.png", name: "Stanbic Bank" },
                  { src: "/images/partner-polaris.png", name: "Polaris Bank" },
                  { src: "/images/partner-aso.png", name: "ASO Savings" },
                  { src: "/images/partner-access.png", name: "Access Bank" },
                ].map((logo, idx) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="h-14 sm:h-16 px-2 sm:px-3 bg-white border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-8 sm:max-h-10 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: FULL-VIEWPORT STICKY BANNER
         ===================================================================== */}
      <section className="relative w-full bg-[#121b1d] text-white overflow-hidden">
        <div className="py-8 sm:py-12 text-center bg-white px-4">
          <AnimatedText
            text="Quality & Experience"
            as="h2"
            className="text-[34px] sm:text-[62px] lg:text-[84px] font-bold text-[#181b31] tracking-tight leading-none justify-center"
          />
        </div>

        <div className="relative h-[55vh] sm:h-[70vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center">
          <motion.img
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/images/banner-partnership.jpeg"
            alt="Partnership and Smart City Engineering"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#002C5F]/65" />
          <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
            <span className="text-[11px] sm:text-xs font-inter uppercase tracking-[0.24em] text-[#FFBC7D] block mb-2 sm:mb-3">
              GHANA • NIGERIA • TOGO • BENIN • CÔTE D&apos;IVOIRE
            </span>
            <h2 className="text-[36px] sm:text-[68px] lg:text-[90px] font-bold text-white tracking-tight leading-none">
              Partnership
            </h2>
            <p className="mt-3 sm:mt-5 text-white/90 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Building a self-reliant African continent through the 2,000+ acre
              Alkebulan City Ghana Development Project at Agave-Dzebetato.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: DUAL INFINITE TEXT MARQUEE
         ===================================================================== */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-100 overflow-hidden select-none">
        <div className="flex whitespace-nowrap overflow-hidden py-1.5">
          <div className="flex animate-marquee items-center gap-8 sm:gap-12">
            {[1, 2, 3, 4].map((n) => (
              <React.Fragment key={n}>
                <span className="text-[36px] sm:text-[62px] font-bold text-[#181b31] tracking-tight">
                  Building Construction
                </span>
                <span className="text-[36px] sm:text-[62px] font-bold text-outline tracking-tight">
                  Alkebulan Smart City
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden py-1.5 mt-1">
          <div className="flex animate-marquee-reverse items-center gap-8 sm:gap-12">
            {[1, 2, 3, 4].map((n) => (
              <React.Fragment key={n}>
                <span className="text-[36px] sm:text-[62px] font-bold text-outline tracking-tight">
                  Design and Build Services
                </span>
                <span className="text-[36px] sm:text-[62px] font-bold text-[#002C5F] tracking-tight">
                  24-Hour Economy Hub
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: SELECTED CASE STUDIES — FILTERABLE PORTFOLIO
         ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <FadeInBlock direction="up">
              <h6 className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
                — Latest projects
              </h6>
            </FadeInBlock>
            <AnimatedText
              text="Selected Case Studies"
              as="h2"
              className="text-[30px] sm:text-[42px] font-semibold text-[#181b31] mt-1 sm:mt-2"
            />
          </div>

          {/* Filter Tabs */}
          <ul className="flex flex-wrap items-center gap-2">
            {FILTER_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[14px] font-inter font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#002C5F] text-white shadow-sm"
                      : "bg-gray-100 text-[#54595F] hover:bg-gray-200 hover:text-black"
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              key={project.slug}
              className="group relative rounded-[6px] overflow-hidden h-[340px] sm:h-[380px] bg-[#181b31] shadow-md"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001836]/95 via-[#002C5F]/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-white/15 backdrop-blur-md text-[10px] sm:text-[11px] font-inter uppercase tracking-wider text-white border border-white/20">
                    {project.categoryLabel}
                  </span>
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#002C5F] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="text-[11px] sm:text-xs font-inter text-[#FFBC7D] flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5" /> {project.location}
                  </p>
                  <h2 className="text-[19px] sm:text-[22px] font-semibold text-white leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-xs text-white/80 mt-1.5 sm:mt-2 line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                aria-label={project.title}
                className="absolute inset-0 z-10"
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/projects"
            className="btn-liquid-y bg-[#002C5F] text-white px-7 sm:px-8 py-3.5 sm:py-4 font-inter text-[14px] sm:text-[15px] font-medium inline-flex items-center gap-2"
          >
            <span className="btn-txt-primary gap-2">
              View All Master-Plan Zones <ArrowRight className="w-4 h-4" />
            </span>
            <span className="btn-txt-clone gap-2 bg-[#181b31]">
              Explore Full Portfolio <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: GRAPHIC ONLINE FEATURE & MULTIMEDIA
         ===================================================================== */}
      <section className="bg-[#002C5F] text-white py-16 sm:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <span className="text-[11px] sm:text-xs font-inter uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
                OFFICIAL PRESS COVERAGE &amp; MULTIMEDIA ARCHIVE
              </span>
              <AnimatedText
                text="Modern City Project Takes Off at Agave-Dzebetato"
                as="h2"
                className="text-[28px] sm:text-[40px] lg:text-[44px] font-semibold text-white mt-2 leading-tight"
                highlightWords={["Agave-Dzebetato"]}
                highlightClassName="text-[#FFBC7D]"
              />
            </div>
            <Link
              href="/insights"
              className="border border-white/30 hover:bg-white hover:text-[#002C5F] text-white px-5 sm:px-6 py-3 font-inter text-[13px] sm:text-[14px] font-medium inline-flex items-center gap-2 transition-colors shrink-0 self-start lg:self-auto"
            >
              View All Press &amp; Insights <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Graphic Online Story */}
          {graphicArticle && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 bg-white/5 border border-white/15 p-5 sm:p-8 lg:p-10 mb-10 sm:mb-14">
              <div className="lg:col-span-5 space-y-4">
                <div className="overflow-hidden border border-white/20">
                  <img
                    src="/images/delorn-madeiz-hd.jpg"
                    alt={
                      graphicArticle.imageCaption ||
                      "Dr Delorn Madeiz addressing the gathering"
                    }
                    className="w-full h-[240px] sm:h-[300px] object-cover object-top"
                  />
                  <div className="bg-black/50 p-2.5 sm:p-3 text-[11px] sm:text-xs text-white/85 font-inter">
                    {graphicArticle.imageCaption} (Photo: Graphic Online)
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    "/images/agave-groundbreaking-1.jpg",
                    "/images/agave-groundbreaking-2.jpg",
                    "/images/agave-groundbreaking-3.jpg",
                  ].map((imgUrl, idx) => (
                    <img
                      key={idx}
                      src={imgUrl}
                      alt={`Agave-Dzebetato Groundbreaking ${idx + 1}`}
                      className="w-full h-18 sm:h-24 object-cover border border-white/20"
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-inter text-[#FFBC7D]">
                    <span className="px-2.5 py-1 bg-[#FE5D5B] text-white font-semibold uppercase text-[10px] sm:text-xs">
                      Graphic Online Feature
                    </span>
                    <span>•</span>
                    <span className="truncate">Agave-Dzebetato, South Tongu, Volta</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                    {graphicArticle.title}
                  </h3>

                  <div className="space-y-2.5 sm:space-y-3 text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
                    {graphicArticle.bodyParagraphs.slice(0, 4).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                    <div className="p-3.5 sm:p-4 bg-white/10 border-l-2 border-[#FFBC7D]">
                      <Quote className="w-4 h-4 text-[#FFBC7D] mb-1" />
                      <p className="text-xs text-white/90 italic">
                        &ldquo;The project signifies the foundation for
                        innovation, growth and opportunities for the benefit of
                        generations yet unborn.&rdquo;
                      </p>
                      <span className="block text-[11px] font-semibold text-[#FFBC7D] mt-2">
                        — Mrs. Anael Madeiz, Exec. Director
                      </span>
                    </div>
                    <div className="p-3.5 sm:p-4 bg-white/10 border-l-2 border-[#FE5D5B]">
                      <CheckCircle2 className="w-4 h-4 text-[#FE5D5B] mb-1" />
                      <p className="text-xs text-white/90">
                        Backed by Clan Leaders{" "}
                        <strong>Torgbui Kavi VI</strong> &amp;{" "}
                        <strong>Tator Seshie</strong>, Paramount Chief{" "}
                        <strong>Togbega Gadagbe Hlitabo IV</strong>, and local
                        Assembly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href={`/insights/${graphicArticle.slug}`}
                    className="bg-white text-[#002C5F] hover:bg-[#FFBC7D] px-5 sm:px-6 py-2.5 sm:py-3 font-inter text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    Read Complete Article <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={graphicArticle.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-xs font-inter inline-flex items-center gap-1.5 underline"
                  >
                    Original Graphic.com.gh Source <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Official YouTube Channel Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_INFO.videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-white/5 border border-white/15 overflow-hidden group"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={vid.embedUrl}
                    title={vid.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] sm:text-[11px] font-inter uppercase tracking-wider text-[#FFBC7D]">
                    {vid.subtitle} • @imperialmadeiz1804
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-white/75 mt-1 sm:mt-1.5 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: OUR WORKING STEPS — THE PROCESS (01. to 05.)
         ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-[1140px] mx-auto">
        <div className="mb-10 sm:mb-12">
          <FadeInBlock direction="up">
            <h6 className="lqd-highlight-grow text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
              Our Working Steps
            </h6>
          </FadeInBlock>
          <AnimatedText
            text="The Process."
            as="h3"
            className="text-[32px] sm:text-[42px] font-semibold text-[#181b31] mt-1 sm:mt-2"
          />
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center hover:bg-slate-50/80 px-2 sm:px-4 transition-colors"
            >
              <div className="md:col-span-2">
                <span className="text-[38px] sm:text-[52px] font-bold text-[#002C5F] leading-none">
                  {step.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h4 className="text-[20px] sm:text-[25px] font-semibold text-[#181b31]">
                  {step.title}
                </h4>
              </div>
              <div className="md:col-span-6">
                <p className="text-[14px] sm:text-[15.5px] text-[#7A7A7A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-[110] bg-black/85 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black shadow-2xl border border-white/20">
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-[#FE5D5B] flex items-center gap-1.5 font-inter text-xs sm:text-sm"
            >
              <span>Close Video</span> <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Imperial Madeiz Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
