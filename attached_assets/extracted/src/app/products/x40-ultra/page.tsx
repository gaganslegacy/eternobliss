"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Star, Minus, Plus, Truck, Shield, RotateCcw, Check } from "lucide-react";

const productImages = [
  "https://ext.same-assets.com/1798743184/3449816469.jpeg",
  "https://ext.same-assets.com/1798743184/3923948088.jpeg",
  "https://ext.same-assets.com/1798743184/4244115829.jpeg",
  "https://ext.same-assets.com/1798743184/1723817188.jpeg",
];

const features = [
  {
    title: "VersaLift Navigation",
    description: "Advanced AI navigation that adapts to your home's layout",
  },
  {
    title: "11,000Pa Suction",
    description: "Powerful suction for deep carpet and hard floor cleaning",
  },
  {
    title: "MopExtend RoboSwing",
    description: "Extended mop reaches corners and edges with precision",
  },
  {
    title: "Auto Mop Washing",
    description: "Self-cleaning base washes mops with clean water",
  },
  {
    title: "Hot Air Drying",
    description: "Dries mops at 131°F to prevent odors and bacteria",
  },
  {
    title: "60 Days Auto-Empty",
    description: "Large dust bag for extended hands-free operation",
  },
];

const specs = [
  { label: "Suction Power", value: "11,000Pa" },
  { label: "Battery", value: "5,200mAh" },
  { label: "Runtime", value: "Up to 210 min" },
  { label: "Dustbin Capacity", value: "350ml" },
  { label: "Water Tank", value: "80ml (Clean) / 70ml (Dirty)" },
  { label: "Noise Level", value: "65dB (Standard mode)" },
  { label: "Dimensions", value: "353 x 353 x 96.8mm" },
  { label: "Weight", value: "3.9kg" },
];

const relatedProducts = [
  {
    id: "x50-ultra",
    name: "X50 Ultra Robot Vacuum",
    price: 1499.99,
    image: "https://ext.same-assets.com/1798743184/2344373980.jpeg",
  },
  {
    id: "l40-ultra",
    name: "L40 Ultra Robot Vacuum",
    price: 1199.99,
    image: "https://ext.same-assets.com/1798743184/3923948088.jpeg",
  },
  {
    id: "l50-ultra",
    name: "L50 Ultra Robot Vacuum",
    price: 1399.99,
    image: "https://ext.same-assets.com/1798743184/1474325895.png",
  },
];

export default function X40UltraPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");

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
            <Link href="/collections/robot-vacuums" className="text-gray-500 hover:text-[#b79d6d] transition-colors">
              Robot Vacuums
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-800 font-medium">X40 Ultra</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#f5f5f5] mb-4">
                <img
                  src={productImages[selectedImage]}
                  alt="X40 Ultra"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden bg-[#f5f5f5] p-2 border-2 transition-all ${
                      selectedImage === index ? "border-[#b79d6d]" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`X40 Ultra view ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                  Best Seller
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#050505] mb-2">
                Dreame X40 Ultra Robot Vacuum
              </h1>

              <p className="text-gray-600 mb-4">
                VersaLift Navigation | 11,000Pa Suction | MopExtend RoboSwing
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#b79d6d] text-[#b79d6d]" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.8 (256 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-bold text-[#050505]">$1,299.99</span>
                <span className="text-xl text-gray-400 line-through">$1,499.99</span>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded">
                  Save $200
                </span>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Color: <span className="capitalize">{selectedColor}</span>
                </p>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedColor("white")}
                    className={`w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center transition-all ${
                      selectedColor === "white" ? "border-[#b79d6d]" : "border-gray-300"
                    }`}
                  >
                    {selectedColor === "white" && <Check className="h-5 w-5 text-[#b79d6d]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedColor("black")}
                    className={`w-10 h-10 rounded-full bg-gray-800 border-2 flex items-center justify-center transition-all ${
                      selectedColor === "black" ? "border-[#b79d6d]" : "border-gray-300"
                    }`}
                  >
                    {selectedColor === "black" && <Check className="h-5 w-5 text-white" />}
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-8">
                <button
                  type="button"
                  className="flex-1 py-4 bg-[#050505] text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="flex-1 py-4 bg-[#b79d6d] text-white rounded-full font-medium hover:bg-[#a08a5c] transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-[#f5f5f5] rounded-xl">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-[#b79d6d] mb-1" />
                  <span className="text-xs text-gray-600">Free Shipping</span>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto text-[#b79d6d] mb-1" />
                  <span className="text-xs text-gray-600">30-Day Returns</span>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-[#b79d6d] mb-1" />
                  <span className="text-xs text-gray-600">2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Specs Tabs */}
      <section className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container">
          <div className="flex space-x-8 border-b border-gray-300 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`pb-4 text-lg font-medium transition-colors ${
                activeTab === "features"
                  ? "text-[#050505] border-b-2 border-[#b79d6d]"
                  : "text-gray-500"
              }`}
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`pb-4 text-lg font-medium transition-colors ${
                activeTab === "specs"
                  ? "text-[#050505] border-b-2 border-[#b79d6d]"
                  : "text-gray-500"
              }`}
            >
              Specifications
            </button>
          </div>

          {activeTab === "features" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-[#050505] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {specs.map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <h2 className="text-2xl font-bold text-[#050505] mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-square bg-[#f5f5f5] p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#050505] mb-2">{product.name}</h3>
                  <span className="text-lg font-bold text-[#050505]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
