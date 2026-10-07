import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StudentShowcaseSection } from "@/components/StudentShowcaseSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";
import { Sparkles, Trophy, Users, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/showcase")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.showcase ?? defaultContent.seo.showcase,
      "/showcase",
      loaderData?.seo.ogImage,
    ),
  component: ShowcasePage,
});

function ShowcasePage() {
  const { open } = useEnrollmentModal();

  const alumniSpotlights = [
    {
      name: "A'ishah Couture Label",
      founder: "Aisha Mohammed (Class of 2022)",
      achievement: "Plateau Fashion Week Runway Emerging Designer",
      quote:
        "Before Shiks, I couldn't cut a basic neckline straight. Within 6 months of intense drafting and industrial sewing, I produced my first full 10-look collection.",
    },
    {
      name: "Velvet & Stitches Atelier",
      founder: "Blessing Pam (Class of 2021)",
      achievement: "Full-Time Bespoke Bridal Designer in Jos",
      quote:
        "The 3-in-1 Incubation Hub was the turning point. Having access to high-speed overlockers and boiler irons allowed me to take on 5 bridal clients right after graduation.",
    },
    {
      name: "Dapper Men's Tailoring",
      founder: "Ibrahim Yusuf (Class of 2023)",
      achievement: "Institutional Uniform Contractor",
      quote:
        "The precision pattern engineering taught by Mrs. Maryam Sadiq Shikra transformed how I view structure and fitting. My client return rate is nearly 100%.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="From Learning to Creation · 500+ Alumni"
        title="Student Work, Capstone Creations & Alumni Success"
        description="Explore the stunning garments, bridal masterpieces, and commercial fashion labels created by students and graduates of Shiks Fashion Academy."
        breadcrumbs={[{ label: "Student Showcase" }]}
      />

      {/* Main Student Showcase Section */}
      <StudentShowcaseSection />

      {/* Alumni Success Profiles */}
      <section className="py-20 bg-zinc-950 text-white border-y border-purple-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-400">
              Alumni Enterprise Trajectory
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
              WHERE OUR GRADUATES ARE TODAY
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Empowered with technical mastery and commercial enterprise confidence, our alumni run
              flourishing studios across Plateau State, Abuja, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniSpotlights.map((alumnus, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-purple-300">
                      {alumnus.founder}
                    </span>
                    <Trophy className="w-4 h-4 text-purple-400" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white">{alumnus.name}</h3>
                  <div className="text-[11px] text-purple-400 font-medium">
                    {alumnus.achievement}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed italic pt-2">
                    "{alumnus.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Bottom Enrollment Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Write Your Own Fashion Success Story
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Join the upcoming cohort at Shiks Fashion Academy. Rolling admissions are open for
            Foundations, Advanced Couture, and Modest Abaya Diplomas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => open()}
              className="px-6 py-3.5 bg-purple-950 hover:bg-purple-900 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-xs"
            >
              Enroll for Upcoming Cohort
            </button>
            <Link
              to="/courses"
              className="px-6 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
            >
              Explore Course Curriculums
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
