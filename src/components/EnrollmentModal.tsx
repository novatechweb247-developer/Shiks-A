import React, { useState, useEffect } from "react";
import { X, CheckCircle2, GraduationCap, MessageCircle, ArrowRight } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/content.functions";
import { useSiteContent } from "@/lib/site-content-context";
import { COURSES, BRAND_INFO } from "@/data/fashionData";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse,
}) => {
  const content = useSiteContent();
  const availableCourses = content?.courses || COURSES;
  const brand = content?.brand;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedCourse:
      preselectedCourse || availableCourses[0]?.title || "Fashion Design & Garment Construction",
    studyMode: "Full-Time (Weekday)",
    experienceLevel: "Complete Beginner (No prior sewing experience)",
    hostelNeeded: "No",
    goals: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState("");

  const doSubmit = useServerFn(submitInquiry);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, selectedCourse: preselectedCourse }));
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const generatedId = `SHIKS-ADM-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);

    try {
      await doSubmit({
        data: {
          type: "enrollment",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subjectOrCourse: formData.selectedCourse,
          messageOrGoals:
            formData.goals ||
            `Study Mode: ${formData.studyMode}. Experience: ${formData.experienceLevel}. Hostel: ${formData.hostelNeeded}. Ref: ${generatedId}`,
          studyMode: formData.studyMode,
          experienceLevel: formData.experienceLevel,
        },
      });
    } catch (err) {
      console.warn("Enrollment submit server error", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shiks Fashion Academy Admissions Team! My name is ${formData.fullName}. I have submitted application ref: ${appId} for the course: ${formData.selectedCourse}.`,
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-purple-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer rounded-full bg-white/80"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-purple-300 text-xs uppercase tracking-wider font-semibold mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions & Training Registration</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold leading-tight">
            ENROLL AT SHIKS FASHION ACADEMY
          </h2>
          <p className="text-xs sm:text-sm text-purple-200 font-normal mt-1 max-w-lg leading-relaxed">
            Jos, Plateau State, Nigeria • Professional Diplomas, Apprenticeships & Industry
            Certifications.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <CheckCircle2 className="w-16 h-16 text-purple-700 mx-auto" />
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-purple-900 font-bold">
                  APPLICATION RECEIVED
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-zinc-950">
                  Welcome to Shiks Fashion Academy, {formData.fullName}!
                </h3>
              </div>

              <div className="max-w-md mx-auto bg-purple-50/70 p-5 rounded-lg border border-purple-200 text-xs sm:text-sm text-left space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-purple-100">
                  <span className="text-zinc-500 uppercase tracking-wider text-[11px] font-semibold">
                    Application Ref:
                  </span>
                  <span className="font-mono font-bold text-purple-950 text-sm">{appId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase tracking-wider text-[11px] font-semibold">
                    Selected Program:
                  </span>
                  <span className="font-semibold text-zinc-900">{formData.selectedCourse}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase tracking-wider text-[11px] font-semibold">
                    Study Format:
                  </span>
                  <span className="font-semibold text-zinc-900">{formData.studyMode}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase tracking-wider text-[11px] font-semibold">
                    Campus:
                  </span>
                  <span className="font-semibold text-purple-900">Jos, Plateau State</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-md mx-auto leading-relaxed">
                Our Admissions Coordinator has logged your registration. You will receive an SMS and
                email notification with syllabus materials and class schedule.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/2347035623741?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-wider font-semibold rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp ({brand?.phone1 || BRAND_INFO.phone1})</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-purple-950 hover:bg-purple-900 text-white text-xs uppercase tracking-wider font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Return to Academy
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maryam Bello"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-700">
                    Phone / WhatsApp Number *
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

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-zinc-700">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-zinc-700">
                  Select Program / Course *
                </label>
                <select
                  value={formData.selectedCourse}
                  onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                >
                  {availableCourses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-700">
                    Preferred Study Mode
                  </label>
                  <select
                    value={formData.studyMode}
                    onChange={(e) => setFormData({ ...formData, studyMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  >
                    <option value="Full-Time (Weekday)">Full-Time (Monday – Thursday)</option>
                    <option value="Part-Time Evening">Part-Time Evening</option>
                    <option value="Weekend Executive">Weekend Executive (Friday & Saturday)</option>
                    <option value="Apprenticeship Immersion">Apprenticeship Immersion</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-zinc-700">
                    Current Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                  >
                    <option value="Complete Beginner">Complete Beginner (No prior sewing)</option>
                    <option value="Intermediate">Intermediate (Can operate manual machine)</option>
                    <option value="Advanced / Professional">
                      Advanced (Practicing designer seeking mastery)
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-zinc-700">
                  What are your goals in fashion? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., I want to launch my own bridal studio in Jos and learn industrial garment construction..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full px-3.5 py-2 border border-zinc-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-purple-700 bg-zinc-50/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-purple-950 text-white font-semibold uppercase tracking-wider text-xs rounded-md hover:bg-purple-900 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
              >
                <GraduationCap className="w-4 h-4" />
                <span>
                  {isSubmitting ? "Submitting Application..." : "Submit Academy Application"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
