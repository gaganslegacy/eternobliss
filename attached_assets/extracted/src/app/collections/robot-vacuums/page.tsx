"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Check } from "lucide-react";

const products = [
  {
    id: "x60-max-ultra",
    name: "Dreame X60 Max Ultra Complete Robot Vacuum",
    features: [
      "3.13in (7.95cm) Slim Design for Effortless Under-Furniture Cleaning",
      "Recognizes 280+ Objects to Dodge Clutter for Smooth Cleaning",
      "Proactive Light Reveals Dark Corners for Thorough Cleaning",
    ],
    price: 1699.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/3330863073.jpeg",
    colors: ["white", "black"],
    badge: "New",
  },
  {
    id: "l40-ultra-gen2",
    name: "Dreame L40 Ultra Gen 2 Robot Vacuum",
    features: [
      "25,000Pa strong suction for deeper dust and pet hair pickup",
      "Up to 100 days of hands-free cleaning",
      "Extendable side brush and mop reach deep into corners and edges",
    ],
    price: 649.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/3923948088.jpeg",
    colors: ["white", "black"],
    badge: null,
  },
  {
    id: "matrix10-ultra",
    name: "Dreame Matrix10 Ultra Robot Vacuum",
    features: [
      "Tailored Cleaning with Multi-Mop Switching Dock",
      "212°F ThermoHub Self-Cleaning for Fresh Mops",
      "Three-Solution Compartment for Various Floor Types",
    ],
    price: 1799.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/4244115829.jpeg",
    colors: ["white", "black"],
    badge: null,
  },
  {
    id: "aqua10-ultra",
    name: "Dreame Aqua10 Ultra Roller Robot Vacuum",
    features: [
      "Continuously rinses the roller with real-time fresh water",
      "FluffRoll counter-rotates to lift fibers for a deeper clean",
      "AutoSeal closes on carpet and lifts the roller",
    ],
    price: 1599.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/927988263.jpeg",
    colors: ["white", "black"],
    badge: null,
  },
  {
    id: "d30-ultra",
    name: "Dreame D30 Ultra Robot Vacuum",
    features: [
      "25,000Pa Vormax Suction Ensures Strong Pickup",
      "MopExtend Tech for Enhanced Edge and Corner Cleaning",
      "Up to 100-Day Auto-Empty Dust Bag",
    ],
    price: 539.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/1723817188.jpeg",
    colors: ["white", "black"],
    badge: null,
  },
  {
    id: "l50-ultra",
    name: "Dreame L50 Ultra Robot Vacuum",
    features: [
      "Innovative ProLeap System",
      "19,500Pa Vormax Suction",
      "HyperStream Detangling DuoBrush",
      "Dual Flex Arm Technology",
    ],
    price: 1399.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/1474325895.png",
    colors: ["white", "black"],
    badge: "3",
  },
  {
    id: "l40s-ultra-ce",
    name: "Dreame L40s Ultra CE Robot Vacuum",
    features: [
      "13,000Pa Vormax Suction",
      "TriCut Brush to Easily Detangle",
      "All-in-One PowerDock",
      "RoboSwing Technology",
    ],
    price: 469.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/1405523366.png",
    colors: ["white", "black"],
    badge: "3",
  },
  {
    id: "l40s-ultra-ae",
    name: "Dreame L40s Ultra AE Robot Vacuum",
    features: [
      "19,000Pa Vormax Suction",
      "Liftable Rubber Brush & Complimentary TriCut Brush",
      "Flexible MopExtend Technology",
      "Intelligent PowerDock",
    ],
    price: 729.99,
    originalPrice: null,
    image: "https://ext.same-assets.com/1798743184/494722819.png",
    colors: ["white", "black"],
    badge: "3",
  },
];

const exploreMore = [
  {
    title: "Help Me Choose",
    description: "Answer six questions to find the right robot vacuum for your home",
    cta: "Match Me To A Model",
    image: "https://ext.same-assets.com/1798743184/1390293864.png",
  },
  {
    title: "Compare Robot Vacuums",
    description: "See how the key specs of today's best-selling products stack up side by side",
    cta: "Compare",
    image: "https://ext.same-assets.com/1798743184/3765517211.png",
  },
  {
    title: "Accessories",
    description: "Shop genuine robot vacuum replacement brushes, mop pads, dust bags",
    cta: "See All Accessories",
    image: "https://ext.same-assets.com/1798743184/583383858.png",
  },
];

const faqs = [
  {
    question: "How Do Robot Vacuums Work?",
    answer: "Robot vacuums use sensors and smart navigation to map your home and clean it efficiently. They detect dirt, avoid obstacles, and return to their charging base when done or when the battery runs low. Some models even include mopping and app-controlled scheduling.",
  },
  {
    question: "How To Choose A Robot Vacuum?",
    answer: "Consider factors like suction power, navigation technology, battery life, dustbin capacity, and whether you need mopping features. Also consider your home's floor types and pet hair if applicable.",
  },
  {
    question: "Where To Buy A Robot Vacuum?",
    answer: "You can purchase robot vacuums directly from our official website, authorized retailers, and major e-commerce platforms like Amazon.",
  },
  {
    question: "Are Robot Vacuums Difficult To Set Up?",
    answer: "Most robot vacuums are designed for easy setup. Simply charge the unit, download the companion app, and follow the in-app instructions to connect to your home WiFi.",
  },
  {
    question: "Are Robot Vacuums Worth The Investment?",
    answer: "Robot vacuums save time on daily cleaning tasks, maintain cleaner floors consistently, and are especially beneficial for pet owners or those with allergies.",
  },
];

export default function RobotVacuumsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"floor" | "features">("floor");

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
            <span className="text-gray-800 font-medium">Robot Vacuum And Mop Collection</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="bg-[#33502e] p-8 md:p-12 flex flex-col justify-center text-white min-h-[300px]">
            <span className="text-sm uppercase tracking-wide mb-2">X-Series</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Future of Home Cleaning with A.I</h2>
            <Link href="#" className="inline-flex items-center text-sm font-medium bg-white/20 px-4 py-2 rounded-full w-fit hover:bg-white/30 transition-colors">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-[#f5f3ef] p-8 md:p-12 flex flex-col justify-center min-h-[300px]">
            <span className="text-sm uppercase tracking-wide text-gray-600 mb-2">L-Series</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-4">Premium Whole-Home Cleaning</h2>
            <Link href="#" className="inline-flex items-center text-sm font-medium bg-[#050505]/10 px-4 py-2 rounded-full w-fit hover:bg-[#050505]/20 transition-colors">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-[#e8e4dc] p-8 md:p-12 flex flex-col justify-center min-h-[300px]">
            <span className="text-sm uppercase tracking-wide text-gray-600 mb-2">D-Series</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-4">Entry-Level Value and Quality Cleaning</h2>
            <Link href="#" className="inline-flex items-center text-sm font-medium bg-[#050505]/10 px-4 py-2 rounded-full w-fit hover:bg-[#050505]/20 transition-colors">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden p-8">
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-[#b79d6d] text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
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

                  <h3 className="font-semibold text-[#050505] mb-3 line-clamp-2">
                    {product.name}
                  </h3>

                  <ul className="space-y-1.5 mb-4">
                    {product.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="text-xs text-gray-500 flex items-start">
                        <span className="mr-2">•</span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#050505]">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 bg-[#050505] text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                      >
                        Buy Now
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 border border-[#050505] text-[#050505] text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              className="px-8 py-3 border border-[#050505] text-[#050505] rounded-full font-medium hover:bg-[#050505] hover:text-white transition-colors"
            >
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-8">
            Explore More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exploreMore.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80 mb-3">{item.description}</p>
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      {item.cta}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Scenario */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-6">
            Shop Robot Vacuum by Scenario
          </h2>

          <div className="flex space-x-4 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("floor")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "floor"
                  ? "bg-[#b79d6d] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Floor Type
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "features"
                  ? "bg-[#b79d6d] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Smart Features
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeTab === "floor" ? (
              <>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Hardwood Cleaning With Robot Vacuums
                </Link>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Carpet Cleaning With Robot Vacuums
                </Link>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Hard Floor Cleaning With Robot Vacuums
                </Link>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Tile Floor Cleaning With Robot Vacuums
                </Link>
              </>
            ) : (
              <>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Self-Emptying Robot Vacuums
                </Link>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  AI Object Recognition
                </Link>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Smart Mapping Technology
                </Link>
                <Link href="#" className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  Voice Control Compatible
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-8">
            Your Robot Vacuum Questions, Answered
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl overflow-hidden"
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
