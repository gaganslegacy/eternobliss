"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Star, Minus, Plus, Truck, Shield, RotateCcw, Check, RefreshCw } from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop",
];

const featureRows = [
  {
    eyebrow: "THE SCIENCE",
    heading: "Why Collagen Matters After 25",
    body: "Collagen production drops 1% per year after 25. By 40, you've lost ~15%. Supplementing with hydrolyzed collagen peptides directly replaces what's lost — measurably improving skin elasticity, joint comfort, and hair quality.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&auto=format&fit=crop",
    imageRight: false,
  },
  {
    eyebrow: "THE FORMULA",
    heading: "Hydrolyzed Means Bioavailable",
    body: "Hydrolyzed collagen is broken into small peptides that absorb directly into the bloodstream — up to 90% absorption vs 30% for standard collagen. You get more from less.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop",
    imageRight: true,
  },
  {
    eyebrow: "HOW TO STACK",
    heading: "Works Better With Vitamin C",
    body: "Vitamin C is essential for collagen synthesis. Take with our Vitamin D3+K2 for the complete skin and bone support protocol. Stack for full spectrum results.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop",
    imageRight: false,
  },
];

const ingredients = [
  { name: "Hydrolyzed Bovine Collagen Peptides", amount: "10g" },
  { name: "Vitamin C (Ascorbic Acid)", amount: "60mg" },
  { name: "Hyaluronic Acid", amount: "50mg" },
  { name: "Biotin", amount: "300mcg" },
];

const relatedProducts = [
  {
    id: "x50-ultra",
    name: "Red Light Therapy Device",
    tag: "Fitness Tech",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&auto=format&fit=crop",
  },
  {
    id: "creatine-gummies",
    name: "Creatine Gummies",
    tag: "Supplements",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&auto=format&fit=crop",
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3+K2",
    tag: "Supplements",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&auto=format&fit=crop",
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

export default function CollagenPowderPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<"onetime" | "subscribe">("subscribe");

  const price = purchaseType === "subscribe" ? 42.49 : 49.99;

  return (
    <main className="min-h-screen bg-linen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-champagne py-3 px-4 lg:px-8 border-b border-eb-border">
        <div className="dreame-container">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-pewter hover:text-cognac transition-colors" style={bodyStyle}>Home</Link>
            <ChevronRight className="h-3 w-3 text-pewter" />
            <Link href="/collections/robot-vacuums" className="text-pewter hover:text-cognac transition-colors" style={bodyStyle}>Supplements</Link>
            <ChevronRight className="h-3 w-3 text-pewter" />
            <span className="text-jet" style={{ ...bodyStyle, fontWeight: 400 }}>Collagen Powder</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="dreame-section bg-linen">
        <div className="dreame-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square overflow-hidden bg-champagne mb-4">
                <img
                  src={productImages[selectedImage]}
                  alt="Collagen Powder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden bg-champagne border-2 transition-all ${
                      selectedImage === index ? "border-cognac" : "border-transparent hover:border-eb-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Collagen Powder view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span
                  className="inline-flex items-center px-3 py-1 text-white text-[9px]"
                  style={{ backgroundColor: "#9B6B4D", fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.15em" }}
                >
                  BESTSELLER
                </span>
              </div>

              <p className="eb-eyebrow mb-2">GLOW FROM WITHIN</p>
              <h1 className="text-4xl md:text-5xl text-jet mb-3 text-balance" style={headingStyle}>
                Collagen Powder
              </h1>

              <p className="text-pewter mb-4 leading-relaxed" style={bodyStyle}>
                10g hydrolyzed collagen per serving. Unflavored. Stackable.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-cognac text-cognac" />
                  ))}
                </div>
                <span className="text-sm text-pewter" style={bodyStyle}>4.8 (341 reviews)</span>
              </div>

              {/* Spec pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["10g Collagen", "Types I & III", "Unflavored", "30 Servings"].map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1.5 bg-champagne border border-eb-border text-jet text-[11px]"
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.08em" }}
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Subscribe toggle */}
              <div className="mb-6 border border-eb-border">
                <button
                  type="button"
                  onClick={() => setPurchaseType("subscribe")}
                  className={`w-full p-4 text-left flex items-start gap-3 transition-colors ${
                    purchaseType === "subscribe" ? "bg-champagne" : "bg-linen hover:bg-champagne/50"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center ${
                    purchaseType === "subscribe" ? "border-cognac bg-cognac" : "border-eb-border"
                  }`}>
                    {purchaseType === "subscribe" && <Check className="h-2.5 w-2.5 text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-jet text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                        Subscribe &amp; Save
                      </span>
                      <span className="text-cognac text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                        $42.49/mo
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <RefreshCw className="h-3 w-3 text-pewter" />
                      <span className="text-pewter text-xs" style={bodyStyle}>Every 30 days · Save 15% · Cancel anytime</span>
                    </div>
                  </div>
                </button>
                <div className="border-t border-eb-border" />
                <button
                  type="button"
                  onClick={() => setPurchaseType("onetime")}
                  className={`w-full p-4 text-left flex items-start gap-3 transition-colors ${
                    purchaseType === "onetime" ? "bg-champagne" : "bg-linen hover:bg-champagne/50"
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center ${
                    purchaseType === "onetime" ? "border-cognac bg-cognac" : "border-eb-border"
                  }`}>
                    {purchaseType === "onetime" && <Check className="h-2.5 w-2.5 text-white" />}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-jet text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                      One-Time Purchase
                    </span>
                    <span className="text-jet text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                      $49.99
                    </span>
                  </div>
                </button>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl text-jet" style={headingStyle}>${price.toFixed(2)}</span>
                {purchaseType === "subscribe" && (
                  <span className="text-lg text-pewter/50 line-through" style={bodyStyle}>$49.99</span>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-[11px] tracking-[0.15em] text-jet mb-2" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>QUANTITY</p>
                <div className="flex items-center border border-eb-border w-fit">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-champagne transition-colors text-jet"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-jet" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-champagne transition-colors text-jet"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <button type="button" className="flex-1 eb-btn eb-btn-dark">
                  ADD TO CART
                </button>
                <button type="button" className="flex-1 eb-btn eb-btn-primary">
                  {purchaseType === "subscribe" ? "SUBSCRIBE" : "BUY NOW"}
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-champagne border border-eb-border">
                <div className="text-center">
                  <Truck className="h-5 w-5 mx-auto text-cognac mb-1.5" strokeWidth={1.5} />
                  <span className="text-[10px] text-pewter block" style={bodyStyle}>Free Shipping</span>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-5 w-5 mx-auto text-cognac mb-1.5" strokeWidth={1.5} />
                  <span className="text-[10px] text-pewter block" style={bodyStyle}>30-Day Returns</span>
                </div>
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto text-cognac mb-1.5" strokeWidth={1.5} />
                  <span className="text-[10px] text-pewter block" style={bodyStyle}>Third-Party Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature rows */}
      {featureRows.map((row, i) => (
        <section key={row.eyebrow} className={`dreame-section ${i % 2 === 0 ? "bg-champagne" : "bg-linen"}`}>
          <div className="dreame-container">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${row.imageRight ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}>
              <div>
                <p className="eb-eyebrow mb-3">{row.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl text-jet mb-4 text-balance" style={headingStyle}>
                  {row.heading}
                </h2>
                <p className="text-pewter leading-relaxed" style={bodyStyle}>{row.body}</p>
              </div>
              <div className="overflow-hidden aspect-square">
                <img src={row.image} alt={row.heading} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ingredients — dark section */}
      <section className="dreame-section bg-jet">
        <div className="dreame-container">
          <div className="max-w-2xl mx-auto">
            <p className="eb-eyebrow mb-3 text-center" style={{ color: "#B4826A" }}>WHAT&apos;S INSIDE</p>
            <h2 className="text-3xl md:text-4xl text-warmwhite text-center mb-10 text-balance" style={headingStyle}>
              Transparent by Design
            </h2>
            <div className="border border-warmwhite/10">
              {ingredients.map((ing, index) => (
                <div
                  key={ing.name}
                  className={`flex items-center justify-between px-6 py-4 ${index % 2 === 0 ? "bg-warmwhite/5" : ""} ${index < ingredients.length - 1 ? "border-b border-warmwhite/10" : ""}`}
                >
                  <span className="text-warmwhite text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>{ing.name}</span>
                  <span className="text-cognac-light text-sm" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, color: "#B4826A" }}>{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="dreame-section bg-linen">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl text-jet mb-8" style={headingStyle}>Complete the Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-linen border border-eb-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-square bg-champagne overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="eb-eyebrow mb-1" style={{ fontSize: "9px" }}>{product.tag}</p>
                  <h3 className="text-jet mb-1 text-lg" style={headingStyle}>{product.name}</h3>
                  <span className="text-jet" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "15px" }}>
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
