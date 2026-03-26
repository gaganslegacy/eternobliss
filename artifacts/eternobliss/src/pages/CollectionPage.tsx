import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { shopifyFetch } from "../lib/shopify";
import { GET_COLLECTION } from "../lib/shopify-queries";
import type { ShopifyProduct } from "../types/shopify";
import { useCart } from "../context/CartContext";

type SortOption = "featured" | "price-asc" | "price-desc" | "title";

const COLLECTION_META: Record<string, { title: string; description: string }> = {
  "skincare-essentials": {
    title: "Skincare Essentials",
    description: "Clinically-proven formulas for radiant, youthful skin.",
  },
  "wellness-supplements": {
    title: "Wellness Supplements",
    description: "Clinically-dosed formulas for daily wellness rituals.",
  },
  "aromatherapy-sleep": {
    title: "Aromatherapy & Sleep",
    description: "Natural blends to restore calm and support deep sleep.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest additions to the EternoBliss collection.",
  },
  bestsellers: {
    title: "Bestsellers",
    description: "Our most loved products. Community-approved.",
  },
  all: {
    title: "Shop All",
    description: "Explore the complete EternoBliss wellness collection.",
  },
  // Legacy handles kept for backward compat
  supplements: {
    title: "Supplements",
    description: "Clinically-dosed formulas for daily wellness rituals.",
  },
  "fitness-tech": {
    title: "Fitness Technology",
    description: "Professional-grade devices for performance and recovery.",
  },
  "compression-wear": {
    title: "Compression Wear",
    description: "Medical-grade compression designed for daily life.",
  },
};

const FALLBACK_PRODUCTS: Record<string, Array<Partial<ShopifyProduct>>> = {
  // ── Live Shopify collection handles ──
  "skincare-essentials": [
    { id: "s1", handle: "vitamin-c-serum-20-l-ascorbic-acid", title: "Vitamin C Serum – 20% L-Ascorbic Acid", description: "Brightening | Anti-Aging | SPF Boost", priceRange: { minVariantPrice: { amount: "39.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "54.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["Skincare Essentials"], variants: { edges: [{ node: { id: "sv1", title: "Default", price: { amount: "39.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "s2", handle: "retinol-night-cream-anti-aging-formula", title: "Retinol Night Cream – Anti-Aging Formula", description: "0.5% Encapsulated Retinol | Ceramide Complex", priceRange: { minVariantPrice: { amount: "44.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "64.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["Skincare Essentials", "Bestseller"], variants: { edges: [{ node: { id: "sv2", title: "Default", price: { amount: "44.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "s3", handle: "hair-growth-serum-clinical-peptide-complex", title: "Hair Growth Serum – Clinical Peptide Complex", description: "Peptide Blend | 3× Density in 90 Days", priceRange: { minVariantPrice: { amount: "39.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "59.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["Skincare Essentials", "Bestseller"], variants: { edges: [{ node: { id: "sv3", title: "Default", price: { amount: "39.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
  ],
  "wellness-supplements": [
    { id: "w1", handle: "collagen-powder-unflavored-marine-collagen", title: "Collagen Powder – Unflavored Marine Collagen", description: "Marine Collagen + Hyaluronic Acid", priceRange: { minVariantPrice: { amount: "49.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "69.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["Wellness Supplements", "Bestseller"], variants: { edges: [{ node: { id: "wv1", title: "Default", price: { amount: "49.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
  ],
  "aromatherapy-sleep": [
    { id: "a1", handle: "sleep-enhancement-spray-melatonin-lavender", title: "Sleep Enhancement Spray – Melatonin + Lavender", description: "0.5mg Melatonin Micro-Dose | French Lavender", priceRange: { minVariantPrice: { amount: "34.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "49.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1600612253971-33f876a56de3?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["Aromatherapy & Sleep"], variants: { edges: [{ node: { id: "av1", title: "Default", price: { amount: "34.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
  ],
  // ── Legacy collection handles ──
  supplements: [
    { id: "1", handle: "collagen-powder", title: "Collagen Powder", description: "Marine Collagen + Hyaluronic Acid", priceRange: { minVariantPrice: { amount: "59.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "79.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["bestseller"], variants: { edges: [{ node: { id: "v1", title: "Default", price: { amount: "59.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "2", handle: "creatine-gummies", title: "Creatine Gummies", description: "Enhanced Performance | All-Natural", priceRange: { minVariantPrice: { amount: "39.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "49.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1585394838622-3121dd282885?w=400&auto=format&fit=crop", altText: null } }] }, tags: [], variants: { edges: [{ node: { id: "v2", title: "Default", price: { amount: "39.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "3", handle: "magnesium-gummies", title: "Magnesium Gummies", description: "Deep Sleep Support | Calming Blend", priceRange: { minVariantPrice: { amount: "34.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "44.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["new"], variants: { edges: [{ node: { id: "v3", title: "Default", price: { amount: "34.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "4", handle: "electrolyte-sticks", title: "Electrolyte Sticks", description: "Peak Hydration | Zero Sugar", priceRange: { minVariantPrice: { amount: "29.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "39.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1596803244536-97618c2e1edd?w=400&auto=format&fit=crop", altText: null } }] }, tags: [], variants: { edges: [{ node: { id: "v4", title: "Default", price: { amount: "29.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "5", handle: "vitamin-d3-k2", title: "Vitamin D3+K2", description: "Superior Absorption | Liquid Formula", priceRange: { minVariantPrice: { amount: "44.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "59.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["sale"], variants: { edges: [{ node: { id: "v5", title: "Default", price: { amount: "44.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
  ],
  "fitness-tech": [
    { id: "6", handle: "red-light-therapy-device", title: "Red Light Therapy Device", description: "FDA Cleared | 630nm + 850nm", priceRange: { minVariantPrice: { amount: "299.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "399.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["bestseller"], variants: { edges: [{ node: { id: "v6", title: "Default", price: { amount: "299.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "7", handle: "fitness-ring", title: "EternoBliss Fitness Ring", description: "Heart Rate + Sleep Tracking | Waterproof", priceRange: { minVariantPrice: { amount: "199.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "249.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["new"], variants: { edges: [{ node: { id: "v7", title: "Default", price: { amount: "199.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
  ],
  "compression-wear": [
    { id: "8", handle: "compression-leggings", title: "Compression Leggings", description: "Graduated 20-30mmHg | Breathable Mesh", priceRange: { minVariantPrice: { amount: "129.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "169.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["new"], variants: { edges: [{ node: { id: "v8", title: "Default", price: { amount: "129.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "9", handle: "compression-face-mask", title: "Compression Face Mask", description: "Reduces Puffiness | Recovery Boost", priceRange: { minVariantPrice: { amount: "49.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "69.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop", altText: null } }] }, tags: [], variants: { edges: [{ node: { id: "v9", title: "Default", price: { amount: "49.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "10", handle: "knee-sleeves", title: "Knee Sleeves", description: "Graduated Compression | Neoprene Free", priceRange: { minVariantPrice: { amount: "79.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "99.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["sale"], variants: { edges: [{ node: { id: "v10", title: "Default", price: { amount: "79.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
    { id: "11", handle: "upper-body-compression", title: "Upper Body Compression", description: "Shoulder Support | Moisture-Wicking", priceRange: { minVariantPrice: { amount: "89.99", currencyCode: "CAD" } }, compareAtPriceRange: { minVariantPrice: { amount: "119.99" } }, images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop", altText: null } }] }, tags: ["new"], variants: { edges: [{ node: { id: "v11", title: "Default", price: { amount: "89.99" }, availableForSale: true, selectedOptions: [] } }] }, collections: { edges: [] } },
  ],
};

// Deduplicate by handle
const allProducts = Object.values(FALLBACK_PRODUCTS).flat();
const seen = new Set<string>();
FALLBACK_PRODUCTS["all"] = allProducts.filter(p => {
  if (!p.handle || seen.has(p.handle)) return false;
  seen.add(p.handle);
  return true;
});
FALLBACK_PRODUCTS["new-arrivals"] = FALLBACK_PRODUCTS["all"];
FALLBACK_PRODUCTS["bestsellers"] = FALLBACK_PRODUCTS["all"].filter(p =>
  p.tags?.some(t => t.toLowerCase() === "bestseller")
);

function sortProducts(products: Partial<ShopifyProduct>[], sort: SortOption) {
  return [...products].sort((a, b) => {
    if (sort === "price-asc") return parseFloat(a.priceRange?.minVariantPrice.amount || "0") - parseFloat(b.priceRange?.minVariantPrice.amount || "0");
    if (sort === "price-desc") return parseFloat(b.priceRange?.minVariantPrice.amount || "0") - parseFloat(a.priceRange?.minVariantPrice.amount || "0");
    if (sort === "title") return (a.title || "").localeCompare(b.title || "");
    return 0;
  });
}

export default function CollectionPage() {
  const [, params] = useRoute("/collections/:handle");
  const handle = params?.handle || "all";

  const [products, setProducts] = useState<Partial<ShopifyProduct>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<SortOption>("featured");
  const [addingId, setAddingId] = useState<string | null>(null);

  const { addToCart } = useCart();
  const meta = COLLECTION_META[handle] || { title: "Collection", description: "" };

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);

    const load = async () => {
      try {
        const data = await shopifyFetch({
          query: GET_COLLECTION,
          variables: { handle, first: 24 },
        });
        if (data.data.collection) {
          const prods = data.data.collection.products.edges.map((e: { node: ShopifyProduct }) => e.node);
          setProducts(prods);
        } else {
          throw new Error("Collection not found");
        }
      } catch {
        setProducts(FALLBACK_PRODUCTS[handle] || FALLBACK_PRODUCTS["all"]);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [handle]);

  const sortedProducts = sortProducts(products, sort);

  const handleQuickAdd = async (product: Partial<ShopifyProduct>) => {
    const firstVariant = product.variants?.edges?.[0]?.node;
    if (!firstVariant) return;
    setAddingId(product.id || "");
    await addToCart(firstVariant.id, 1, product.handle);
    setAddingId(null);
  };

  return (
    <div className="bg-linen min-h-screen">
      <nav className="dreame-container px-4 lg:px-8 py-3 border-b border-eb-border">
        <ol className="flex items-center gap-2 text-xs text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
          <li><Link href="/" className="hover:text-cognac transition-colors">Home</Link></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li className="text-jet">{meta.title}</li>
        </ol>
      </nav>

      <div className="dreame-container px-4 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-10">
          <p className="eb-eyebrow mb-3">COLLECTION</p>
          <h1
            className="text-3xl md:text-4xl text-jet mb-3"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            {meta.title}
          </h1>
          <p className="text-pewter max-w-lg mx-auto" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
            {meta.description}
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
            {isLoading ? "Loading..." : `${sortedProducts.length} products`}
          </p>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-pewter" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm text-jet border border-eb-border px-3 py-1.5 bg-white focus:outline-none focus:border-cognac"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="border border-eb-border overflow-hidden">
                <div className="aspect-square bg-champagne animate-shimmer" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-champagne animate-shimmer" />
                  <div className="h-4 w-2/3 bg-champagne animate-shimmer" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedProducts.map((product) => {
              const price = parseFloat(product.priceRange?.minVariantPrice?.amount || "0");
              const comparePrice = parseFloat(product.compareAtPriceRange?.minVariantPrice?.amount || "0");
              const image = product.images?.edges?.[0]?.node;

              return (
                <div key={product.id} className="product-card group border border-eb-border overflow-hidden bg-white">
                  <div className="relative aspect-square bg-champagne overflow-hidden">
                    {product.tags?.some(t => t.toLowerCase() === "bestseller") && (
                      <span className="absolute top-3 left-3 bg-cognac text-white z-10" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px" }}>
                        Bestseller
                      </span>
                    )}
                    {product.tags?.some(t => t.toLowerCase() === "new" || t.toLowerCase() === "new arrival") && (
                      <span className="absolute top-3 left-3 bg-jet text-white z-10" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px" }}>
                        New
                      </span>
                    )}
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.altText || product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-champagne" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                      <button
                        type="button"
                        onClick={() => handleQuickAdd(product)}
                        disabled={addingId === product.id}
                        className="w-full bg-jet text-warmwhite text-center py-2.5 text-xs font-medium hover:bg-cognac transition-colors disabled:opacity-60"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase" }}
                      >
                        {addingId === product.id ? "ADDING..." : "QUICK ADD"}
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <Link href={`/products/${product.handle}`}>
                      <h3
                        className="text-sm font-medium text-jet hover:text-cognac transition-colors mb-1 line-clamp-1"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                      >
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-pewter mb-2 line-clamp-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-jet" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
                        ${price.toFixed(2)}
                      </span>
                      {comparePrice > price && (
                        <span className="text-xs text-pewter/60 line-through" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                          ${comparePrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
