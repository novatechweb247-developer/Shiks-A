import React, { useState, useEffect } from "react";
import { GraduationCap, Phone, MapPin, X, ArrowRight, MessageCircle } from "lucide-react";
import { useSiteContent } from "@/lib/site-content-context";

interface HeaderProps {
  onOpenEnrollment: (course?: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollment }) => {
  const content = useSiteContent();
  const brand = content?.brand;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Academy", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "3-in-1 Hub", href: "#hub" },
    { name: "Student Work", href: "#showcase" },
    { name: "Gallery", href: "#gallery" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#" || href === "/") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
      return;
    }
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <>
      {/* Top Notification Bar with Verified Campus Details */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-zinc-950 text-white text-xs py-2.5 px-4 font-medium transition-all border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2 text-purple-200 text-xs">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping inline-block"></span>
            <span className="font-semibold text-white">Shiks Fashion Academy</span>
            <span className="text-purple-300">• Plateau State's Award-Winning Fashion School</span>
          </div>
          <div className="mx-auto md:mx-0 text-center font-normal text-xs text-purple-100 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-purple-300 hidden sm:inline shrink-0" />
            <span>{brand?.address || "British American Jct, Beside Kingsbite, Jos"}</span>
            <span className="hidden sm:inline text-purple-400">•</span>
            <span className="font-mono font-medium text-white">
              {brand?.phone1 || "07035623741"}
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-purple-200 text-xs">
            <button
              onClick={() => onOpenEnrollment()}
              className="text-white hover:text-purple-200 font-semibold transition-colors cursor-pointer underline underline-offset-4 decoration-purple-400"
            >
              Admissions Open 2026/2027
            </button>
            <span className="text-purple-500">|</span>
            <span className="text-purple-200 font-medium">500+ Alumni</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100 py-3"
            : "bg-white py-4 border-b border-zinc-100 shadow-2xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Hamburger & Brand Name */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Animated Hamburger (Min 44px Touch Target) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative w-11 h-11 flex flex-col justify-center items-center rounded-lg text-zinc-900 hover:text-purple-800 hover:bg-purple-50 transition-colors cursor-pointer focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`h-[2px] w-6 bg-zinc-900 rounded-full transition-all duration-300 ease-in-out origin-center ${
                      mobileMenuOpen ? "rotate-45 translate-y-[9px] bg-purple-700" : ""
                    }`}
                  />
                  <span
                    className={`h-[2px] w-6 bg-zinc-900 rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                  />
                  <span
                    className={`h-[2px] w-6 bg-zinc-900 rounded-full transition-all duration-300 ease-in-out origin-center ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-[9px] bg-purple-700" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Logo / Brand Name with natural typography */}
              <div
                className="flex flex-col cursor-pointer"
                onClick={() => {
                  if (window.location.pathname === "/")
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  else window.location.href = "/";
                }}
              >
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 flex items-center gap-1.5 leading-none">
                  SHIKS
                  <span className="w-2 h-2 bg-purple-700 inline-block rounded-full"></span>
                </span>
                <span className="text-[9px] tracking-wider text-purple-900 uppercase font-semibold mt-1">
                  Fashion Academy
                </span>
              </div>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs uppercase tracking-wider text-zinc-700 hover:text-purple-900 font-semibold transition-colors relative py-1 group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-700 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/2347035623741"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-900 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
                title="Chat with Admissions"
              >
                <Phone className="w-3.5 h-3.5 text-purple-700" />
                <span className="font-mono text-xs">{brand?.phone1 || "07035623741"}</span>
              </a>

              <button
                onClick={() => onOpenEnrollment()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-purple-950 text-white hover:bg-purple-900 active:bg-purple-950 transition-all text-xs uppercase tracking-wider font-semibold rounded-md flex items-center gap-2 shadow-xs cursor-pointer hover:shadow-md"
              >
                <GraduationCap className="w-4 h-4 text-purple-300" />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN ANIMATED MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md animate-fade-in flex flex-col justify-between">
          {/* Header of mobile drawer */}
          <div className="bg-white p-5 border-b border-purple-100 flex items-center justify-between shadow-xs">
            <div className="flex flex-col">
              <span className="font-cinzel text-lg font-bold text-zinc-950">
                SHIKS FASHION ACADEMY
              </span>
              <span className="text-[10px] uppercase tracking-wider text-purple-900 font-semibold">
                Jos, Plateau State, Nigeria
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-500 hover:text-zinc-950 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list in mobile drawer */}
          <div className="flex-1 overflow-y-auto bg-white p-6 space-y-2">
            <div className="pb-2 border-b border-zinc-100 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3 text-sm uppercase tracking-wider font-semibold text-zinc-900 hover:text-purple-800 border-b border-zinc-50 flex items-center justify-between group transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-purple-700 transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>

          {/* Mobile Bottom Footer with Contact & Enroll */}
          <div className="bg-[#faf8fc] p-6 border-t border-purple-100 space-y-3">
            <div className="text-xs text-zinc-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-700 shrink-0" />
                <span className="text-xs">{brand?.address || "British American Jct, Jos"}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-purple-700 shrink-0" />
                <span className="text-xs">
                  {brand?.phone1} / {brand?.phone2}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <a
                href="https://wa.me/2347035623741"
                target="_blank"
                rel="noreferrer"
                className="py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-wider font-semibold rounded-md flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="py-3 bg-purple-950 hover:bg-purple-900 text-white text-xs uppercase tracking-wider font-semibold rounded-md flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-purple-300" />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
