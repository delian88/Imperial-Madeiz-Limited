import React from "react";
import InquiryFormGrid from "@/components/InquiryFormGrid";
import { Phone, Mail, MapPin, Globe, Youtube } from "lucide-react";
import { COMPANY_INFO } from "@/db/seed-data";

export const metadata = {
  title: "Contact Imperial Madeiz Limited | Alkebulan City Ghana",
  description:
    "Contact Imperial Madeiz Limited regarding the Alkebulan City Ghana Development Project at Agave-Dzebetato, South Tongu District, Volta Region, or our Lekki, Lagos corporate office.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header Banner (matching sabcltd.com/contact-sabc/) */}
      <section className="bg-[#002C5F] text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
            CONNECT WITH IMPERIAL MADEIZ LIMITED
          </span>
          <h1 className="text-[40px] sm:text-[54px] font-bold text-white mt-2">
            Have a project in Mind? Let&apos;s talk.
          </h1>
          <p className="text-lg text-white/85 mt-3 max-w-2xl">
            Whether you are an international investor, diaspora homebuyer,
            institutional partner, or West African contractor, our executive
            team is ready to collaborate.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Office Locations */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#181b31] mb-6">
            Project, Investment &amp; Residential Inquiry Form
          </h2>
          <InquiryFormGrid />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-gray-200">
          <div className="p-7 bg-[#f8fafc] border-l-4 border-[#002C5F] space-y-3">
            <div className="w-10 h-10 bg-[#002C5F] text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-[#181b31]">
              Ghana Smart City Project Site
            </h3>
            <p className="text-sm text-[#54595F] leading-relaxed">
              <strong>Alkebulan City Ghana Development Project</strong>
              <br />
              Agave-Dzebetato, South Tongu District, Volta Region, Ghana (2,000+
              Acre Master Site).
            </p>
          </div>

          <div className="p-7 bg-[#f8fafc] border-l-4 border-[#FE5D5B] space-y-3">
            <div className="w-10 h-10 bg-[#FE5D5B] text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-[#181b31]">
              Regional Corporate Office
            </h3>
            <p className="text-sm text-[#54595F] leading-relaxed">
              <strong>Imperial Madeiz Limited HQ</strong>
              <br />
              Badore Road, Lekki, Lagos State, Nigeria
              <br />
              Consortium Operations: Ghana • Nigeria • Togo • Benin • Côte
              d&apos;Ivoire.
            </p>
          </div>

          <div className="p-7 bg-[#f8fafc] border-l-4 border-[#002C5F] space-y-3">
            <div className="w-10 h-10 bg-[#002C5F] text-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-[#181b31]">
              Direct Lines &amp; Digital Channels
            </h3>
            <div className="text-sm text-[#54595F] space-y-1.5">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#002C5F]" />
                <a
                  href="tel:+2348099995997"
                  className="hover:text-[#002C5F] font-medium"
                >
                  +234 80 99 99 59 97
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#002C5F]" />
                <a
                  href="tel:+2347025002799"
                  className="hover:text-[#002C5F] font-medium"
                >
                  +234 70 25 00 27 99
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#002C5F]" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#002C5F] font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#002C5F]" />
                <a
                  href={COMPANY_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002C5F] underline"
                >
                  imperialmadeizltd.com.ng
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-[#FE5D5B]" />
                <a
                  href={COMPANY_INFO.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002C5F] underline"
                >
                  @imperialmadeiz1804
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

