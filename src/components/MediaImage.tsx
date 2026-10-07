import React, { useState } from "react";
import { imageUrl } from "@/content/site";

interface MediaImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackSrc = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85&auto=format&fit=crop",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const resolved = src ? imageUrl(src) : fallbackSrc;
  const finalSrc = hasError ? fallbackSrc : resolved;

  return (
    <div className={`relative overflow-hidden bg-zinc-100 ${containerClassName}`}>
      {/* Subtle shimmer loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-purple-50 to-zinc-100 animate-pulse" />
      )}
      <img
        src={finalSrc}
        alt={alt || "Shiks Fashion Academy"}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
          }
        }}
        className={`transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};
