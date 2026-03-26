"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Package, Truck, Shield, RotateCcw } from "lucide-react";

const bundles = [
  {
    id: "supplement-stack",
    name: "The Supplement Stack",
    description: "All 5 supplements in one daily ritual subscription.",
    products: ["Collagen Powder", "Creatine Gummies", "Magnesium Gummies", "Electrolyte Sticks", "Vitamin D3+K2"],
    price: 159.99,
    originalPrice: 188.95,
    unit: "/mo",
    savings: "Save $28.96 every month",
    badge: "MOST POPULAR",
    badgeBg: "#9B6B4D",
    dark: false,
  },
  {
    id: "recovery-stack",
    name: "The Recovery Stack",
    description: "Red light technology meets clinical compression and collagen.",
    products: ["Red Light Therapy Device", "Compression Leggings", "Collagen Powder"],
    price: 289.99,
    originalPrice: 339.97,
    unit: null,
    savings: "Save $49.98",
    badge: "BUNDLE & SAVE",
    badgeBg: "#0D0C0B",
    dark: true,
  },
  {
    id: "complete-system",
    name: "The Complete System",
    description: "All 11 EternoBliss products. A bespoke package for your goals.",
    products: ["All supplements", "All fitness tech", "All compression wear"],
    price: null,
    originalPrice: null,
    unit: null,
    savings: "Custom pricing — contact us",
    badge: "BESPOKE",
    badgeBg: "#2C2420",
    dark: true,
  },
];

const benefits = [
  { icon: Package, label: "Free Priority Shipping" },
  { icon: Shield, label: "30-Day Returns" },
  { icon: RotateCcw, label: "Cancel Anytime" },
  { icon: Truck, label: "1-3 Day Delivery" },
];

const headingStyle = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 400,
  letterSpacing: "-0.03em",
};

const bodyStyle = {
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
};

export default function BundlePage() {
  return (
    <main className="min-h-screen bg-linen">
      <Header />

      {/* Hero */}
      <section className="relative bg-jet py-20 overflow-hidden">
        <div className="dreame-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eb-eyebrow mb-4" style={{ color: "#B4826A" }}>THE COMPLETE RITUAL</p>
            <h1
              className="text-5xl md:text-7xl text-warmwhite mb-5 text-balance"
              style={headingStyle}
            >
              Build Your Bundle
            </h1>
            <p className="text-warmwhite/60 mb-8 text-lg leading-relaxed max-w-xl mx-auto" style={bodyStyle}>
              All 5 supplements. One subscription. Save 20%.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#bundles" className="eb-btn eb-btn-primary">
                SEE BUNDLES
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="bg-champagne border-b border-eb-border py-6">
        <div className="dreame-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="flex items-center gap-3">
                <benefit.icon className="h-5 w-5 text-cognac flex-shrink-0" strokeWidth={1.5} />
                <span className="text-jet text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section id="bundles" className="dreame-section bg-linen">
        <div className="dreame-container">
          <div className="flex flex-col gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className={`border ${bundle.dark ? "bg-jet border-warmwhite/10" : "bg-linen border-eb-border"} overflow-hidden`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Left: info */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span
                      className="inline-block text-white text-[9px] mb-4 w-fit"
                      style={{ backgroundColor: bundle.badgeBg, fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.15em", padding: "3px 10px" }}
                    >
                      {bundle.badge}
                    </span>
                    <h2
                      className={`text-3xl md:text-4xl mb-3 text-balance ${bundle.dark ? "text-warmwhite" : "text-jet"}`}
                      style={headingStyle}
                    >
                      {bundle.name}
                    </h2>
                    <p
                      className={`text-sm leading-relaxed mb-6 ${bundle.dark ? "text-warmwhite/60" : "text-pewter"}`}
                      style={bodyStyle}
                    >
                      {bundle.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {bundle.products.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="text-cognac">·</span>
                          <span
                            className={`text-sm ${bundle.dark ? "text-warmwhite/70" : "text-pewter"}`}
                            style={bodyStyle}
                          >
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between">
                      <div>
                        {bundle.price ? (
                          <div className="flex items-baseline gap-3">
                            <span
                              className={`text-4xl ${bundle.dark ? "text-warmwhite" : "text-jet"}`}
                              style={headingStyle}
                            >
                              ${bundle.price.toFixed(2)}{bundle.unit}
                            </span>
                            {bundle.originalPrice && (
                              <span className="text-pewter/50 line-through" style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px" }}>
                                ${bundle.originalPrice.toFixed(2)}{bundle.unit}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span
                            className={`text-lg ${bundle.dark ? "text-warmwhite/60" : "text-pewter"}`}
                            style={bodyStyle}
                          >
                            Custom pricing
                          </span>
                        )}
                        <p
                          className="text-cognac text-xs mt-1"
                          style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.08em" }}
                        >
                          {bundle.savings}
                        </p>
                      </div>
                      <Link
                        href="#"
                        className={`eb-btn ${bundle.dark ? "eb-btn-secondary text-warmwhite border-warmwhite/30 hover:bg-warmwhite hover:text-jet" : "eb-btn-primary"}`}
                        style={{ fontSize: "10px" }}
                      >
                        {bundle.id === "complete-system" ? "CONTACT US" : "BUILD YOUR BUNDLE"}
                        <ChevronRight className="ml-1.5 h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: image placeholder */}
                  <div
                    className="min-h-[300px] img-placeholder"
                    style={{ background: bundle.dark ? "#1a1815" : "#EFE9DF" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="dreame-section bg-cognac">
        <div className="dreame-container">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-white/60 text-[10px] tracking-[0.25em] mb-3" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
              JOIN THE RITUAL
            </p>
            <h2 className="text-3xl md:text-4xl text-white mb-4 text-balance" style={headingStyle}>
              Get 10% Off Your First Order
            </h2>
            <p className="text-white/70 mb-6 text-sm leading-relaxed" style={bodyStyle}>
              Plus weekly wellness insights delivered to your inbox.
            </p>
            <form className="flex gap-0 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px" }}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-jet text-white hover:bg-charcoal transition-colors"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", letterSpacing: "0.15em" }}
              >
                JOIN
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
