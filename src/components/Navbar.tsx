"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  MessageSquarePlus,
  ArrowUp,
  Building2,
} from "lucide-react";
import InquiryFormGrid from "./InquiryFormGrid";

const PROJECT_DROPDOWN_LINKS = [
  {
    label: "Alkebulan City Master Plan (2,000+ Acres)",
    href: "/projects/alkebulan-city-master-plan",
  },
  {
    label: "Alkebulan 7-Star Hotel & Conference Centre",
    href: "/projects/seven-star-hotel-and-conference-centre",
  },
  {
    label: "Teaching Hospital & Helicopter Emergency Hub",
    href: "/projects/teaching-hospital-and-heliport",
  },
  {
    label: "509,000+ Smart Residential Estates",
    href: "/projects/alkebulan-smart-residential-estates",
  },
  {
    label: "Private Jet Aerodrome & Aviation Hub",
    href: "/projects/private-jet-aerodrome-aviation-hub",
  },
  {
    label: "University & Vocational College Campus",
    href: "/projects/university-vocational-college-campus",
  },
  {
    label: "Sports Academy & 40,000-Seat Stadium",
    href: "/projects/sports-academy-and-international-stadium",
  },
  {
    label: "24-Hour Mall, Cyber Hub & Energy Plant",
    href: "/projects/cyber-security-energy-and-mall-complex",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenModal = () => setInquiryModalOpen(true);
    window.addEventListener("open-inquiry-modal", handleOpenModal);
    return () =>
      window.removeEventListener("open-inquiry-modal", handleOpenModal);
  }, []);

  return (
    <>
      {/* Main Sticky Header (Exact clone of sabcltd.com Elementor Header id=e24ad95) */}
      <header
        id="wrap"
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isSticky
            ? "shadow-[0_10px_30px_rgba(0,44,95,0.08)] py-3"
            : "py-5 border-b border-gray-100"
        } px-5 lg:px-[50px]`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#002C5F] text-white flex items-center justify-center font-bold text-lg tracking-tighter relative overflow-hidden">
              <Building2 className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#FE5D5B]" />
            </div>
            <div className="flex flex-col">
              <span className="font-inter font-bold text-[17px] tracking-tight text-[#002C5F] leading-none">
                IMPERIAL MADEIZ
              </span>
              <span className="font-inter text-[10px] tracking-[0.22em] uppercase text-[#54595F] mt-1">
                LIMITED • ALKEBULAN CITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Exact Inter 15px weight 500, #A0B6D0 -> #000000 on hover with #002C5F link-sep) */}
          <nav
            id="primary-nav"
            className="hidden lg:flex items-center justify-end gap-1 font-inter text-[15px] font-medium"
          >
            <Link
              href="/about"
              className={`px-4 py-2.5 transition-colors ${
                pathname === "/about"
                  ? "text-black font-semibold"
                  : "text-[#A0B6D0] hover:text-black"
              }`}
            >
              Who We Are
            </Link>
            <span className="text-[#002C5F]/30 select-none">•</span>

            <Link
              href="/services"
              className={`px-4 py-2.5 transition-colors ${
                pathname === "/services"
                  ? "text-black font-semibold"
                  : "text-[#A0B6D0] hover:text-black"
              }`}
            >
              What We Do
            </Link>
            <span className="text-[#002C5F]/30 select-none">•</span>

            {/* Projects Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <Link
                href="/projects"
                className={`px-4 py-2.5 inline-flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/projects")
                    ? "text-black font-semibold"
                    : "text-[#A0B6D0] hover:text-black"
                }`}
              >
                <span>Projects</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div
                className={`absolute left-0 top-full pt-2 w-[330px] transition-all duration-200 ${
                  projectsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-gray-100 shadow-2xl py-3 px-2">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#002C5F] border-b border-gray-100 mb-1">
                    Alkebulan City & Regional Portfolio
                  </div>
                  {PROJECT_DROPDOWN_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-[13.5px] text-[#54595F] hover:text-[#002C5F] hover:bg-slate-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-[#002C5F]/30 select-none">•</span>

            <Link
              href="/insights"
              className={`px-4 py-2.5 transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-black font-semibold"
                  : "text-[#A0B6D0] hover:text-black"
              }`}
            >
              Insights
            </Link>
            <span className="text-[#002C5F]/30 select-none">•</span>

            <Link
              href="/contact"
              className={`px-4 py-2.5 transition-colors ${
                pathname === "/contact"
                  ? "text-black font-semibold"
                  : "text-[#A0B6D0] hover:text-black"
              }`}
            >
              Contact
            </Link>

            <div className="ml-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setInquiryModalOpen(true)}
                className="px-4 py-2.5 text-[13.5px] font-medium border border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white transition-colors"
              >
                Quick Inquiry
              </button>

              <Link
                href="/portal"
                className="btn-liquid-y bg-[#002C5F] text-white px-6 py-2.5 text-[14px] font-medium inline-flex items-center gap-2 rounded-[2px]"
              >
                <span className="btn-txt-primary gap-1.5">
                  Client Login <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="btn-txt-clone gap-1.5 bg-[#181b31]">
                  Partner Portal <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#002C5F] border border-gray-200"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav Drawer (matching sabcltd.com data-mobile-nav-style=modern rgb(0, 44, 95)) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 mt-3 py-5 px-4 space-y-3">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[17px] font-semibold text-[#002C5F]"
            >
              Who We Are
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[17px] font-semibold text-[#002C5F]"
            >
              What We Do
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[17px] font-semibold text-[#002C5F]"
            >
              Projects (Alkebulan City Master Plan)
            </Link>
            <div className="pl-4 border-l-2 border-[#002C5F]/20 space-y-1.5">
              {PROJECT_DROPDOWN_LINKS.slice(0, 5).map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm text-[#54595F]"
                >
                  {p.label}
                </Link>
              ))}
            </div>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[17px] font-semibold text-[#002C5F]"
            >
              Insights & Press
            </Link>
            <Link
              href="/become-a-vendor"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[17px] font-semibold text-[#002C5F]"
            >
              Become a Vendor
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[17px] font-semibold text-[#002C5F]"
            >
              Contact
            </Link>
            <div className="pt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInquiryModalOpen(true);
                }}
                className="w-full py-3 border border-[#002C5F] text-[#002C5F] font-medium text-center"
              >
                Start a Project Inquiry
              </button>
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#002C5F] text-white font-medium text-center"
              >
                Client Login / Partner Portal
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Left Vertical Sticky Bar (Exact clone of SABC lqd-stickybar-left id=631fe8f) */}
      <div className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
        <a
          href="mailto:info@imperialmadeiz.com"
          className="writing-vertical rotate-180 font-inter text-[12px] tracking-[0.18em] text-[#002C5F] hover:text-[#FE5D5B] transition-colors font-medium py-3"
        >
          info@imperialmadeiz.com
        </a>
        <div className="w-[1px] h-14 bg-[#002C5F]/25" />
      </div>

      {/* Right Vertical Sticky Bar (Exact clone of SABC lqd-stickybar-right id=e15be72) */}
      <div className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
        <button
          type="button"
          onClick={() => setInquiryModalOpen(true)}
          title="Open Project Inquiry Modal"
          className="w-10 h-10 bg-[#002C5F] hover:bg-[#FE5D5B] text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <MessageSquarePlus className="w-4 h-4" />
        </button>
        <a
          href="#wrap"
          className="writing-vertical font-inter text-[11px] uppercase tracking-[0.2em] text-[#002C5F] hover:text-black transition-colors flex items-center gap-2 py-2"
        >
          <span>scroll to top</span>
        </a>
        <a
          href="#wrap"
          aria-label="Scroll to top"
          className="w-8 h-8 border border-[#002C5F]/30 flex items-center justify-center text-[#002C5F] hover:bg-[#002C5F] hover:text-white transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* SABC Slide-Over / Full Modal Project Inquiry Form (Exact clone of Top Section 1 & 2 Modal on sabcltd.com) */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-[970px] p-6 sm:p-10 relative shadow-2xl border-t-4 border-[#002C5F] my-8">
            <button
              type="button"
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 bg-gray-100 hover:bg-[#002C5F] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
                IMPERIAL MADEIZ LIMITED • ALKEBULAN CITY GHANA
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#181b31] mt-1">
                Have a project or investment in mind? Let&apos;s talk.
              </h2>
            </div>

            <InquiryFormGrid
              compact
              onSuccess={() => setInquiryModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

