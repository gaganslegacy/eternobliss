"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown } from "lucide-react";

const products = [
  {
    id: "h15-pro-heat",
    name: "Dreame H15 Pro Heat Wet and Dry Vacuum",
    features: [
      "212°F Hot Water Brush Wash for Deep Cleaning",
      "180° Lie-Flat Design Reaches Under Furniture",
      "Self-Cleaning & Drying System",
      "Edge-to-Edge Cleaning with DuoBarrier Technology",
    ],
    price: 549.99,
    originalPrice: 649.99,
    image: "https://ext.same-assets.com/1798743184/2837609668.png",
    colors: ["black"],
    badge: "Hot",
  },
  {
    id: "h14-pro",
    name: "Dreame H14 Pro Wet and Dry Vacuum",
    features: [
      "18,000Pa Strong Suction Power",
      "Self-Cleaning with Hot Air Drying",
      "LED Display with Smart Sensors",
      "Up to 35 Minutes Runtime",
    ],
    price: 449.99,
    originalPrice: 549.99,
    image: "https://ext.same-assets.com/1798743184/1047843814.png",
    colors: ["black", "white"],
    badge: "Popular",
  },
  {
    id: "h13-pro",
    name: "Dreame H13 Pro Wet and Dry Vacuum",
    features: [
      "Dual Edge Cleaning Technology",
      "Self-Propelled for Effortless Use",
      "Voice Assistant Compatible",
      "One-Touch Self-Cleaning",
    ],
    price: 399.99,
    originalPrice: 499.99,
    image: "https://ext.same-assets.com/1798743184/1047843814.png",
    colors: ["black"],
    badge: null,
  },
  {
    id: "h12-core",
    name: "Dreame H12 Core Wet and Dry Vacuum",
    features: [
      "Lightweight Design at Only 4.5kg",
      "Dual-Roller Brush System",
      "Large 900ml Clean Water Tank",
      "LED Headlights for Dark Areas",
    ],
    price: 299.99,
    originalPrice: 379.99,
    image: "https://ext.same-assets.com/1798743184/1047843814.png",
    colors: ["white"],
    badge: "Value",
  },
];

const features = [
  {
    title: "Hot Water Cleaning",
    description: "212°F hot water dissolves tough stains and grease instantly",
    icon: "🔥",
  },
  {
    title: "Self-Cleaning",
    description: "One-touch cleaning and hot air drying prevents odors",
    icon: "✨",
  },
  {
    title: "Edge-to-Edge",
    description: "Clean right up to baseboards and into corners",
    icon: "📐",
  },
  {
    title: "Multi-Surface",
    description: "Works on hardwood, tile, laminate, and more",
    icon: "🏠",
  },
];

const faqs = [
  {
    question: "What surfaces can wet dry vacuums clean?",
    answer: "Dreame wet dry vacuums are designed to clean sealed hard floors including hardwood, tile, laminate, vinyl, and linoleum. They are not recommended for carpet or unsealed wood floors.",
  },
  {
    question: "How does the self-cleaning feature work?",
    answer: "After cleaning, simply place the vacuum on the charging dock and press the self-clean button. The machine will automatically rinse the brush roller with clean water and then dry it with hot air to prevent bacteria and odors.",
  },
  {
    question: "How long does the battery last?",
    answer: "Depending on the model, Dreame wet dry vacuums offer between 25-45 minutes of runtime on a single charge, which is enough to clean most homes.",
  },
  {
    question: "Can I use cleaning solution with the vacuum?",
    answer: "Yes, you can use Dreame-approved cleaning solutions. We recommend using our official cleaning solution for best results and to maintain your warranty.",
  },
  {
    question: "How often should I replace the brush roller?",
    answer: "We recommend replacing the brush roller every 6-12 months depending on usage. Signs that it needs replacement include reduced cleaning performance or visible wear.",
  },
];

export default function WetDryVacuumsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] py-3 px-4 lg:px-8">
        <div className="dreame-container">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#b79d6d] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-800 font-medium">Wet and Dry Vacuums</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-20">
        <div className="dreame-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#b79d6d] text-white text-sm font-medium rounded-full mb-4">
                Wet & Dry Collection
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Deep Clean Every Mess, Every Time
              </h1>
              <p className="text-lg text-white/80 mb-6">
                Experience the power of simultaneous vacuuming and mopping. Our wet dry vacuums
                tackle wet and dry messes in one pass, leaving your floors spotless.
              </p>
              <Link
                href="#products"
                className="inline-flex items-center px-6 py-3 bg-[#b79d6d] text-white rounded-full font-medium hover:bg-[#a08a5c] transition-colors"
              >
                Shop Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1798743184/2837609668.png"
                alt="H15 Pro Heat"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] text-center mb-12">
            Why Choose Dreame Wet Dry Vacuums?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 bg-[#f5f5f5] rounded-2xl">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-[#050505] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-8">
            Our Wet Dry Vacuum Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] overflow-hidden p-6">
                  {product.badge && (
                    <span className={`absolute top-4 left-4 text-white text-xs font-medium px-2 py-1 rounded-full z-10 ${
                      product.badge === "Hot" ? "bg-red-500" :
                      product.badge === "Popular" ? "bg-green-600" : "bg-[#b79d6d]"
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  {/* Color options */}
                  <div className="flex items-center space-x-2 mb-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`w-5 h-5 rounded-full border-2 border-gray-300 ${
                          color === "white" ? "bg-white" : "bg-gray-800"
                        }`}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>

                  <h3 className="font-semibold text-[#050505] mb-2 text-sm line-clamp-2">
                    {product.name}
                  </h3>

                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="text-xs text-gray-500 flex items-start">
                        <span className="mr-2">•</span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-xl font-bold text-[#050505]">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="flex-1 py-2 bg-[#050505] text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="flex-1 py-2 border border-[#050505] text-[#050505] text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Banner */}
      <section className="dreame-section bg-[#1a1a2e] text-white">
        <div className="dreame-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which One to Choose?
            </h2>
            <p className="text-white/80 mb-6">
              Compare our wet dry vacuum models side by side to find the perfect
              fit for your home and cleaning needs.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-[#050505] rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Compare Models
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dreame-section bg-white">
        <div className="dreame-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-[#f5f5f5] rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#050505]">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
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
