import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GallerySection } from "@/components/GallerySection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";

export const Route = createFileRoute("/gallery")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.gallery ?? defaultContent.seo.gallery,
      "/gallery",
      loaderData?.seo.ogImage,
    ),
  component: GalleryPage,
});

function GalleryPage() {
  const { open } = useEnrollmentModal();

  return (
    <>
      <PageHeader
        badge="Visual Chronicles · Jos Atelier & Runway"
        title="Academy Campus Life, Runway & Studio Gallery"
        description="Immerse yourself in life at Shiks Fashion Academy. From daily pattern drafting sessions and industrial machine masterclasses to glamorous runway exhibitions and graduation celebrations."
        breadcrumbs={[{ label: "Gallery & Runway" }]}
      />

      {/* Main Filterable Gallery with Lightbox */}
      <GallerySection />

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Campus Visit Invitation */}
      <section className="py-16 bg-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight">
            Experience Our Studio in Person
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            We welcome prospective students, sponsors, and corporate partners to tour our physical
            facilities at British American Junction Beside Kingsbite, Jos, Plateau State.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => open()}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-sm"
            >
              Book Campus Tour
            </button>
            <a
              href="https://wa.me/2347035623741"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
