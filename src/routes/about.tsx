import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/AboutSection";
import { FounderSection } from "@/components/FounderSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";
import { Award, CheckCircle2, Building2, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(loaderData?.seo.about ?? defaultContent.seo.about, "/about", loaderData?.seo.ogImage),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useEnrollmentModal();

  return (
    <>
      <PageHeader
        badge="Established 2016 · Jos, Plateau State"
        title="Pioneering Fashion Education & Enterprise in Plateau State"
        description="Shiks Fashion Academy & Innovation Hub transforms creative ambition into sustainable livelihood, world-class craftsmanship, and thriving fashion enterprises."
        breadcrumbs={[{ label: "About Academy" }]}
      />

      {/* Main About Section */}
      <AboutSection onOpenEnrollment={() => open()} />

      {/* Campus & Facilities Spotlight */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-700">
              Campus Infrastructure & Learning Environment
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              WORLD-CLASS TRAINING FACILITIES
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              Located at British American Junction in Jos, our modern academy is equipped with
              industrial-grade garment manufacturing tools, digital design systems, and dedicated
              workstations for hands-on student mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-purple-100 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-zinc-900">
                Industrial Sewing Studio
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Direct hands-on training with high-speed industrial lockstitch machines, 4-thread
                overlockers, coverstitch units, and precision buttonholing machines.
              </p>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Individual dedicated student machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Specialized presser feet & attachment kits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-purple-100 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-zinc-900">
                Pattern Drafting & Cutting Hall
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Large-format drafting tables, French curves, styling rulers, and anatomy dummies for
                mastering flat pattern manipulation, draping, and garment engineering.
              </p>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Full-scale professional dress forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Spacious fabric layout and cutting tables</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-purple-100 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-zinc-900">
                Enterprise & Incubation Wing
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                A shared co-working zone for alumni and emerging designers to execute private client
                orders, receive business mentorship, and access commercial machinery.
              </p>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Client fitting suite & consultation zone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Commercial garment pressing & finishing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Founder Profile Section */}
      <FounderSection />

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Begin Your Fashion Career?
          </h2>
          <p className="text-sm sm:text-base text-purple-100 font-normal max-w-2xl mx-auto leading-relaxed">
            Explore our structured diploma and masterclass offerings, or schedule a campus visit at
            our Jos academy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/courses"
              className="px-6 py-3.5 bg-white text-zinc-950 hover:bg-purple-50 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => open()}
              className="px-6 py-3.5 bg-purple-900 hover:bg-purple-800 border border-purple-400/40 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
