"use client";

import Link from "next/link";
import { ChevronRight, Gift, RotateCw } from "lucide-react";

const offers = [
  {
    id: 1,
    icon: Gift,
    title: "Subscribe & Save 15%",
    description: "Delivered monthly. Skip or cancel anytime.",
    bgColor: "bg-cognac",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    icon: RotateCw,
    title: "Free Returns",
    description: "30-day money-back guarantee on all products.",
    bgColor: "bg-jet",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
  },
];

export default function ExclusiveOffers() {
  return (
    <section className="dreame-section bg-warmwhite">
      <div className="dreame-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="eb-eyebrow mb-2">SUBSCRIBE & SAVE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
              Your Ritual, Delivered Monthly
            </h2>
          </div>
          <button
            type="button"
            className="p-2 rounded-full border border-eb-border hover:bg-champagne transition-colors hidden lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href="#"
              className={`group relative overflow-hidden h-[300px] ${offer.bgColor}`}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <offer.icon
                  className={`h-8 w-8 mb-3 ${offer.textColor}`}
                />
                <h3
                  className={`text-xl font-bold mb-2 ${offer.textColor}`}
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {offer.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    offer.textColor === "text-white"
                      ? "text-white/80"
                      : "text-pewter/80"
                  }`}
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  {offer.description}
                </p>
                <span
                  className="inline-flex items-center w-fit px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: offer.textColor === "text-white" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
                    color: offer.textColor === "text-white" ? "white" : "currentColor",
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}
                >
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
