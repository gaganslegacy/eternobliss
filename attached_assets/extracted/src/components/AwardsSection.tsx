"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    stat: "4.8",
    label: "Average Rating",
    content:
      "Over 2,300 five-star reviews from customers who've transformed their wellness routines with EternoBliss products.",
  },
  {
    id: 2,
    stat: "30",
    label: "Day Guarantee",
    content:
      "Money-back guarantee if you're not completely satisfied. We stand behind every product we create.",
  },
  {
    id: 3,
    stat: "100%",
    label: "Third-Party Tested",
    content:
      "Every supplement batch is independently verified for purity, potency, and safety standards.",
  },
  {
    id: 4,
    stat: "FDA",
    label: "Cleared Tech",
    content:
      "Our Red Light Therapy Device meets all FDA requirements for safety and clinical effectiveness.",
  },
];

export default function AwardsSection() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="eb-eyebrow mb-2">TRUST & QUALITY</p>
            <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
              Why Customers Choose EternoBliss
            </h2>
          </div>
          <div className="flex space-x-2 hidden lg:flex">
            <button
              type="button"
              className="p-2 rounded-full border border-eb-border hover:bg-champagne transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-2 rounded-full border border-eb-border hover:bg-champagne transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-champagne border border-eb-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {testimonial.id <= 2 && (
                  <>
                    <span className="text-4xl font-bold text-cognac mr-2" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                      {testimonial.stat}
                    </span>
                    {testimonial.id === 1 && (
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-cognac text-cognac" />
                        ))}
                      </div>
                    )}
                  </>
                )}
                {testimonial.id > 2 && (
                  <span className="text-2xl font-bold text-cognac" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                    {testimonial.stat}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-jet mb-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                {testimonial.label}
              </h3>
              <p className="text-sm text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
