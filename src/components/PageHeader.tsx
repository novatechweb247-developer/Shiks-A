import React from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  description,
  breadcrumbs = [],
  badge,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-purple-950 via-zinc-950 to-zinc-950 text-white pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-purple-900/40 overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-purple-300/80 mb-6 flex-wrap"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-purple-400 shrink-0" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="max-w-3xl space-y-4">
          {(badge || kicker) && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-600/30 text-purple-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{badge || kicker}</span>
            </div>
          )}

          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
