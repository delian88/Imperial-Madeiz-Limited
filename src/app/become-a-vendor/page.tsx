"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export default function BecomeAVendorPage() {
  const [form, setForm] = useState({
    companyName: "",
    rcNumber: "",
    yearEstablished: "",
    contactPerson: "",
    website: "",
    businessAddress: "",
    phone: "",
    email: "",
    tinNumber: "",
    bankAccountName: "",
    bankName: "",
    accountNumber: "",
    productsOrServices: "",
    countryOfOrigin: "Ghana",
    acceptedTerms: true,
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function updateField(field: keyof typeof form, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/vendors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to register vendor");
      }
      setFeedback({ type: "success", text: data.message });
      setForm({
        companyName: "",
        rcNumber: "",
        yearEstablished: "",
        contactPerson: "",
        website: "",
        businessAddress: "",
        phone: "",
        email: "",
        tinNumber: "",
        bankAccountName: "",
        bankName: "",
        accountNumber: "",
        productsOrServices: "",
        countryOfOrigin: "Ghana",
        acceptedTerms: true,
      });
    } catch (err) {
      setFeedback({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Error submitting vendor registration",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {/* Header Banner (matching sabcltd.com/become-a-vendor/) */}
      <section className="bg-[#002C5F] text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1140px] mx-auto">
          <span className="font-inter text-xs uppercase tracking-[0.22em] text-[#FFBC7D] font-semibold">
            WEST AFRICAN EPC CONSORTIUM &amp; PROCUREMENT
          </span>
          <h1 className="text-[38px] sm:text-[52px] font-bold text-white mt-2">
            Want to become a Vendor or Supplier? Let&apos;s talk.
          </h1>
          <p className="text-lg text-white/85 mt-3 max-w-3xl">
            Imperial Madeiz Limited is actively onboarding qualified
            construction contractors, material suppliers, and service providers
            from <strong>Ghana, Nigeria, Togo, Benin, and Côte d&apos;Ivoire</strong>{" "}
            for the 2,000+ acre Alkebulan City Ghana Development Project at
            Agave-Dzebetato.
          </p>
        </div>
      </section>

      {/* SABC Bordered Vendor Registration Form */}
      <section className="py-20 px-6 lg:px-12 max-w-[1040px] mx-auto">
        <form onSubmit={handleSubmit} className="w-full">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="modal-b modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Company Name*</p>
              <input
                type="text"
                required
                placeholder="Registered company name"
                value={form.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">RC Number (RGD / CAC)*</p>
              <input
                type="text"
                required
                placeholder="Registration number"
                value={form.rcNumber}
                onChange={(e) => updateField("rcNumber", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Year Established*</p>
              <input
                type="text"
                required
                placeholder="e.g. 2015"
                value={form.yearEstablished}
                onChange={(e) => updateField("yearEstablished", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="modal-b modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Contact Person *</p>
              <input
                type="text"
                required
                placeholder="Full name of representative"
                value={form.contactPerson}
                onChange={(e) => updateField("contactPerson", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Website (Optional)</p>
              <input
                type="text"
                placeholder="Your website address"
                value={form.website}
                onChange={(e) => updateField("website", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Country of Operation*</p>
              <select
                value={form.countryOfOrigin}
                onChange={(e) => updateField("countryOfOrigin", e.target.value)}
                className="w-full text-[16px] text-black focus:outline-none bg-transparent"
              >
                <option value="Ghana">Ghana</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Togo">Togo</option>
                <option value="Benin">Benin</option>
                <option value="Côte d'Ivoire">Côte d&apos;Ivoire</option>
                <option value="International">International Partner</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="modal-b modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Business Address*</p>
              <input
                type="text"
                required
                placeholder="Street, City, Region"
                value={form.businessAddress}
                onChange={(e) => updateField("businessAddress", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Contact Phone Number*</p>
              <input
                type="text"
                required
                placeholder="+233 / +234 ..."
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Email address*</p>
              <input
                type="email"
                required
                placeholder="Official company email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 4: Banking & Tax */}
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="modal-b modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">TIN No.*</p>
              <input
                type="text"
                required
                placeholder="Tax Identification No."
                value={form.tinNumber}
                onChange={(e) => updateField("tinNumber", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Bank Account Name*</p>
              <input
                type="text"
                required
                placeholder="Account beneficiary name"
                value={form.bankAccountName}
                onChange={(e) => updateField("bankAccountName", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Bank Name*</p>
              <input
                type="text"
                required
                placeholder="e.g. Stanbic / Zenith / UBA"
                value={form.bankName}
                onChange={(e) => updateField("bankName", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
            <div className="modal-b modal-bl-n modal-bb-n modal-p bg-white">
              <p className="modal-text mb-2">Account Number*</p>
              <input
                type="text"
                required
                placeholder="Corporate account number"
                value={form.accountNumber}
                onChange={(e) => updateField("accountNumber", e.target.value)}
                className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 5: Product or Services */}
          <div className="modal-b modal-p bg-white">
            <p className="modal-text mb-2">Product or Services*</p>
            <textarea
              rows={4}
              required
              placeholder="Describe your civil engineering, building materials, electrical/solar, road construction, or logistics capabilities..."
              value={form.productsOrServices}
              onChange={(e) =>
                updateField("productsOrServices", e.target.value)
              }
              className="w-full text-[16px] text-black placeholder-[#BAB6B6] focus:outline-none resize-none"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <label className="inline-flex items-center gap-2.5 text-sm text-[#54595F] cursor-pointer">
              <input
                type="checkbox"
                checked={form.acceptedTerms}
                onChange={(e) => updateField("acceptedTerms", e.target.checked)}
                required
                className="accent-[#002C5F] w-4 h-4"
              />
              <span>
                I am bound by the terms of the Service and I accept Imperial
                Madeiz Ltd Privacy Policy
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="btn-liquid-y bg-[#002C5F] hover:bg-[#181b31] text-white font-medium text-[15px] px-8 py-4 inline-flex items-center justify-center gap-3 min-w-[230px] disabled:opacity-60"
            >
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Registering Vendor...
                </span>
              ) : (
                <>
                  <span className="btn-txt-primary gap-2">
                    Submit Vendor Application <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="btn-txt-clone gap-2">
                    Join EPC Consortium <ArrowRight className="w-4 h-4" />
                  </span>
                </>
              )}
            </button>
          </div>

          {feedback && (
            <div
              className={`mt-5 p-4 border text-sm flex items-center gap-2.5 ${
                feedback.type === "success"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                  : "bg-red-50 border-red-300 text-red-900"
              }`}
            >
              {feedback.type === "success" && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              <span>{feedback.text}</span>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

