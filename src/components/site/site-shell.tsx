import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { useIsPreview, useEnrollmentModal } from "@/lib/site-content-context";

function PreviewBanner() {
  const preview = useIsPreview();
  if (!preview) return null;
  return (
    <div
      role="status"
      className="bg-purple-900 text-white px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest shadow-xs"
    >
      Draft preview active — visitors see the published version until you click "Publish Changes" in
      Admin.
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, selectedCourse, open, close } = useEnrollmentModal();

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col selection:bg-purple-600 selection:text-white">
      <PreviewBanner />
      <Header onOpenEnrollment={(course) => open(course)} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer onOpenAppointment={() => open()} />
      <EnrollmentModal isOpen={isOpen} onClose={close} preselectedCourse={selectedCourse} />
      {/* Floating Scroll-to-Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-30 p-3 bg-purple-950 text-white rounded-full shadow-xl hover:bg-purple-900 hover:scale-105 transition-all border border-purple-800/50 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
