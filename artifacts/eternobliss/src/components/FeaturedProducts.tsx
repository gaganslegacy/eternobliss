import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import type { ShopifyProduct } from "../types/shopify";

const categories = [
  { id: "bestsellers", name: "Bestsellers" },
  { id: "supplements", name: "Supplements" },
  { id: "fitness-tech", name: "Fitness Tech" },
  { id: "compression", name: "Compression" },
];

type StaticProduct = {
  id: number;
  name: string;
  handle: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string;
  badgeColor: string;
};

const staticProducts: Record<string, StaticProduct[]> = {
  bestsellers: [
    {
      id: 1,
      name: "Collagen Powder",
      handle: "collagen-powder",
      subtitle: "Marine Collagen + Hyaluronic Acid",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop",
      badge: "Bestseller",
      badgeColor: "bg-cognac",
    },
    {
      id: 2,
      name: "Red Light Therapy Device",
      handle: "red-light-therapy-device",
      subtitle: "FDA Cleared | 630nm + 850nm",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop",
      badge: "FDA Cleared",
      badgeColor: "bg-success",
    },
    {
      id: 3,
      name: "Compression Leggings",
      handle: "compression-leggings",
      subtitle: "Graduated 20-30mmHg | Breathable Mesh",
      price: 129.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop",
      badge: "New",
      badgeColor: "bg-cognac",
    },
    {
      id: 4,
      name: "Fitness Ring",
      handle: "fitness-ring",
      subtitle: "Heart Rate + Sleep Tracking | Waterproof",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop",
      badge: "Most Loved",
      badgeColor: "bg-cognac",
    },
  ],
  supplements: [
    {
      id: 5,
      name: "Collagen Powder",
      handle: "collagen-powder",
      subtitle: "Marine Collagen + Hyaluronic Acid",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop",
      badge: "Bestseller",
      badgeColor: "bg-cognac",
    },
    {
      id: 6,
      name: "Creatine Gummies",
      handle: "creatine-gummies",
      subtitle: "Enhanced Performance | All-Natural",
      price: 39.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1585394838622-3121dd282885?w=400&auto=format&fit=crop",
      badge: "Popular",
      badgeColor: "bg-cognac",
    },
    {
      id: 7,
      name: "Magnesium Gummies",
      handle: "magnesium-gummies",
      subtitle: "Deep Sleep Support | Calming Blend",
      price: 34.99,
      originalPrice: 44.99,
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop",
      badge: "New",
      badgeColor: "bg-cognac",
    },
    {
      id: 8,
      name: "Vitamin D3+K2",
      handle: "vitamin-d3-k2",
      subtitle: "Superior Absorption | Liquid Formula",
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop",
      badge: "Sale",
      badgeColor: "bg-cognac",
    },
  ],
  "fitness-tech": [
    {
      id: 9,
      name: "Red Light Therapy Device",
      handle: "red-light-therapy-device",
      subtitle: "FDA Cleared | 630nm + 850nm",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop",
      badge: "FDA Cleared",
      badgeColor: "bg-success",
    },
    {
      id: 10,
      name: "Fitness Ring",
      handle: "fitness-ring",
      subtitle: "Heart Rate + Sleep Tracking | Waterproof",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop",
      badge: "Most Loved",
      badgeColor: "bg-cognac",
    },
  ],
  compression: [
    {
      id: 11,
      name: "Compression Leggings",
      handle: "compression-leggings",
      subtitle: "Graduated 20-30mmHg | Breathable Mesh",
      price: 129.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop",
      badge: "New",
      badgeColor: "bg-cognac",
    },
    {
      id: 12,
      name: "Compression Face Mask",
      handle: "compression-face-mask",
      subtitle: "Reduces Puffiness | Recovery Boost",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop",
      badge: "Popular",
      badgeColor: "bg-cognac",
    },
    {
      id: 13,
      name: "Knee Sleeves",
      handle: "knee-sleeves",
      subtitle: "Graduated Compression | Neoprene Free",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop",
      badge: "Sale",
      badgeColor: "bg-cognac",
    },
    {
      id: 14,
      name: "Upper Body Compression",
      handle: "upper-body-compression",
      subtitle: "Shoulder Support | Moisture-Wicking",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop",
      badge: "New",
      badgeColor: "bg-cognac",
    },
  ],
};

interface FeaturedProductsProps {
  shopifyProducts?: ShopifyProduct[];
}

export default function FeaturedProducts({ shopifyProducts }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState("bestsellers");

  const currentProducts = staticProducts[activeCategory] || [];

  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="mb-6">
          <p className="eb-eyebrow mb-2">BESTSELLERS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
            Most Loved
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-cognac text-white"
                  : "bg-champagne text-jet hover:bg-eb-border"
              }`}
              style={{ fontFamily: "var(--font-lato)", fontWeight: 400, borderRadius: "0" }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white border border-eb-border overflow-hidden group"
            >
              <div className="relative aspect-square bg-champagne overflow-hidden">
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-medium px-2 py-1 z-10`}
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-jet mb-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                  {product.name}
                </h3>
                <p className="text-sm text-pewter mb-3" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-jet" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-pewter line-through" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/products/${product.handle}`}
                    className="flex items-center text-sm font-medium text-jet hover:text-cognac transition-colors"
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
