import React from "react";
import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* SABC Pre-Footer Cooperation Callout (Exact match to Top Section 18 Header on sabcltd.com) */}
      <section className="bg-[#f8fafc] border-t border-gray-200 py-16 px-6 lg:px-[100px]">
        <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold mb-3">
              VISION 2030 • AGAVE-DZEBETATO, VOLTA REGION, GHANA
            </p>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#181b31] leading-tight max-w-2xl">
              We&apos;d love to cooperate to build amazing cities &amp;
              residences
            </h2>
            <p className="text-[20px] sm:text-[24px] text-[#54595F] font-normal mt-2 max-w-2xl leading-snug">
              Through a unique combination of engineering, construction and
              design disciplines and expertise.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-liquid-y bg-[#002C5F] text-white px-8 py-4 font-inter text-[15px] font-medium inline-flex items-center gap-2"
            >
              <span className="btn-txt-primary gap-2">
                Start A Conversation <ArrowUpRight className="w-4 h-4" />
              </span>
              <span className="btn-txt-clone gap-2 bg-[#181b31]">
                Partner With Us <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/become-a-vendor"
              className="border border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white px-7 py-4 font-inter text-[15px] font-medium transition-colors"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      </section>

      {/* Main Navy Footer (#002C5F exact match to elementor-element-6824bc7d on sabcltd.com) */}
      <section className="bg-[#002C5F] text-white pt-16 pb-12 px-6 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: White Logo + Call & Message */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 bg-white text-[#002C5F] flex items-center justify-center font-bold relative">
                <Building2 className="w-6 h-6" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#FE5D5B]" />
              </div>
              <div>
                <span className="block font-inter font-bold text-lg tracking-tight text-white leading-none">
                  IMPERIAL MADEIZ
                </span>
                <span className="block font-inter text-[10px] tracking-[0.22em] uppercase text-white/75 mt-1">
                  LIMITED • GHANA &amp; NIGERIA
                </span>
              </div>
            </Link>

            <p className="font-inter text-[14px] text-white/75 leading-relaxed max-w-sm">
              Project implementing group of the multi-billion-dollar{" "}
              <strong className="text-white">
                Alkebulan City Ghana Development Project
              </strong>{" "}
              at Agave-Dzebetato, South Tongu District, Volta Region. Led by
              Founder &amp; CEO Dr. Delorn Madeiz and Executive Director Mrs.
              Anael Madeiz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <p className="font-inter text-[11px] uppercase tracking-wider text-white/60 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FE5D5B]" /> CALL OUR
                  OFFICE
                </p>
                <a
                  href="tel:+2348099995997"
                  className="block font-inter text-[15px] text-white hover:text-[#FFBC7D] transition-colors"
                >
                  +234 80 99 99 59 97
                </a>
                <a
                  href="tel:+2347025002799"
                  className="block font-inter text-[14px] text-white/85 hover:text-[#FFBC7D] transition-colors mt-0.5"
                >
                  +234 70 25 00 27 99
                </a>
              </div>

              <div>
                <p className="font-inter text-[11px] uppercase tracking-wider text-white/60 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FE5D5B]" /> SEND A MESSAGE
                </p>
                <a
                  href="mailto:info@imperialmadeiz.com"
                  className="block font-inter text-[15px] text-white hover:text-[#FFBC7D] transition-colors break-all"
                >
                  info@imperialmadeiz.com
                </a>
                <a
                  href="http://imperialmadeizltd.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-inter text-[13px] text-white/75 hover:text-white mt-0.5"
                >
                  imperialmadeizltd.com.ng
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-inter text-[17px] font-semibold text-white tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-2.5 font-inter text-[15px] text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/alkebulan-city-master-plan"
                  className="hover:text-white transition-colors"
                >
                  Alkebulan City
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: MORE */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-inter text-[17px] font-semibold text-white tracking-wide">
              MORE
            </h3>
            <ul className="space-y-2.5 font-inter text-[15px] text-white/80">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-white transition-colors"
                >
                  Insights &amp; Press
                </Link>
              </li>
              <li>
                <Link
                  href="/become-a-vendor"
                  className="hover:text-white transition-colors"
                >
                  Become a vendor
                </Link>
              </li>
              <li>
                <Link
                  href="/portal"
                  className="hover:text-white transition-colors"
                >
                  Client &amp; Partner Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: OFFICE HQ & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-inter text-[17px] font-semibold text-white tracking-wide">
              OFFICE HQ &amp; PROJECT SITE
            </h3>
            <div className="space-y-3 font-inter text-[14.5px] text-white/85">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FE5D5B] shrink-0 mt-1" />
                <span>
                  <strong className="text-white block">
                    Ghana Smart City Site:
                  </strong>
                  Agave-Dzebetato, South Tongu District, Volta Region, Ghana
                  (2,000+ Acre Alkebulan City Development).
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFBC7D] shrink-0 mt-1" />
                <span>
                  <strong className="text-white block">
                    Regional Corporate Office:
                  </strong>
                  Badore Road, Lekki, Lagos State, Nigeria • Executing across
                  Ghana, Nigeria, Togo, Benin &amp; Côte d&apos;Ivoire.
                </span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@imperialmadeiz1804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Imperial Madeiz YouTube Channel"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FE5D5B] flex items-center justify-center text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.graphic.com.gh/news/general-news/ghana-news-modern-city-project-takes-off-at-agave-dzebetato.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#002C5F] flex items-center justify-center text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@imperialmadeiz1804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#002C5F] flex items-center justify-center text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@imperialmadeiz1804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#002C5F] flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@imperialmadeiz1804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#002C5F] flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="max-w-[1240px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-inter text-[14px] text-white/70">
          <p>
            Copyright © {new Date().getFullYear()} Imperial Madeiz Limited. All
            Rights Reserved.
          </p>
          <p className="text-xs text-white/55">
            Alkebulan City Ghana Development Project • Agave-Dzebetato, South
            Tongu District, Volta Region
          </p>
        </div>
      </section>
    </footer>
  );
}

