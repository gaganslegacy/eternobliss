"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Wellness",
    title: "How Red Light Therapy Transforms Your Skin",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    author: "ETERNOBLISS",
  },
  {
    id: 2,
    category: "Recovery",
    title: "The Science Behind Graduated Compression",
    image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=800&auto=format&fit=crop",
    author: "ETERNOBLISS",
  },
  {
    id: 3,
    category: "Nutrition",
    title: "Why Collagen Timing Matters for Maximum Results",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&auto=format&fit=crop",
    author: "ETERNOBLISS",
  },
];

export default function BlogSection() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="mb-8">
          <p className="eb-eyebrow mb-2">THE RITUAL JOURNAL</p>
          <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
            Wellness Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="group block bg-white border border-eb-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-pewter uppercase tracking-wider" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.15em" }}>
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-jet mt-2 mb-4 group-hover:text-cognac transition-colors" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                  {article.title}
                </h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cognac rounded-full flex items-center justify-center text-white text-xs font-bold">
                    EB
                  </div>
                  <span className="ml-2 text-sm text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                    {article.author}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-jet text-jet hover:bg-jet hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", borderRadius: "0" }}
          >
            Read the Journal
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
