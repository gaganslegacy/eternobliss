"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden h-[400px] md:h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1609899372282-e4e4b6f1aed5?w=1600&auto=format&fit=crop"
        alt="EternoBliss wellness"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
            Where Health Meets Beauty
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
            EternoBliss was built on one belief — that health and beauty are not separate pursuits. Every product sits at their intersection. We source clinically-proven ingredients, FDA-cleared technology, and thoughtful design to help you look and feel your best.
          </p>
          <Link
            href="/pages/about-us"
            className="inline-flex items-center px-6 py-3 bg-cognac text-white text-sm font-medium hover:bg-cognac-dark transition-colors"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", borderRadius: "0" }}
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
