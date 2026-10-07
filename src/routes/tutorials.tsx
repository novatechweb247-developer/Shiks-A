import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { TutorialsSection } from "@/components/TutorialsSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";
import { BookOpen, Video, Scissors, CheckCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/tutorials")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.tutorials ?? defaultContent.seo.tutorials,
      "/tutorials",
      loaderData?.seo.ogImage,
    ),
  component: TutorialsPage,
});

function TutorialsPage() {
  const { open } = useEnrollmentModal();

  const practicalTips = [
    {
      title: "Mastering Industrial Tension",
      desc: "How to balance upper thread tension and bobbin case resistance for smooth, pucker-free seams on silk, chiffon, and heavy velvet.",
      category: "Machine Operation",
    },
    {
      title: "The Flawless French Seam",
      desc: "Enclosing raw fabric edges without an overlocker. Perfect for sheer bridal illusion tulle, luxury organza, and bespoke abayas.",
      category: "Couture Finishing",
    },
    {
      title: "Accurate Bust & Dart Manipulation",
      desc: "Pivoting side darts to waist, neck, or French curve positions without distorting the apex or garment balance.",
      category: "Pattern Drafting",
    },
    {
      title: "Bubble-Free Invisible Zippers",
      desc: "Using the specialized invisible zipper foot and stay-tape fusing to prevent zipper waving on fitted mermaid gowns.",
      category: "Garment Construction",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Practical Knowledge Base · Master Instructors"
        title="Fashion Tutorials, Techniques & Practical Masterclasses"
        description="Learn proven pattern drafting techniques, industrial sewing tips, and couture garment construction directly from Shiks Fashion Academy instructors."
        breadcrumbs={[{ label: "Tutorials & Masterclasses" }]}
      />

      {/* Main Video Tutorials Grid */}
      <TutorialsSection />

      {/* Practical Studio Masterclass Cheat-Sheets */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-700">
              Couture Studio Insights
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              ESSENTIAL ATELIER TECHNIQUES
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              Foundational principles taught during physical studio classes at our Jos campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl border border-zinc-200 shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900 shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-purple-700">
                    {tip.category}
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-zinc-900">{tip.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Full Immersion CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-950 via-zinc-950 to-purple-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight">
            Take Your Skills from Video to Hands-On Studio Mastery
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed">
            While tutorials provide great knowledge, hands-on instructor feedback and industrial
            machinery practice at our Jos academy guarantee true professional mastery.
          </p>
          <button
            onClick={() => open()}
            className="px-6 py-3 bg-white text-zinc-950 hover:bg-purple-50 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-sm"
          >
            Apply for Academy Training
          </button>
        </div>
      </section>
    </>
  );
}
