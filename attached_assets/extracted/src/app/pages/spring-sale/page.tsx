"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Clock, Gift, Percent, Truck, Shield } from "lucide-react";

const saleProducts = [
  {
    id: "x60-max-ultra",
    name: "X60 Max Ultra Complete",
    subtitle: "3.13in Ultra-Slim | Proactive AI Vision",
    price: 1499.99,
    originalPrice: 1699.99,
    savings: 200,
    image: "https://ext.same-assets.com/1798743184/516581279.jpeg",
    badge: "Best Deal",
  },
  {
    id: "h15-pro-heat",
    name: "H15 Pro Heat",
    subtitle: '212F Brush Wash | 180" Lie-Flat Reach',
    price: 549.99,
    originalPrice: 649.99,
    savings: 100,
    image: "https://ext.same-assets.com/1798743184/2837609668.png",
    badge: "Hot",
  },
  {
    id: "l40-ultra",
    name: "L40 Ultra",
    subtitle: "11,000Pa | Auto Mop Washing",
    price: 1199.99,
    originalPrice: 1399.99,
    savings: 200,
    image: "https://ext.same-assets.com/1798743184/607791508.jpeg",
    badge: "Popular",
  },
  {
    id: "z30-cordless",
    name: "Z30 Cordless Vacuum",
    subtitle: "310AW Suction | 90 Min Runtime",
    price: 449.99,
    originalPrice: 549.99,
    savings: 100,
    image: "https://ext.same-assets.com/1798743184/3976429251.jpeg",
    badge: "Sale",
  },
  {
    id: "a3-awd-pro",
    name: "A3 AWD Pro Lawn Mower",
    subtitle: "All-Wheel Drive | Smart Navigation",
    price: 1999.99,
    originalPrice: 2299.99,
    savings: 300,
    image: "https://ext.same-assets.com/1798743184/2934628483.jpeg",
    badge: "New",
  },
  {
    id: "airstyle",
    name: "AirStyle Hair Styler",
    subtitle: "Professional Styling | Multiple Attachments",
    price: 179.99,
    originalPrice: 229.99,
    savings: 50,
    image: "https://ext.same-assets.com/1798743184/778117531.jpeg",
    badge: "Sale",
  },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "robot-vacuums", name: "Robot Vacuums" },
  { id: "wet-dry", name: "Wet Dry Vacuums" },
  { id: "cordless", name: "Cordless Vacuums" },
  { id: "mowers", name: "Lawn Mowers" },
  { id: "hair-care", name: "Hair Care" },
];

const benefits = [
  {
    icon: Percent,
    title: "Up to $900 Off",
    description: "Biggest discounts of the season",
  },
  {
    icon: Gift,
    title: "Free Gifts",
    description: "Exclusive accessories with select purchases",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders, no minimum",
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Extra protection on sale items",
  },
];

export default function SpringSalePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#a8d5a2] via-[#c5e1a5] to-[#e8f5e9] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#b79d6d] rounded-full blur-3xl" />
        </div>
        <div className="dreame-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium text-[#33502e] mb-4">
              <Clock className="mr-2 h-4 w-4" />
              Limited Time Only
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#33502e] mb-4">
              Spring Sale 2025
            </h1>
            <p className="text-xl text-[#33502e]/80 mb-6">
              Up to $900 Off on Smart Home Cleaning Essentials
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#deals"
                className="px-8 py-4 bg-[#33502e] text-white rounded-full font-medium hover:bg-[#2a4225] transition-colors"
              >
                Shop All Deals
              </Link>
              <Link
                href="#"
                className="px-8 py-4 bg-white/50 backdrop-blur-sm text-[#33502e] rounded-full font-medium hover:bg-white/70 transition-colors"
              >
                View Best Sellers
              </Link>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="dreame-container mt-12 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-center text-sm font-medium text-gray-600 mb-4">Sale Ends In:</p>
            <div className="flex justify-center space-x-4">
              {[
                { value: "05", label: "Days" },
                { value: "12", label: "Hours" },
                { value: "34", label: "Minutes" },
                { value: "56", label: "Seconds" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-16 h-16 bg-[#33502e] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    {item.value}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white py-8 border-b">
        <div className="dreame-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <benefit.icon className="h-8 w-8 mx-auto text-[#b79d6d] mb-2" />
                <h3 className="font-semibold text-[#050505] text-sm">{benefit.title}</h3>
                <p className="text-xs text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="deals" className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-6">
            Spring Sale Deals
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#33502e] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 bg-[#33502e] text-white text-xs font-medium px-2 py-1 rounded z-10">
                    Save ${product.savings}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#050505] mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{product.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-[#33502e]">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center px-4 py-2 bg-[#33502e] text-white rounded-full text-sm font-medium hover:bg-[#2a4225] transition-colors"
                    >
                      Shop Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals Banner */}
      <section className="dreame-section bg-[#33502e] text-white">
        <div className="dreame-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                <Clock className="mr-2 h-4 w-4" />
                Flash Deals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Extra 10% Off
              </h2>
              <p className="text-white/80 mb-6">
                Use code SPRING10 at checkout for an additional 10% off select items.
                Limited quantities available!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="px-6 py-3 bg-white text-[#33502e] rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Shop Flash Deals
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border border-white/50 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  View All Codes
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1798743184/516581279.jpeg"
                alt="Flash Deal Product"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="bg-gradient-to-r from-[#f0f9f0] to-[#e8f5e9] rounded-2xl p-8 md:p-12 text-center">
            <Gift className="h-12 w-12 mx-auto text-[#33502e] mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#050505] mb-2">
              Don't Miss Out!
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Sign up for our newsletter to receive exclusive Spring Sale offers
              and an extra 8% off your first order!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#33502e] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#33502e] text-white rounded-full font-medium hover:bg-[#2a4225] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
