import React from "react";

export const MarqueeBanner: React.FC = () => {
  const items = [
    "Shiks Fashion Academy",
    "Plateau State's Premier Fashion School",
    "Established 2016 · Jos, Nigeria",
    "Over 500+ Qualified Graduates",
    "The 3-in-1 Model: Training · Incubation · Production",
    "Haute Couture & Bridal Reception Gowns",
    "Modest Fashion & Luxury Abaya Cut",
    "Computerized Monogram & Industrial Machinery",
    "Admissions Open for 2026/2027",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-purple-950 text-white py-3 border-y border-purple-800/40 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center mx-5">
            <span className="text-xs sm:text-sm font-semibold tracking-normal text-purple-100">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mx-5 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
};
