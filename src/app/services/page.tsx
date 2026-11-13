import React from "react";
import InquiryFormGrid from "@/components/InquiryFormGrid";
import { AnimatedText, FadeInBlock } from "@/components/AnimatedText";
import {
  Compass,
  Building,
  HardHat,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Our Services & Process | Imperial Madeiz Limited",
  description:
    "Pre-Construction, Build & Design, and Construction Management services by Imperial Madeiz Limited across Ghana, Nigeria, Togo, Benin, and Côte d'Ivoire.",
};

const DETAILED_SERVICES = [
  {
    id: "pre-construction",
    tag: "Services / 01",
    title: "Pre Construction",
    image: "/images/service-preconstruction.jpg",
    icon: Compass,
    description:
      "At Imperial Madeiz Limited, we believe the identification of shared community and investor goals is one of any pre-construction phase's primary objectives. Our pre-construction schedule serves as the definitive road map for master-planning decisions across our 2,000+ acre Alkebulan City site at Agave-Dzebetato.",
    bullets: [
      "Master-Plan Land Surveying, Geotechnical & Environmental Impact Assessment",
      "Conceptual Budgeting, Life-Cycle Analysis & Value Engineering",
      "Traditional Authority & District Assembly Permit Coordination",
      "Phase Analysis Estimating & 24-Hour Utility Grid Planning",
    ],
  },
  {
    id: "design-build",
    tag: "Services / 02",
    title: "Build & Design",
    image: "/images/service-design-build.jpg",
    icon: Building,
    description:
      "Our design and build services ensure that project owners, diaspora investors, and institutional partners can contract a single accountable entity to provide both architectural design and turnkey construction—from executive residential villas to our 7-Star Hotel, University, and Teaching Hospital.",
    bullets: [
      "Single-Source Turnkey Responsibility Merging Architecture, Engineering & EPC",
      "Smart Residential Estates (509,000+ Family Housing Units Blueprint)",
      "Quaternary Teaching Hospital & Rooftop Medevac Heliport Design",
      "Private Jet Aerodrome, 40,000-Seat Stadium & Grand Conference Centre",
    ],
  },
  {
    id: "construction-management",
    tag: "Services / 03",
    title: "Construction Management",
    image: "/images/service-construction-mgmt.jpg",
    icon: HardHat,
    description:
      "Our construction management services assure stakeholders of a well-run, peaceful, and high-efficiency job site. Coordinating construction firms from Ghana, Nigeria, Togo, Benin, and Côte d'Ivoire—with 60% local recruitment of 5,000+ workers—our team provides rigorous cost control, scheduling coordination, and quality control.",
    bullets: [
      "Multi-Nation EPC Consortium Coordination (Ghana, Nigeria, Togo, Benin, Côte d'Ivoire)",
      "60% Local Workforce Recruitment & Vocational Training Integration",
      "Strict Cost Control, Weekly Executive Status Reporting & Site Safety Compliance",
      "Independent Energy Plant, Cyber Security Hub & Water Infrastructure Delivery",
    ],
  },
];

const STEPS = [
  {
    num: "01.",
    title: "Consultation",
    text: "We align investors, diaspora homebuyers, traditional authorities, and municipal regulators around a clear, sustainable urban vision.",
  },
  {
    num: "02.",
    title: "Proposal",
    text: "Once we know what you want in your residential, commercial, or industrial build, our team prepares a comprehensive project proposal outlining schedule, materials, partners, and estimates upfront.",
  },
  {
    num: "03.",
    title: "Design Phase",
    text: "Careful consideration of architectural details, smart utilities, and environmental harmony is essential to the success of every build within Alkebulan City.",
  },
  {
    num: "04.",
    title: "Construction",
    text: "When you contract Imperial Madeiz Limited, you are treated to first-class service with weekly update meetings and transparent reporting from our regional project managers.",
  },
  {
    num: "05",
    title: "Inspection",
    text: "Throughout construction and prior to handover, rigorous phase inspections verify structural, safety, and environmental compliance before we hand over the keys.",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Banner (matching sabcltd.com/sabc-services/) */}
      <section className="bg-[#002C5F] text-white py-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1140px] mx-auto">
          <FadeInBlock direction="down">
            <h6 className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
              OUR SERVICES &amp; PROCESS
            </h6>
          </FadeInBlock>
          <AnimatedText
            text="We build ideas driven by the future."
            as="h1"
            className="text-[36px] sm:text-[54px] font-bold text-white mt-2 leading-tight"
            delay={0.1}
          />
          <FadeInBlock delay={0.2} direction="up">
            <h5 className="text-base sm:text-xl text-white/90 mt-4 max-w-3xl leading-relaxed">
              Experience, Professionalism, Customer-Focused, and Industry Experts.
              We offer a comprehensive range of smart-city development and
              construction services that enables us to tailor a delivery system
              that meets our clients&apos; needs, goals, and budget.
            </h5>
            <p className="text-sm font-inter text-[#FFBC7D] mt-3 font-semibold">
              — Dr. Delorn Madeiz (Founder &amp; CEO) &amp; Mrs. Anael Madeiz
              (Executive Director)
            </p>
          </FadeInBlock>
        </div>
      </section>

      {/* Detailed Services Blocks */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto space-y-20">
        {DETAILED_SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          const isReversed = idx % 2 === 1;
          return (
            <FadeInBlock
              key={srv.id}
              direction={isReversed ? "right" : "left"}
              delay={0.1}
            >
              <div
                id={srv.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center scroll-mt-28"
              >
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="overflow-hidden rounded-[4px] shadow-xl border border-gray-100 group">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
                    <Icon className="w-4 h-4 text-[#FE5D5B]" />
                    <span>{srv.tag}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-[#181b31]">
                    {srv.title}
                  </h2>
                  <p className="text-[16px] text-[#54595F] leading-relaxed">
                    {srv.description}
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {srv.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-[#181b31]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#002C5F] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInBlock>
          );
        })}
      </section>

      {/* Experience Quality & Excellence Banner */}
      <section className="bg-[#181b31] text-white py-16 px-6 lg:px-12 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <FadeInBlock direction="down">
            <span className="text-xs font-inter uppercase tracking-[0.25em] text-[#FFBC7D]">
              ALKEBULAN CITY GHANA • VISION 2030
            </span>
          </FadeInBlock>
          <AnimatedText
            text="Experience Quality & Excellence"
            as="h2"
            className="text-3xl sm:text-5xl font-bold text-white mt-2 justify-center"
            delay={0.1}
          />
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 px-6 lg:px-12 max-w-[1140px] mx-auto">
        <div className="mb-10">
          <FadeInBlock direction="left">
            <h6 className="text-xs font-inter uppercase tracking-[0.2em] text-[#002C5F] font-semibold">
              An insight on how we serve you
            </h6>
          </FadeInBlock>
          <AnimatedText
            text="Our Process at Imperial Madeiz"
            as="h3"
            className="text-3xl sm:text-4xl font-semibold text-[#181b31] mt-1"
            delay={0.1}
          />
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {STEPS.map((s, idx) => (
            <FadeInBlock key={s.num} direction="up" delay={idx * 0.08}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2">
                  <span className="text-4xl sm:text-5xl font-bold text-[#002C5F]">
                    {s.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-2xl font-semibold text-[#181b31]">
                    {s.title}
                  </h4>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[15.5px] text-[#7A7A7A] leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            </FadeInBlock>
          ))}
        </div>
      </section>

      {/* Embedded SABC Greeting & Project Inquiry Form (matching bottom of sabcltd.com/sabc-services/) */}
      <section className="bg-[#f8fafc] py-20 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#181b31] mb-8 leading-snug">
            Have a project in mind? Do not hesitate to say{" "}
            <span className="text-[#002C5F] underline decoration-[#FE5D5B]">
              hello. akwaaba. hallo. namaste. merhaba. salve.
            </span>
          </h2>
          <InquiryFormGrid />
        </div>
      </section>
    </div>
  );
}

