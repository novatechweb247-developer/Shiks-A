import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/Hero";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { AboutSection } from "@/components/AboutSection";
import { CoursesSection } from "@/components/CoursesSection";
import { TutorialsSection } from "@/components/TutorialsSection";
import { InnovationHubSection } from "@/components/InnovationHubSection";
import { FounderSection } from "@/components/FounderSection";
import { StudentShowcaseSection } from "@/components/StudentShowcaseSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(loaderData?.seo.home ?? defaultContent.seo.home, "/", loaderData?.seo.ogImage),
  component: HomePage,
});

function HomePage() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      const alreadyLoaded = sessionStorage.getItem("shiks_intro_shown");
      if (alreadyLoaded === "true") return false;
      return true;
    }
    return false;
  });
  const { open } = useEnrollmentModal();

  const handlePreloaderComplete = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("shiks_intro_shown", "true");
    }
    setIsLoading(false);
  }, []);

  const handleHeroCta = (target: string) => {
    if (target.startsWith("#")) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    const aboutEl = document.querySelector("#about");
    if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Intro Loading Animation */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* HERO SECTION — EXACTLY 3 SLIDES */}
      <Hero onCtaClick={handleHeroCta} onOpenEnrollment={() => open()} />

      {/* Marquee Banner with Academy Credentials */}
      <MarqueeBanner />

      {/* About The Academy & Purpose */}
      <AboutSection onOpenEnrollment={() => open()} />

      {/* Courses & Training Programs */}
      <CoursesSection onEnrollCourse={(course) => open(course)} />

      {/* Tutorials & Practical Learning */}
      <TutorialsSection />

      {/* The Shik's 3-in-1 Model & Shared Production Facility */}
      <InnovationHubSection onOpenAppointment={() => open()} />

      {/* Meet Founder & CEO Maryam Sadiq Shikra */}
      <FounderSection />

      {/* Student / Work Showcase ("From Learning to Creation") */}
      <StudentShowcaseSection />

      {/* Academy & Runway Gallery with Lightbox */}
      <GallerySection />

      {/* Contact, Campus Address & Admissions Inquiry */}
      <ContactSection />
    </>
  );
}
