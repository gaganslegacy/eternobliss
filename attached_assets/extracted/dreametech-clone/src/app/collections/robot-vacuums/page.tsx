"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown } from "lucide-react";

const products = [
  {
    id: "x40-ultra",
    name: "Collagen Powder",
    tag: "Daily Wellness",
    features: [
      "10g Hydrolyzed Collagen per serving",
      "Types I & III — Skin, joints, and hair",
      "Unflavored — Mixes in anything",
      "Third-party tested for purity",
    ],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop",
    badge: "BESTSELLER",
    badgeBg: "#9B6B4D",
  },
  {
    id: "creatine-gummies",
    name: "Creatine Gummies",
    tag: "Performance",
    features: [
      "3g Creatine Monohydrate per serving",
      "Clinically studied dosing",
      "No chalky powder — delicious gummies",
      "Supports strength and recovery",
    ],
    price: 39.99,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&auto=format&fit=crop",
    badge: "NEW",
    badgeBg: "#0D0C0B",
  },
  {
    id: "magnesium-gummies",
    name: "Magnesium Gummies",
    tag: "Sleep & Recovery",
    features: [
      "200mg Magnesium Glycinate per serving",
      "Supports deep sleep and recovery",
      "Gentle on digestion",
      "No laxative effect",
    ],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&auto=format&fit=crop",
    badge: null,
    badgeBg: null,
  },
  {
    id: "electrolyte-sticks",
    name: "Electrolyte Sticks",
    tag: "Hydration",
    features: [
      "Sodium, Potassium, Magnesium blend",
      "Zero sugar, zero artificial ingredients",
      "Convenient single-serve sticks",
      "Supports daily hydration",
    ],
    price: 29.99,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&auto=format&fit=crop",
    badge: null,
    badgeBg: null,
  },
  {
    id: "vitamin-d3-k2",
    name: "Vitamin D3+K2",
    tag: "Bone & Immune",
    features: [
      "5,000 IU Vitamin D3 with K2 MK-7",
      "Optimal calcium absorption",
      "Supports immune function",
      "Third-party tested",
    ],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&auto=format&fit=crop",
    badge: null,
    badgeBg: null,
  },
];

const filters = ["All", "Bestsellers", "Subscribe & Save", "New Arrivals"];

const faqs = [
  {
    question: "Are EternoBliss supplements third-party tested?",
    answer: "Yes. Every batch is tested by an independent laboratory for purity, potency, and safety before it ships. COAs are available on request.",
  },
  {
    question: "Can I subscribe to save on supplements?",
    answer: "Yes. Subscribe to any supplement and save 15% on every order. Delivery every 30 days. Skip or cancel anytime — no questions asked.",
  },
  {
    question: "What is the return policy?",
    answer: "If you are not satisfied, return within 30 days for a full refund. No questions asked.",
  },
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

export default function SupplementsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-linen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-champagne py-3 px-4 lg:px-8 border-b border-eb-border">
        <div className="dreame-container">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-pewter hover:text-cognac transition-colors" style={bodyStyle}>Home</Link>
            <ChevronRight className="h-3 w-3 text-pewter" />
            <span className="text-jet" style={{ ...bodyStyle, fontWeight: 400 }}>Supplements</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner — 3-column */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="bg-champagne p-8 md:p-12 flex flex-col justify-center min-h-[280px]">
            <p className="eb-eyebrow mb-2">DAILY WELLNESS</p>
            <h2 className="text-2xl md:text-3xl text-jet mb-4 text-balance" style={headingStyle}>Supplements</h2>
            <p className="text-pewter text-sm mb-6 leading-relaxed" style={bodyStyle}>
              Clinical-grade formulas for performance, recovery, sleep, and longevity.
            </p>
            <Link href="#products" className="eb-btn eb-btn-dark w-fit" style={{ fontSize: "10px", padding: "0.6rem 1.2rem" }}>
              SHOP ALL
              <ChevronRight className="ml-1.5 h-3 w-3" />
            </Link>
          </div>
          <div className="bg-[#2C2420] p-8 md:p-12 flex flex-col justify-center min-h-[280px]">
            <p className="eb-eyebrow mb-2" style={{ color: "#B4826A" }}>SUBSCRIBE & SAVE</p>
            <h2 className="text-2xl md:text-3xl text-warmwhite mb-4 text-balance" style={headingStyle}>15% Off Every Order</h2>
            <p className="text-warmwhite/60 text-sm mb-6 leading-relaxed" style={bodyStyle}>
              Subscribe to any supplement. Cancel anytime.
            </p>
          </div>
          <div className="bg-jet p-8 md:p-12 flex flex-col justify-center min-h-[280px]">
            <p className="eb-eyebrow mb-2" style={{ color: "#B4826A" }}>CLINICAL STANDARD</p>
            <h2 className="text-2xl md:text-3xl text-warmwhite mb-4 text-balance" style={headingStyle}>Third-Party Tested</h2>
            <p className="text-warmwhite/60 text-sm leading-relaxed" style={bodyStyle}>
              Every batch. Full COA on request.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="dreame-section bg-linen">
        <div className="dreame-container">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-[11px] tracking-[0.12em] transition-all ${
                  activeFilter === filter
                    ? "bg-jet text-warmwhite"
                    : "bg-transparent border border-eb-border text-pewter hover:border-cognac hover:text-cognac"
                }`}
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-linen border border-eb-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-square bg-champagne overflow-hidden">
                  {product.badge && (
                    <span
                      className="absolute top-3 right-3 text-white z-10"
                      style={{
                        backgroundColor: product.badgeBg ?? "#9B6B4D",
                        fontFamily: "var(--font-lato)",
                        fontWeight: 400,
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        padding: "3px 8px",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="eb-eyebrow mb-1.5" style={{ fontSize: "9px" }}>{product.tag}</p>
                  <h3 className="text-jet mb-3 text-xl" style={headingStyle}>{product.name}</h3>

                  <ul className="space-y-1.5 mb-5">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="text-xs text-pewter flex items-start gap-2" style={bodyStyle}>
                        <span className="text-cognac mt-0.5">·</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-jet text-xl"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="eb-btn eb-btn-dark"
                        style={{ fontSize: "10px", padding: "0.5rem 1rem" }}
                      >
                        BUY
                      </Link>
                      <button
                        type="button"
                        className="eb-btn eb-btn-secondary"
                        style={{ fontSize: "10px", padding: "0.5rem 1rem" }}
                      >
                        CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dreame-section bg-champagne">
        <div className="dreame-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-jet mb-8 text-balance" style={headingStyle}>
            Supplement Questions, Answered
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="bg-linen border border-eb-border overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className="text-jet text-base"
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-pewter transition-transform flex-shrink-0 ml-4 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-pewter text-sm leading-relaxed" style={bodyStyle}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
