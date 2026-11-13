import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/db/seed-data";
import { AnimatedText, FadeInBlock } from "@/components/AnimatedText";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
  Handshake,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "About Imperial Madeiz Limited | Our Story & Leadership",
  description:
    "Learn about Imperial Madeiz Limited (Medeiz Limited), Founder & CEO Dr. Delorn Madeiz, Executive Director Mrs. Anael Madeiz, and the 2,000+ acre Alkebulan City Ghana Development Project at Agave-Dzebetato.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Titlebar Banner (matching sabcltd.com/about-sabc/) */}
      <section className="relative bg-[#002C5F] text-white py-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1140px] mx-auto relative z-10">
          <FadeInBlock direction="down">
            <h6 className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
              WHO WE ARE
            </h6>
          </FadeInBlock>
          <AnimatedText
            text="About Imperial Madeiz"
            as="h1"
            className="text-[38px] sm:text-[54px] font-bold text-white mt-2 leading-tight"
            delay={0.1}
          />
          <FadeInBlock delay={0.2} direction="up">
            <h5 className="text-base sm:text-xl font-inter text-white/85 mt-2 tracking-wide">
              IMPERIAL MADEIZ LIMITED (MEDEIZ LIMITED) • ALKEBULAN CITY GHANA
            </h5>
          </FadeInBlock>
        </div>
      </section>

      {/* Core Intro & D.I.C.E. Philosophy (Exact structure of sabcltd.com/about-sabc/) */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <FadeInBlock direction="up" delay={0.05}>
              <p className="text-[19px] text-[#181b31] font-medium leading-relaxed">
                Imperial Madeiz Limited is a full-service private investment,
                smart-city development, and building construction company. We
                offer traditional general consulting and contracting services as
                well as pre-construction, construction management, and design-and-build
                services across West Africa.
              </p>
            </FadeInBlock>
            <FadeInBlock direction="up" delay={0.1}>
              <p className="text-[16px] text-[#54595F] leading-relaxed">
                Our philosophy is founded upon a clear understanding of our
                continent&apos;s and clients&apos; requirements from the outset of
                any landmark initiative—keeping every stakeholder aligned through
                continuous collaboration with traditional leaders, district
                assemblies, global investors, and regional EPC contractors.
              </p>
            </FadeInBlock>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <FadeInBlock direction="up" delay={0.15}>
                <div className="p-6 bg-[#f8fafc] border-t-4 border-[#002C5F] h-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-inter uppercase tracking-wider text-[#002C5F] font-bold">
                    Core Values
                  </span>
                  <h4 className="text-lg font-semibold text-[#181b31] mt-1">
                    (DICE)
                  </h4>
                  <p className="text-sm text-[#54595F] mt-2">
                    Dependable, Innovative, Customer-centric, Ethical
                  </p>
                </div>
              </FadeInBlock>
              <FadeInBlock direction="up" delay={0.22}>
                <div className="p-6 bg-[#f8fafc] border-t-4 border-[#FE5D5B] h-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-inter uppercase tracking-wider text-[#FE5D5B] font-bold">
                    Our Vision
                  </span>
                  <h4 className="text-lg font-semibold text-[#181b31] mt-1">
                    Sustainable Cities
                  </h4>
                  <p className="text-sm text-[#54595F] mt-2">
                    To be Africa&apos;s most reliable development partner in
                    delivering sustainable 24-hour smart cities.
                  </p>
                </div>
              </FadeInBlock>
              <FadeInBlock direction="up" delay={0.29}>
                <div className="p-6 bg-[#f8fafc] border-t-4 border-[#002C5F] h-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-inter uppercase tracking-wider text-[#002C5F] font-bold">
                    Our Mission
                  </span>
                  <h4 className="text-lg font-semibold text-[#181b31] mt-1">
                    2M+ Jobs &amp; Growth
                  </h4>
                  <p className="text-sm text-[#54595F] mt-2">
                    Providing urban and construction solutions that generate over
                    two million jobs and 2,000+ SMEs.
                  </p>
                </div>
              </FadeInBlock>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FadeInBlock direction="left" delay={0.2}>
              <div className="border-4 border-[#002C5F] overflow-hidden shadow-xl bg-white">
                <img
                  src="/images/delorn-madeiz-hd.jpg"
                  alt="Dr Delorn Madeiz, CEO of Imperial Madeiz Ltd, addressing the gathering at Agave-Dzebetato"
                  className="w-full h-[360px] object-cover object-top"
                />
                <div className="p-5 bg-[#002C5F] text-white">
                  <h4 className="text-lg font-semibold text-white">
                    Dr. Delorn Madeiz
                  </h4>
                  <p className="text-xs font-inter text-[#FFBC7D] uppercase tracking-wider mt-0.5">
                    Founder &amp; Chief Executive Officer, Imperial Madeiz Ltd
                  </p>
                  <p className="text-xs text-white/85 mt-2 leading-relaxed">
                    Addressing traditional rulers, district officials, and
                    community members at the Agave-Dzebetato ground-breaking
                    ceremony in the South Tongu District, Volta Region.
                  </p>
                </div>
              </div>
            </FadeInBlock>
          </div>
        </div>
      </section>

      {/* Our Story & Our Growth (matching sabcltd.com/about-sabc/) */}
      <section className="bg-[#f5f7fa] py-20 px-6 lg:px-12">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 sm:p-10 shadow-sm border border-gray-100 space-y-4">
            <span className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
              GENESIS &amp; PURPOSE
            </span>
            <h2 className="text-3xl font-semibold text-[#181b31]">Our Story</h2>
            <p className="text-[15.5px] text-[#54595F] leading-relaxed">
              The urban infrastructure and real estate sector in Ghana and West
              Africa is rapidly evolving. With national capitals experiencing
              congestion and rural youth facing pressure to migrate to urban
              centres or embark on perilous journeys abroad, the continent needs
              bold, visionary private developers.
            </p>
            <p className="text-[15.5px] text-[#54595F] leading-relaxed">
              Founded by{" "}
              <strong className="text-[#181b31]">Dr. Delorn Madeiz</strong>{" "}
              (alongside Executive Director{" "}
              <strong className="text-[#181b31]">Mrs. Anael Madeiz</strong>),
              Imperial Madeiz Limited launched the multi-billion-dollar{" "}
              <strong className="text-[#002C5F]">
                Alkebulan City Ghana Development Project
              </strong>{" "}
              on over 2,000 acres at{" "}
              <strong className="text-[#181b31]">
                Agave-Dzebetato in the South Tongu District of the Volta Region
              </strong>
              . Having left Ghana at age 10 and witnessed the hardships faced by
              Africans abroad, Dr. Madeiz conceived Alkebulan City as a
              self-reliant African metropolis and a welcoming bridge for the
              global African diaspora.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 shadow-sm border border-gray-100 space-y-4">
            <span className="text-xs font-inter uppercase tracking-[0.2em] text-[#FE5D5B] font-semibold">
              WEST AFRICAN CONSORTIUM
            </span>
            <h2 className="text-3xl font-semibold text-[#181b31]">
              Our Growth &amp; Execution
            </h2>
            <p className="text-[15.5px] text-[#54595F] leading-relaxed">
              Imperial Madeiz Limited has demonstrated that cross-border African
              professional partnership is transformative. The Alkebulan City
              project is executed by a coordinated consortium of construction
              and engineering firms from{" "}
              <strong className="text-[#181b31]">
                Ghana, Nigeria, Togo, Benin, and Côte d&apos;Ivoire
              </strong>
              , alongside real estate partners such as{" "}
              <strong className="text-[#181b31]">BlueGates Global</strong>.
            </p>
            <p className="text-[15.5px] text-[#54595F] leading-relaxed">
              With a firm commitment that{" "}
              <strong className="text-[#002C5F]">
                60 per cent of the 5,000 site workers are recruited locally
              </strong>
              , a capacity for{" "}
              <strong className="text-[#002C5F]">5 million habitats</strong> and{" "}
              <strong className="text-[#002C5F]">509,000+ family homes</strong>,
              and a 5-year master schedule culminating in the official{" "}
              <strong className="text-[#002C5F]">2030 inauguration</strong>,
              Imperial Madeiz Limited is turning the Volta Region into a
              24-hour economic powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* Our Culture (Deliverability & Open Relationship from sabcltd.com/about-sabc/) */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h6 className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
            SUSTAINABILITY &amp; EXCELLENCE
          </h6>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#181b31] mt-2">
            Our Culture
          </h2>
          <p className="text-[16px] text-[#54595F] mt-2">
            We are driven by these key attributes through our sustainability,
            environmental stewardship, and corporate culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Deliverability",
              desc: "We strive to find better ways to deliver for our clients, communities, and the construction industry. We challenge the status quo and make the seemingly impossible possible.",
            },
            {
              icon: Handshake,
              title: "Open Relationship",
              desc: "Cordial, transparent ties between traditional landowners, the South Tongu District Assembly, local youth, and our 5-nation West African contractor consortium.",
            },
            {
              icon: Sparkles,
              title: "24-Hour Innovation",
              desc: "Integrating clean energy plants, a sovereign cyber security centre, helicopter emergency medical services, and smart utilities into one cohesive urban ecosystem.",
            },
            {
              icon: Users,
              title: "Local Empowerment",
              desc: "Guaranteeing 60% local recruitment of 5,000+ construction workers while incubating 2,000+ small and medium start-up enterprises across Ghana and Africa.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 border border-gray-200 hover:border-[#002C5F] transition-colors bg-white group"
              >
                <div className="w-12 h-12 bg-[#002C5F]/10 group-hover:bg-[#002C5F] text-[#002C5F] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-[#181b31]">
                  {item.title}
                </h4>
                <p className="text-sm text-[#7A7A7A] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership & Community Stakeholders (from Graphic Online & AdomOnline) */}
      <section className="bg-[#002C5F] text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-inter uppercase tracking-[0.2em] text-[#FFBC7D] font-semibold">
              VOICES FROM AGAVE-DZEBETATO
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2">
              Leadership, Traditional Rulers &amp; Assembly Endorsements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.stakeholders.map((person) => (
              <div
                key={person.name}
                className="bg-white/5 border border-white/15 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 bg-[#FE5D5B] text-white text-[10px] font-inter uppercase tracking-wider font-semibold mb-3">
                    {person.category}
                  </span>
                  <h4 className="text-xl font-semibold text-white">
                    {person.name}
                  </h4>
                  <p className="text-xs font-inter text-[#FFBC7D] mt-0.5">
                    {person.role}
                  </p>
                  <p className="text-sm text-white/85 mt-4 leading-relaxed">
                    <Quote className="w-4 h-4 text-[#FFBC7D] inline mr-1.5 -mt-1" />
                    {person.statement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Groundbreaking Photo Strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                src: "/images/agave-groundbreaking-1.jpg",
                cap: "Ground-breaking Ceremony at Agave-Dzebetato",
              },
              {
                src: "/images/agave-groundbreaking-2.jpg",
                cap: "Traditional Rulers & Dignitaries in South Tongu",
              },
              {
                src: "/images/agave-groundbreaking-3.jpg",
                cap: "Site Inspection on the 2,000+ Acre Master Land",
              },
              {
                src: "/images/agave-groundbreaking-4.jpg",
                cap: "West African Contractors & Community Leaders",
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="bg-black/30 border border-white/15 overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.cap}
                  className="w-full h-48 object-cover"
                />
                <p className="p-3 text-xs font-inter text-white/80">
                  {photo.cap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

