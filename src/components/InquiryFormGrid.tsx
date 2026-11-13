"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

interface InquiryFormGridProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function InquiryFormGrid({
  onSuccess,
  compact = false,
}: InquiryFormGridProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [interestedService, setInterestedService] = useState(
    "Pre Construction Services"
  );
  const [budgetRange, setBudgetRange] = useState("< 10000");
  const [projectDetails, setProjectDetails] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          companyName,
          phone,
          interestedService,
          budgetRange,
          projectDetails,
          acceptedTerms,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }
      setStatusMessage({
        type: "success",
        text: data.message,
      });
      setFullName("");
      setEmail("");
      setCompanyName("");
      setPhone("");
      setProjectDetails("");
      if (onSuccess) {
        setTimeout(onSuccess, 1800);
      }
    } catch (err) {
      setStatusMessage({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Could not submit your inquiry. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Row 1: Name, Email, Company */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="modal-b modal-bb-n modal-p bg-white">
          <p className="modal-text mb-2">Nice to meet you</p>
          <input
            type="text"
            required
            placeholder="What is your name?"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full text-[17px] text-black placeholder-[#BAB6B6] focus:outline-none bg-transparent"
          />
        </div>
        <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
          <p className="modal-text mb-2">Email address</p>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-[17px] text-black placeholder-[#BAB6B6] focus:outline-none bg-transparent"
          />
        </div>
        <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
          <div className="flex items-center justify-between mb-2">
            <p className="modal-text">Company Name / Phone</p>
            <span className="modal-text text-xs text-gray-400">Optional</span>
          </div>
          <input
            type="text"
            placeholder="Company or Phone (+233 / +234)"
            value={companyName || phone}
            onChange={(e) => {
              setCompanyName(e.target.value);
              setPhone(e.target.value);
            }}
            className="w-full text-[17px] text-black placeholder-[#BAB6B6] focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Row 2: Interested Service & Budget */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="modal-b modal-bb-n modal-p bg-white">
          <p className="modal-text mb-3">Interested Service</p>
          <div className="flex flex-wrap gap-4 text-[15px] text-[#54595F]">
            {[
              "Pre Construction Services",
              "Build & Design",
              "Construction Management",
              "Alkebulan Smart City Plot",
            ].map((service) => (
              <label
                key={service}
                className="inline-flex items-center gap-2 cursor-pointer hover:text-[#002C5F] transition-colors"
              >
                <input
                  type="radio"
                  name="interestedService"
                  value={service}
                  checked={interestedService === service}
                  onChange={(e) => setInterestedService(e.target.value)}
                  className="accent-[#002C5F] w-4 h-4"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
          <p className="modal-text mb-3">Budget (USD)</p>
          <div className="flex flex-wrap gap-5 text-[15px] text-[#54595F]">
            {[
              "< 10000",
              "< 20000",
              "< 30000",
              "$50,000 - $250,000",
              "> $500,000",
            ].map((b) => (
              <label
                key={b}
                className="inline-flex items-center gap-2 cursor-pointer hover:text-[#002C5F] transition-colors"
              >
                <input
                  type="radio"
                  name="budgetRange"
                  value={b}
                  checked={budgetRange === b}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="accent-[#002C5F] w-4 h-4"
                />
                <span>{b}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Project Details */}
      <div className="modal-b modal-p bg-white">
        <p className="modal-text mb-2">Project Details</p>
        <textarea
          rows={compact ? 3 : 4}
          required
          placeholder="Brief project details, Alkebulan City zone interest, or partnership proposal..."
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          className="w-full text-[17px] text-black placeholder-[#BAB6B6] focus:outline-none bg-transparent resize-none"
        />
      </div>

      {/* Row 4: Acceptance & Submit */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <label className="inline-flex items-center gap-2.5 text-sm text-[#54595F] cursor-pointer">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            className="accent-[#002C5F] w-4 h-4"
          />
          <span>
            I am bound by the terms of the Service and I accept Imperial Madeiz
            Ltd Privacy Policy
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="btn-liquid-y bg-[#002C5F] hover:bg-[#181b31] text-white font-medium text-[15px] px-8 py-4 inline-flex items-center justify-center gap-3 min-w-[200px] disabled:opacity-60"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </span>
          ) : (
            <>
              <span className="btn-txt-primary gap-2">
                Send Message <ArrowRight className="w-4 h-4" />
              </span>
              <span className="btn-txt-clone gap-2">
                Submit Proposal <ArrowRight className="w-4 h-4" />
              </span>
            </>
          )}
        </button>
      </div>

      {statusMessage && (
        <div
          className={`mt-4 p-4 border text-sm flex items-center gap-2.5 ${statusMessage.type === "success"
              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
              : "bg-red-50 border-red-300 text-red-900"
            }`}
        >
          {statusMessage.type === "success" && (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}
    </form>
  );
}

