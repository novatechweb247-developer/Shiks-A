import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CoursesSection } from "@/components/CoursesSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";
import { CheckCircle, HelpCircle, Clock, Sparkles, Award, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/courses")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.courses ?? defaultContent.seo.courses,
      "/courses",
      loaderData?.seo.ogImage,
    ),
  component: CoursesPage,
});

function CoursesPage() {
  const { open } = useEnrollmentModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need previous sewing or design experience to enroll?",
      a: "No prior experience is required for our foundational and general diploma courses. Our instructors guide you step-by-step from machine setup, anatomy measurements, and basic straight-stitching through to advanced garment engineering.",
    },
    {
      q: "Are industrial sewing machines and pattern drafting tools provided?",
      a: "Yes. Every enrolled student is assigned dedicated access to our modern industrial sewing machines, overlockers, cutting tables, and presser units during studio hours. A complete drafting starter kit list is provided upon admission.",
    },
    {
      q: "What schedule formats and intakes are available?",
      a: "We offer rolling weekday cohorts (Morning & Afternoon sessions) as well as flexible Weekend Executive Masterclasses designed for working professionals and university students in Jos.",
    },
    {
      q: "Is installment payment supported for tuition fees?",
      a: "Yes, we provide structured, interest-free installment tuition payment plans across the duration of our multi-month diploma programs to make fashion education accessible.",
    },
    {
      q: "What certification do I receive upon graduation?",
      a: "Graduates who complete all coursework, practical capstone garments, and terminal assessments receive the accredited Shiks Fashion Academy Professional Diploma / Certificate of Competence, recognized across Nigeria's fashion and textile industry.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Accredited Vocational Curriculum · Jos, Nigeria"
        title="Professional Fashion Courses & Master Diplomas"
        description="Master haute couture craftsmanship, precision pattern drafting, bridal engineering, modest abayas, and computerized embroidery on industrial machinery."
        breadcrumbs={[{ label: "Courses & Programs" }]}
      />

      {/* Main Courses Grid */}
      <CoursesSection onEnrollCourse={(course) => open(course)} />

      {/* Learning Pathway Roadmap */}
      <section className="py-20 bg-zinc-900 text-white border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Structured Student Progression
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
              YOUR FASHION CAREER PATHWAY
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              From your very first stitch to runway collections and commercial enterprise ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-purple-900 text-purple-300 font-mono font-bold flex items-center justify-center text-xs">
                01
              </div>
              <h3 className="font-cinzel text-base font-bold text-white">Foundations</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Anatomy measurements, machine mastery, seam mechanics, and basic pattern drafting
                slopers.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-purple-400 pt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Month 1 – 2</span>
              </div>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-purple-900 text-purple-300 font-mono font-bold flex items-center justify-center text-xs">
                02
              </div>
              <h3 className="font-cinzel text-base font-bold text-white">Garment Engineering</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dart manipulation, contouring, linings, collar tailoring, and complex silhouette
                execution.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-purple-400 pt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Month 3 – 4</span>
              </div>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-purple-900 text-purple-300 font-mono font-bold flex items-center justify-center text-xs">
                03
              </div>
              <h3 className="font-cinzel text-base font-bold text-white">Specialized Couture</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bridal corsetry, boning, illusion necklines, royal abayas, and computerized
                embroidery.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-purple-400 pt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Month 5 – 6</span>
              </div>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-purple-800/80 bg-purple-950/20 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-mono font-bold flex items-center justify-center text-xs">
                04
              </div>
              <h3 className="font-cinzel text-base font-bold text-purple-200">
                Incubation & Launch
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Brand identity, client pricing, production facility access, and graduate runway
                showcase.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-purple-300 pt-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Alumni Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Admissions FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Admissions Guidance</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-normal">
              Everything you need to know about joining Shiks Fashion Academy cohorts in Jos.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-zinc-200 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 bg-zinc-50/70 hover:bg-zinc-100/80 flex items-center justify-between gap-4 font-semibold text-sm text-zinc-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-500 transition-transform ${
                        isOpen ? "rotate-180 text-purple-700" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Consultation CTA */}
          <div className="mt-12 p-6 rounded-xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-cinzel text-base font-bold text-purple-950">
                Need Help Choosing the Right Course?
              </h4>
              <p className="text-xs text-purple-800 font-normal">
                Speak directly with our academic advisor at British American Junction, Jos.
              </p>
            </div>
            <button
              onClick={() => open()}
              className="px-5 py-2.5 bg-purple-950 hover:bg-purple-900 text-white text-xs uppercase tracking-wider font-semibold rounded-md shadow-xs cursor-pointer shrink-0"
            >
              Consult an Advisor
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
