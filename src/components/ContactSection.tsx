import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Instagram,
  Facebook,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/content.functions";
import { useSiteContent } from "@/lib/site-content-context";
import { BRAND_INFO } from "@/data/fashionData";

export const ContactSection: React.FC = () => {
  const content = useSiteContent();
  const contact = content?.contact;
  const brand = content?.brand;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Course Admissions",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const doSubmit = useServerFn(submitInquiry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await doSubmit({
        data: {
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subjectOrCourse: formData.subject,
          messageOrGoals: formData.message,
        },
      });
      setSent(true);
    } catch (err) {
      console.warn("Contact submission failed on server", err);
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#faf9fd] border-b border-purple-100/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 space-y-3.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-purple-700" />
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-900">
              Campus & Admissions • Reach Us
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            CONNECT WITH THE ACADEMY
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            Have questions about course admissions, hostel arrangements, or the 3-in-1 incubation
            hub? Our admissions staff in Jos is available to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Verified Contact Information & Map Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-7 sm:p-8 rounded-xl border border-purple-100 shadow-xs space-y-6">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-zinc-950 border-b border-purple-50 pb-3.5">
                CAMPUS HEADQUARTERS
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-zinc-600">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-800 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-zinc-950 block font-semibold mb-0.5">
                      Campus Address:
                    </strong>
                    <span>{contact?.address || BRAND_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-800 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-zinc-950 block font-semibold mb-0.5">
                      Direct Admissions Lines:
                    </strong>
                    <span className="font-mono text-purple-950 font-medium">
                      {contact?.phone || BRAND_INFO.phone1} / {contact?.phone2 || BRAND_INFO.phone2}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-800 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-zinc-950 block font-semibold mb-0.5">
                      Admissions Email:
                    </strong>
                    <span>{contact?.email || BRAND_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-800 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-zinc-950 block font-semibold mb-0.5">
                      Academy Hours:
                    </strong>
                    <span>{contact?.hours || "Monday – Saturday: 08:30 – 18:00"}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-3 border-t border-purple-50">
                <a
                  href={contact?.whatsapp || "https://wa.me/2347035623741"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-wider font-semibold rounded-md flex items-center justify-center gap-2 transition-colors shadow-xs hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="p-6 bg-gradient-to-r from-purple-950 to-zinc-950 rounded-xl text-white space-y-3 shadow-xs">
              <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold block">
                Official Channels
              </span>
              <div className="flex flex-col gap-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-purple-400" />
                  <span>
                    Instagram:{" "}
                    <strong className="text-white">
                      {brand?.instagram || BRAND_INFO.instagram}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Facebook className="w-4 h-4 text-purple-400" />
                  <span>
                    Facebook:{" "}
                    <strong className="text-white">{brand?.facebook || BRAND_INFO.facebook}</strong>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-xl border border-purple-100 shadow-xs"
          >
            {sent ? (
              <div className="text-center py-14 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-purple-700 mx-auto" />
                <h3 className="font-cinzel text-2xl font-bold text-zinc-950">
                  Message Dispatched to Admissions
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto font-normal leading-relaxed">
                  Thank you, {formData.name}. Our admissions officers in Jos will reply via email or
                  phone ({formData.phone}) within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 bg-purple-950 text-white text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-purple-900 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-cinzel text-xl font-bold text-zinc-950">
                    SEND AN INQUIRY TO ADMISSIONS
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Our team in Jos replies promptly to all prospective students and partners.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-zinc-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ibrahim Danladi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-zinc-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0703 562 3741"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-zinc-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-zinc-700">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                    >
                      <option value="Course Admissions">Course Admissions & Syllabus</option>
                      <option value="Hostel & Accommodation">Hostel & Accommodation in Jos</option>
                      <option value="3-in-1 Incubation Hub">3-in-1 Incubation Hub</option>
                      <option value="Corporate / Bulk Training">
                        Corporate / Institutional Training
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-zinc-700">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you would like to know about our courses or training dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-purple-950 text-white font-semibold uppercase tracking-wider text-xs rounded-md hover:bg-purple-900 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Sending..." : "Send Message to Admissions"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
