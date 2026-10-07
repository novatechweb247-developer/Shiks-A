import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CoursesSection } from "@/components/CoursesSection";
import { InnovationHubSection } from "@/components/InnovationHubSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";
import { Scissors, Building2, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.services ?? defaultContent.seo.services,
      "/services",
      loaderData?.seo.ogImage,
    ),
  component: ServicesPage,
});

function ServicesPage() {
  const { open } = useEnrollmentModal();

  const servicesList = [
    {
      title: "Fashion Education & Diplomas",
      desc: "Comprehensive vocational training from beginner straight stitching to advanced haute couture, bridal engineering, pattern drafting, and CAD design.",
      link: "/courses",
      action: "Explore Courses",
    },
    {
      title: "Shared Production Machinery",
      desc: "Subsidized access to industrial lockstitch, 4-thread overlockers, computerized embroidery units, and steam boiler ironing tables for designers.",
      link: "/hub",
      action: "Discover Hub",
    },
    {
      title: "Bespoke Bridal & Modest Couture",
      desc: "Custom bridal wear, royal abayas, and evening dresses engineered by our master couturiers for private clientele.",
      link: "/showcase",
      action: "View Portfolio",
    },
    {
      title: "Institutional Uniform Production",
      desc: "High-capacity garment production for schools, corporations, healthcare institutions, and hospitality brands with strict quality control.",
      link: "/contact",
      action: "Request Quote",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Enterprise & Academy Services · Jos, Nigeria"
        title="Comprehensive Fashion Services & Production Facilities"
        description="Explore the full spectrum of educational programs, shared manufacturing machinery, bespoke tailoring, and enterprise incubation services provided by Shiks Fashion Academy."
        breadcrumbs={[{ label: "Services & Production" }]}
      />

      {/* Services Grid Overview */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((svc, i) => (
              <div
                key={i}
                className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 hover:border-purple-600/50 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-zinc-900">{svc.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">{svc.desc}</p>
                </div>
                <Link
                  to={svc.link}
                  className="text-xs uppercase tracking-wider font-bold text-purple-900 hover:text-purple-700 inline-flex items-center gap-1.5 transition-colors pt-2"
                >
                  <span>{svc.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Highlights */}
      <CoursesSection onEnrollCourse={(course) => open(course)} />

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Innovation Hub & Production Section */}
      <InnovationHubSection onOpenAppointment={() => open()} />
    </>
  );
}
