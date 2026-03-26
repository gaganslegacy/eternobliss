"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Star, Minus, Plus, Truck, Shield, RotateCcw, Check } from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format&fit=crop",
];

const featureRows = [
  {
    eyebrow: "DUAL WAVELENGTH",
    heading: "Clinically Proven Wavelengths",
    body: "630nm targets surface skin rejuvenation. 850nm penetrates deeper for cellular repair. Combined protocol outperforms single wavelength by 3×.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop",
    imageRight: false,
  },
  {
    eyebrow: "CELLULAR MECHANISM",
    heading: "How Light Becomes Results",
    body: "Red light activates mitochondria — increasing ATP production, reducing inflammation, and stimulating collagen and elastin synthesis.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&auto=format&fit=crop",
    imageRight: true,
  },
  {
    eyebrow: "THE PROTOCOL",
    heading: "10 Minutes. Daily.",
    body: "Use 3–5 times per week for 10–20 minutes. Consistent use shows measurable improvement at 4 weeks and full transformation at 12 weeks.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop",
    imageRight: false,
  },
];

const specs = [
  { label: "Wavelengths", value: "630nm + 850nm" },
  { label: "Power Output", value: "100mW/cm² at 6 inches" },
  { label: "Treatment Area", value: "21cm × 15cm" },
  { label: "Session Time", value: "10–20 minutes" },
  { label: "FDA Status", value: "Cleared Class II Device" },
  { label: "Power Source", value: "AC adapter included" },
  { label: "Dimensions", value: "21cm × 15cm × 2.5cm" },
  { label: "Weight", value: "380g" },
];

const relatedProducts = [
  {
    id: "x40-ultra",
    name: "Collagen Powder",
    tag: "Supplements",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop",
  },
  {
    id: "fitness-ring",
    name: "Fitness Ring",
    tag: "Fitness Tech",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=400&auto=format&fit=crop",
  },
  {
    id: "compression-leggings",
    name: "Compression Leggings",
    tag: "Compression Wear",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop",
  },
];

const stats = [
  { value: "92%", label: "Saw Reduced Inflammation" },
  { value: "87%", label: "Improved Skin Texture" },
  { value: "2.4×", label: "Collagen Production" },
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

export default function RedLightDevicePage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");

  return (
    <main className="min-h-screen bg-linen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-champagne py-3 px-4 lg:px-8 border-b border-eb-border">
        <div className="dreame-container">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-pewter hover:text-cognac transition-colors" style={bodyStyle}>Home</Link>
            <ChevronRight className="h-3 w-3 text-pewter" />
            <Link href="/collections/robot-vacuums" className="text-pewter hover:text-cognac transition-colors" style={bodyStyle}>Fitness Tech</Link>
            <ChevronRight className="h-3 w-3 text-pewter" />
            <span className="text-jet" style={{ ...bodyStyle, fontWeight: 400 }}>Red Light Therapy Device</span>
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
                  alt="Red Light Therapy Device"
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
                      alt={`Red Light Device view ${index + 1}`}
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
                  style={{ backgroundColor: "#5F7A61", fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.15em" }}
                >
                  FDA CLEARED
                </span>
              </div>

              <p className="eb-eyebrow mb-2">CLINICAL RED LIGHT</p>
              <h1 className="text-4xl md:text-5xl text-jet mb-3 text-balance" style={headingStyle}>
                Red Light Therapy Device
              </h1>

              <p className="text-pewter mb-4 leading-relaxed" style={bodyStyle}>
                Professional results. Daily ritual.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-cognac text-cognac" />
                  ))}
                </div>
                <span className="text-sm text-pewter" style={bodyStyle}>4.9 (128 reviews)</span>
              </div>

              {/* Spec strip */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 p-4 bg-champagne border border-eb-border">
                {["630nm + 850nm", "Full Face 21×15cm", "10–20 Min Protocol", "FDA-Cleared Class II", "2-Year Warranty"].map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-cognac flex-shrink-0" />
                    <span className="text-[11px] text-pewter" style={bodyStyle}>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl text-jet" style={headingStyle}>$189.99</span>
                <span className="text-lg text-pewter/50 line-through" style={bodyStyle}>$239.99</span>
                <span className="px-2.5 py-1 text-[9px] tracking-[0.12em]" style={{ backgroundColor: "#EFE9DF", color: "#9B6B4D", fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                  SAVE 21%
                </span>
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
                  BUY NOW
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-champagne border border-eb-border">
                <div className="text-center">
                  <Truck className="h-5 w-5 mx-auto text-cognac mb-1.5" strokeWidth={1.5} />
                  <span className="text-[10px] text-pewter block" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>Free Shipping</span>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-5 w-5 mx-auto text-cognac mb-1.5" strokeWidth={1.5} />
                  <span className="text-[10px] text-pewter block" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>30-Day Returns</span>
                </div>
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto text-cognac mb-1.5" strokeWidth={1.5} />
                  <span className="text-[10px] text-pewter block" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Rows */}
      {featureRows.map((row, i) => (
        <section key={row.eyebrow} className={`dreame-section ${i % 2 === 0 ? "bg-champagne" : "bg-linen"}`}>
          <div className="dreame-container">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${row.imageRight ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}>
              <div>
                <p className="eb-eyebrow mb-3">{row.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl text-jet mb-4 text-balance" style={headingStyle}>
                  {row.heading}
                </h2>
                <p className="text-pewter leading-relaxed" style={bodyStyle}>
                  {row.body}
                </p>
              </div>
              <div className="overflow-hidden aspect-square">
                <img src={row.image} alt={row.heading} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Clinical Stats — dark section */}
      <section className="dreame-section bg-jet">
        <div className="dreame-container">
          <div className="text-center mb-12">
            <p className="eb-eyebrow mb-3" style={{ color: "#B4826A" }}>CLINICAL RESULTS</p>
            <h2 className="text-3xl md:text-4xl text-warmwhite text-balance" style={headingStyle}>
              The Numbers Speak
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center border border-warmwhite/10 p-8">
                <div
                  className="text-6xl md:text-7xl text-cognac-light mb-3"
                  style={{ ...headingStyle, color: "#B4826A" }}
                >
                  {stat.value}
                </div>
                <p className="text-warmwhite/60 text-sm" style={bodyStyle}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs — dark section */}
      <section className="dreame-section bg-[#0A0A0A]">
        <div className="dreame-container">
          <div className="flex gap-8 border-b border-warmwhite/10 mb-8">
            {["features", "specs"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm transition-colors capitalize ${
                  activeTab === tab
                    ? "text-warmwhite border-b-2 border-cognac"
                    : "text-warmwhite/40 hover:text-warmwhite/70"
                }`}
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.1em" }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {activeTab === "features" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Dual Wavelength", desc: "630nm surface + 850nm deep cellular repair" },
                { label: "FDA Cleared", desc: "Class II cleared device for home use" },
                { label: "Full Face Coverage", desc: "21×15cm treatment panel" },
                { label: "Clinically Tested", desc: "Peer-reviewed protocols and outcomes" },
              ].map((f) => (
                <div key={f.label} className="border border-warmwhite/10 p-6">
                  <h3 className="text-warmwhite mb-2 text-lg" style={headingStyle}>{f.label}</h3>
                  <p className="text-warmwhite/50 text-sm" style={bodyStyle}>{f.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden border border-warmwhite/10">
              <table className="w-full">
                <tbody>
                  {specs.map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? "bg-warmwhite/5" : ""}>
                      <td className="px-6 py-4 text-sm text-warmwhite/40 w-1/3" style={bodyStyle}>{spec.label}</td>
                      <td className="px-6 py-4 text-sm text-warmwhite" style={{ ...bodyStyle, fontWeight: 400 }}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="dreame-section bg-linen">
        <div className="dreame-container">
          <h2 className="text-2xl md:text-3xl text-jet mb-8" style={headingStyle}>You May Also Like</h2>
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
