import React, { useState } from "react";
import { motion } from "motion/react";
import { Maximize2, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/fashionData";
import { useSiteContent } from "@/lib/site-content-context";
import type { GalleryItem } from "@/types/fashion";
import { MediaImage } from "./MediaImage";
import { imageUrl } from "@/content/site";

export const GallerySection: React.FC = () => {
  const content = useSiteContent();
  const allItems: GalleryItem[] = content?.gallery || GALLERY_ITEMS;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Classroom & Training",
    "Machine Skills",
    "Alumni Runway",
    "Awards & Ceremonies",
    "Student Creations",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-24 bg-[#faf9fd] border-b border-purple-100/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 space-y-3.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-purple-700" />
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-900">
              Life at the Academy • Archives
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            ACADEMY & RUNWAY GALLERY
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            A photographic chronicle of Shiks Fashion Academy in Jos, Plateau State. From intense
            classroom machine practice to award stages and graduation runway showcases.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-purple-950 text-white shadow-xs"
                    : "bg-white text-zinc-700 border border-purple-100/90 hover:bg-purple-50 hover:text-purple-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden shadow-xs border border-purple-100/70 cursor-pointer hover:shadow-md transition-all"
            >
              <MediaImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                containerClassName="w-full h-full"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/95 via-purple-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-300 mb-1">
                  {item.category}
                </span>
                <h4 className="font-cinzel text-base font-bold line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-200 font-normal mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="pt-3 mt-2 border-t border-purple-700/60 flex items-center justify-between text-xs font-semibold tracking-wide text-purple-200">
                  <span>View Full Photo</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-purple-950 hover:bg-purple-900 text-white rounded-md text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
          >
            <span>Explore Full Photo & Runway Gallery</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 rounded-xl border border-purple-900 overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              aria-label="Close photo"
              className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/60 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="md:w-3/5 aspect-[4/5] bg-black">
              <img
                src={imageUrl(lightboxItem.image)}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white space-y-4">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-purple-400">
                  {lightboxItem.category}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold leading-tight">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  {lightboxItem.caption}
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800 text-xs text-purple-300 font-medium">
                Shiks Fashion Academy • Jos, Nigeria
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
