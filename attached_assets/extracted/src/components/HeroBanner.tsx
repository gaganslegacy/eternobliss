"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "NEW ARRIVAL",
    title: "Transform Your Daily Ritual",
    subtitle: "Luxury wellness from the inside out.",
    price: "$189.99",
    originalPrice: "$239.99",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop",
    bgColor: "bg-jet",
    textLight: true,
  },
  {
    id: 2,
    eyebrow: "BESTSELLER",
    title: "Glow From Within",
    subtitle: "10g hydrolyzed collagen. Daily ritual.",
    price: "$49.99",
    originalPrice: "$59.99",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop",
    bgColor: "bg-champagne",
    textLight: false,
  },
  {
    id: 3,
    eyebrow: "COMPRESSION WEAR",
    title: "Perform. Recover. Repeat.",
    subtitle: "Medical-grade compression for every day.",
    price: "$79.99",
    originalPrice: "$99.99",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format&fit=crop",
    bgColor: "bg-[#2C2420]",
    textLight: true,
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            } ${slide.bgColor}`}
          >
            <div className="dreame-container h-full flex flex-col md:flex-row items-center justify-between px-4 lg:px-16">
              <div className="flex-1 py-8 md:py-0 z-10">
                <div className="max-w-lg animate-slideUp">
                  <p className="eb-eyebrow mb-4">{slide.eyebrow}</p>
                  <h1
                    className={`text-4xl md:text-5xl lg:text-6xl mb-4 text-balance ${
                      slide.textLight ? "text-warmwhite" : "text-jet"
                    }`}
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`mb-6 text-sm md:text-base leading-relaxed ${
                      slide.textLight ? "text-warmwhite/70" : "text-pewter"
                    }`}
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                  >
                    {slide.subtitle}
                  </p>
                  <div className="flex items-baseline gap-3 mb-8">
                    <span
                      className={`text-2xl md:text-3xl ${
                        slide.textLight ? "text-warmwhite" : "text-jet"
                      }`}
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      {slide.price}
                    </span>
                    <span
                      className={`text-base ${
                        slide.textLight ? "text-warmwhite/40" : "text-pewter/50"
                      } line-through`}
                      style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                    >
                      {slide.originalPrice}
                    </span>
                  </div>
                  <Link href="#" className="eb-btn eb-btn-primary">
                    SHOP THE COLLECTION
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-linen/80 hover:bg-linen flex items-center justify-center shadow-md transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 text-jet" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-linen/80 hover:bg-linen flex items-center justify-center shadow-md transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 text-jet" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-300 ${
              index === currentSlide ? "bg-cognac w-8" : "bg-white/40 w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
