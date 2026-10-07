import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { InnovationHubSection } from "@/components/InnovationHubSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";
import {
  Sparkles,
  Layers,
  Wrench,
  Building,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/hub")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(loaderData?.seo.hub ?? defaultContent.seo.hub, "/hub", loaderData?.seo.ogImage),
  component: InnovationHubPage,
});

function InnovationHubPage() {
  const { open } = useEnrollmentModal();

  const machinerySpecs = [
    {
      name: "Industrial Straight-Stitch Machines",
      qty: "80 Units Planned",
      desc: "Direct-drive servo motors for high-speed precision stitching, heavy fabrics, and consistent tension across mass production runs.",
    },
    {
      name: "4-Thread Industrial Overlockers",
      qty: "20 Units",
      desc: "High-speed edge trimming and elastic seam sealing for stretch fabrics, formal knits, and ready-to-wear jersey apparel.",
    },
    {
      name: "Coverstitch & Flatlock Units",
      qty: "10 Units",
      desc: "Professional sportswear hem finishing, neckline binding, and reinforced decorative outer seams.",
    },
    {
      name: "Multi-Needle Computerized Embroidery",
      qty: "5 Stations",
      desc: "Automated monogramming, institutional logos, intricate royal agbada patterns, and digital metallic embroidery.",
    },
    {
      name: "Industrial Steam Boiler Ironing Tables",
      qty: "12 Stations",
      desc: "Vacuum suction tables with high-pressure steam boilers for crisp pleating, structured collar fusing, and final packaging.",
    },
    {
      name: "Full-Length Pattern Cutting Tables",
      qty: "8 Master Tables",
      desc: "Precision layout tables equipped with electric rotary fabric shears and pattern weights for multi-ply cutting.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Strategic Enterprise Ecosystem · Jos, Nigeria"
        title="The Shik's 3-in-1 Innovation Hub & Shared Production Facility"
        description="Bridging the critical capital barrier for Nigerian fashion designers. Integrating technical skills training, enterprise incubation, and industrial garment production under one roof."
        breadcrumbs={[{ label: "3-in-1 Innovation Hub" }]}
      />

      {/* Main Innovation Hub Section */}
      <InnovationHubSection onOpenAppointment={() => open()} />

      {/* Industrial Machinery & Infrastructure Catalog */}
      <section className="py-20 bg-zinc-950 text-white border-y border-purple-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-purple-400 text-xs uppercase tracking-wider font-semibold">
              <Wrench className="w-4 h-4" />
              <span>Production Equipment & Machinery</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
              ₦119,000,000 INFRASTRUCTURE SPECIFICATIONS
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Our proposed shared production facility equips emerging designers, alumni, and local
              manufacturers in Jos with the tools required to compete on national and international
              scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinerySpecs.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 hover:border-purple-600/50 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/40">
                    {item.qty}
                  </span>
                  <Sparkles className="w-4 h-4 text-purple-500" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-white">{item.name}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Membership Model */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-purple-700">
              Enterprise Incubation & Co-Working Access
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              HOW TO ACCESS THE HUB
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              Tailored access options for students, alumni, and independent fashion entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Option 01
                </span>
                <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                  Academy Student Access
                </h3>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                  Included directly in all diploma and masterclass tuition fees. Full studio machine
                  use during enrolled class hours.
                </p>
                <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Dedicated workstation during studio time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Instructor supervision & guidance</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => open()}
                className="w-full mt-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs uppercase tracking-wider font-semibold rounded-md transition-colors cursor-pointer"
              >
                Enroll as Student
              </button>
            </div>

            <div className="bg-purple-950 text-white p-8 rounded-xl border border-purple-800 space-y-4 flex flex-col justify-between shadow-lg relative">
              <div className="absolute top-4 right-4 bg-purple-700 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">
                Most Popular
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Option 02
                </span>
                <h3 className="font-cinzel text-xl font-bold text-white">Alumni Co-Working Pass</h3>
                <p className="text-xs text-purple-200 font-normal leading-relaxed">
                  Subsidized access for Shiks Academy graduates to execute private client orders and
                  build their independent label.
                </p>
                <ul className="space-y-2 text-xs text-purple-200 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Machine hours & pressing station usage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Client fitting area & photoshoot backdrop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Enterprise business clinics with Maryam Shikra</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => open()}
                className="w-full mt-6 py-2.5 bg-white hover:bg-purple-50 text-zinc-950 text-xs uppercase tracking-wider font-bold rounded-md transition-colors cursor-pointer shadow-sm"
              >
                Apply for Co-Working
              </button>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Option 03
                </span>
                <h3 className="font-cinzel text-xl font-bold text-zinc-900">
                  Production Contracts
                </h3>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                  Bulk garment manufacturing for corporate uniforms, schools, bridal parties, and
                  modest ready-to-wear brands.
                </p>
                <ul className="space-y-2 text-xs text-zinc-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Industrial mass production runs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Quality control and custom branding</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/2347035623741"
                target="_blank"
                rel="noreferrer"
                className="w-full mt-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs uppercase tracking-wider font-semibold rounded-md transition-colors text-center block"
              >
                Discuss Contract
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />
    </>
  );
}
