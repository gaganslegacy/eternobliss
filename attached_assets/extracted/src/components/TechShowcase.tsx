"use client";

import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Clinical Red Light Therapy Device",
    subtitle: "630nm + 850nm | FDA Cleared | Professional Grade",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop",
    video: true,
  },
  {
    id: 2,
    title: "The Complete Supplement Stack",
    subtitle: "Collagen, Creatine & Recovery in One Bundle",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&auto=format&fit=crop",
    video: false,
  },
];

export default function TechShowcase() {
  return (
    <section className="dreame-section bg-warmwhite">
      <div className="dreame-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="eb-eyebrow mb-2">FEATURED</p>
            <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
              Clinical Red Light. At Home.
            </h2>
          </div>
          <button
            type="button"
            className="p-2 rounded-full border border-eb-border hover:bg-champagne transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseItems.map((item) => (
            <Link
              key={item.id}
              href="#"
              className="group relative rounded-lg overflow-hidden h-[350px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {item.video && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <button
                    type="button"
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Play className="h-6 w-6 text-white ml-1" />
                  </button>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold mb-1 line-clamp-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 mb-3" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>{item.subtitle}</p>
                <span className="inline-flex items-center bg-cognac text-white px-4 py-2 text-sm font-medium hover:bg-cognac-dark transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "0" }}>
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
