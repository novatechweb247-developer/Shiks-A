import React, { useState } from "react";
import { Check, Sparkles, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useSiteContent } from "@/lib/site-content-context";
import { BRAND_INFO } from "@/data/fashionData";

interface FooterProps {
  onOpenAppointment: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const content = useSiteContent();
  const brand = content?.brand;
  const footer = content?.footer;

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-purple-950/80">
      {/* Newsletter / Inner Circle VIP Bar */}
      <div className="border-b border-zinc-900 bg-gradient-to-r from-purple-950/70 via-zinc-950 to-purple-950/70 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-purple-300 text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Maison Shiks Private Circle</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            {footer?.newsletterTitle ||
              "BE THE FIRST TO RECEIVE PRIVATE COUTURE DROPS & ADMISSION ALERTS"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed">
            {footer?.newsletterSubtitle ||
              "Invitations to bridal showcases, academy admissions, and the Alumni Impact Summit directly to your inbox."}
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs tracking-wider rounded-md">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Welcome to the Shiks Circle. Details will be dispatched shortly.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row max-w-md mx-auto gap-2.5 pt-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-zinc-900/90 border border-zinc-800 text-white placeholder:text-zinc-500 text-xs rounded-md focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-zinc-950 hover:bg-purple-600 hover:text-white transition-colors text-xs uppercase tracking-wider font-bold rounded-md cursor-pointer shadow-sm"
              >
                Join Circle
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                SHIKS
                <span className="w-2 h-2 bg-purple-600 inline-block rounded-full"></span>
              </span>
              <span className="text-[10px] tracking-wider text-purple-300 uppercase font-semibold mt-1">
                Fashion & Innovation Hub
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-sm">
              Multiple award-winning fashion institution and enterprise development hub founded in
              2016 in Jos, Plateau State, Nigeria by Maryam Sadiq Shikra.
            </p>
            <div className="space-y-2 text-xs text-purple-300 pt-1">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{brand?.address || BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>
                  {brand?.phone1 || BRAND_INFO.phone1} / {brand?.phone2 || BRAND_INFO.phone2}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{brand?.email || BRAND_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Courses & Training */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-cinzel">
              Academy Courses
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-normal">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Fashion Design & Construction
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Modest Fashion & Abaya Design
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Reception & Bridal Couture
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Fashion CAD & Digital Illustration
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Computerized Embroidery & Monogram
                </a>
              </li>
            </ul>
          </div>

          {/* Academy & Innovation Hub */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-cinzel">
              Innovation Hub
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-normal">
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  The 3-in-1 Model
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  Shared Production Facility
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  Alumni Impact Summit 2027
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-white transition-colors">
                  Founder Maryam Sadiq Shikra
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Academy Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-cinzel">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400 font-normal">
              <div className="flex items-center gap-2 text-zinc-300">
                <Instagram className="w-3.5 h-3.5 text-purple-400" />
                <span>{brand?.instagram || BRAND_INFO.instagram}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Facebook className="w-3.5 h-3.5 text-purple-400" />
                <span>{brand?.facebook || BRAND_INFO.facebook}</span>
              </div>
              <div className="pt-2 text-purple-300 text-xs font-normal leading-relaxed italic">
                "
                {brand?.motto ||
                  "Building Skills • Creating Opportunities • Shaping the Future of Fashion"}
                "
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()}{" "}
            {footer?.copyright || "SHIKS FASHION & INNOVATION HUB. All rights reserved."}
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>
              {footer?.locationNote ||
                "Jos, Plateau State, Nigeria • Registration & CAC Documented"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
