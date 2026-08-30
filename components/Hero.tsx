"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";

export default function Hero({
  heroImages,
  heroTitle,
  heroHighlight,
  heroDescription,
}: {
  heroImages: {
    url: string;
    caption?: string;
  }[];
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
}) {
  const mediaList = heroImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (mediaList.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaList.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [mediaList.length]);

  if (!mediaList.length) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-obsidian">

      {/* Background Media Crossfade Engine */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full relative"
          >
            <img
              src={mediaList[currentIndex].url}
              alt="Manav Stays Udaipur"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Luxury Vignette & Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40 z-10" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-20 mt-12">

        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian/80 border border-gold/30 backdrop-blur-md mb-6">
          <Sparkles size={14} className="text-gold" />

          <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Welcome to Manav Stays & Hospitality
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-sandstone leading-[1.08] tracking-tight mb-6">
          {heroTitle}
          <br />

          <span className="italic font-normal text-gold">
            {heroHighlight}
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg text-sandstone/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          {heroDescription}
        </p>

        {/* Property Selector Quick Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">

          {/* HOTEL LALIT */}
          <a
            href="/hotel-lalit"
            className="p-5 rounded-2xl bg-obsidian-card/90 border border-gold/30 hover:border-gold backdrop-blur-md transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                Ultra Luxury
              </span>

              <span className="text-xs text-sandstone/50">
                12 Exclusive Suites
              </span>
            </div>

            <h3 className="font-serif text-2xl text-sandstone group-hover:text-gold transition-colors">
              Hotel Lalit Imperial
            </h3>

            <p className="text-xs text-sandstone/60 font-light mt-1 flex items-center gap-1">
              <MapPin size={12} className="text-gold" />
              Bhuwana Bypass • Luxury Stay
            </p>
          </a>

          {/* HOTEL NAMAN */}
          <a
            href="/hotel-naman"
            className="p-5 rounded-2xl bg-obsidian-card/90 border border-gold/30 hover:border-gold backdrop-blur-md transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                Premium Affordable
              </span>

              <span className="text-xs text-sandstone/50">
                24 Modern Rooms
              </span>
            </div>

            <h3 className="font-serif text-2xl text-sandstone group-hover:text-gold transition-colors">
              Hotel Naman
            </h3>

            <p className="text-xs text-sandstone/60 font-light mt-1 flex items-center gap-1">
              <MapPin size={12} className="text-gold" />
              Sector 14, Hiran Magri • Near CA Circle
            </p>
          </a>

          {/* DOCKYARD */}
          <a
            href="/hotel-lalit#dockyard"
            className="p-5 rounded-2xl bg-obsidian-card/90 border border-gold/30 hover:border-gold backdrop-blur-md transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                Dining & Nightlife
              </span>

              <span className="text-xs text-sandstone/50">
                Rooftop Experience
              </span>
            </div>

            <h3 className="font-serif text-2xl text-sandstone group-hover:text-gold transition-colors">
              Dockyard Restro Bar & Lounge
            </h3>

            <p className="text-xs text-sandstone/60 font-light mt-1 flex items-center gap-1">
              <MapPin size={12} className="text-gold" />
              Hotel Lalit Imperial • Udaipur
            </p>
          </a>

        </div>
      </div>

      {/* Explore Properties */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold/60 z-20">
        <span className="text-[9px] uppercase tracking-widest">
          Explore Properties
        </span>

        <ArrowDown size={14} className="animate-bounce" />
      </div>

    </section>
  );
}