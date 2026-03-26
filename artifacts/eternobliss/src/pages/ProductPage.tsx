import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { ChevronRight, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { shopifyFetch } from "../lib/shopify";
import { GET_PRODUCT_BY_HANDLE } from "../lib/shopify-queries";
import type { ShopifyProduct, ShopifyVariant } from "../types/shopify";
import { useCart } from "../context/CartContext";
import SpecStrip from "../components/product/SpecStrip";
import HowItWorks from "../components/product/HowItWorks";
import ClinicalResults from "../components/product/ClinicalResults";
import Testimonials from "../components/product/Testimonials";
import FAQ from "../components/product/FAQ";
import YouMayAlsoLike from "../components/product/YouMayAlsoLike";
import SubscriptionCallout from "../components/product/SubscriptionCallout";
import InTheBox from "../components/product/InTheBox";
import SizeGuide from "../components/product/SizeGuide";

type ProductType = "supplement" | "fitness-tech" | "compression";

function detectProductType(tags: string[], collectionHandles?: string[]): ProductType {
  const lower = tags.map((t) => t.toLowerCase());
  const cols = collectionHandles || [];
  // Supplement / wellness / skincare / aromatherapy all map to supplement content type
  if (cols.includes("wellness-supplements") || lower.some((t) => t === "supplement" || t === "supplements" || t.includes("wellness supplement"))) return "supplement";
  if (cols.includes("aromatherapy-sleep") || lower.some((t) => t.includes("aromatherapy") || t.includes("melatonin") || t === "sleep aid")) return "supplement";
  if (cols.includes("skincare-essentials") || lower.some((t) => t === "skincare essentials" || t.includes("face serum") || t.includes("night cream") || t.includes("hair growth") || t === "skin care" || t === "hair care")) return "supplement";
  // Fitness tech
  if (cols.includes("fitness-tech") || lower.some((t) => t === "fitness-tech" || t === "fitness_tech")) return "fitness-tech";
  // Compression
  if (cols.includes("compression-wear") || lower.some((t) => t.includes("compression"))) return "compression";
  return "supplement";
}

const FALLBACK_PRODUCTS: Record<string, Partial<ShopifyProduct>> = {
  // ── Live Shopify product handles ──
  "collagen-powder-unflavored-marine-collagen": {
    title: "Collagen Powder – Unflavored Marine Collagen",
    description: "Premium marine collagen with hyaluronic acid and vitamin C. 10g hydrolyzed collagen per serving. Unflavored — dissolves in any beverage.",
    priceRange: { minVariantPrice: { amount: "49.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "69.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=700&auto=format&fit=crop", altText: "Collagen Powder" } }] },
    tags: ["Supplement", "Wellness Supplements"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-collagen-2", title: "Default Title", price: { amount: "49.99" }, availableForSale: true, selectedOptions: [{ name: "Title", value: "Default Title" }] } }] },
    collections: { edges: [{ node: { handle: "wellness-supplements", title: "Wellness Supplements" } }] },
  },
  "hair-growth-serum-clinical-peptide-complex": {
    title: "Hair Growth Serum – Clinical Peptide Complex",
    description: "Clinically-proven peptide blend targeting DHT and scalp microbiome. 3× hair density improvement in 90 days. Dermatologist tested.",
    priceRange: { minVariantPrice: { amount: "39.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "59.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop", altText: "Hair Growth Serum" } }] },
    tags: ["Biotin", "Hair Care", "Hair Growth", "Skincare Essentials"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-hair", title: "Default Title", price: { amount: "39.99" }, availableForSale: true, selectedOptions: [{ name: "Title", value: "Default Title" }] } }] },
    collections: { edges: [{ node: { handle: "skincare-essentials", title: "Skincare Essentials" } }] },
  },
  "retinol-night-cream-anti-aging-formula": {
    title: "Retinol Night Cream – Anti-Aging Formula",
    description: "0.5% encapsulated retinol with peptide boost. Reduces fine lines by 41% in 8 weeks. Non-irritating formula with ceramide complex.",
    priceRange: { minVariantPrice: { amount: "44.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "64.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&auto=format&fit=crop", altText: "Retinol Night Cream" } }] },
    tags: ["Anti-Aging", "Night Cream", "Skin Care", "Skincare Essentials"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-retinol", title: "Default Title", price: { amount: "44.99" }, availableForSale: true, selectedOptions: [{ name: "Title", value: "Default Title" }] } }] },
    collections: { edges: [{ node: { handle: "skincare-essentials", title: "Skincare Essentials" } }] },
  },
  "vitamin-c-serum-20-l-ascorbic-acid": {
    title: "Vitamin C Serum – 20% L-Ascorbic Acid",
    description: "20% stabilized L-ascorbic acid with ferulic acid and vitamin E. Brightens, firms, and protects against environmental damage.",
    priceRange: { minVariantPrice: { amount: "39.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "54.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&auto=format&fit=crop", altText: "Vitamin C Serum" } }] },
    tags: ["Anti-Aging", "Brightening", "Face Serum", "Skincare Essentials"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-vitc", title: "Default Title", price: { amount: "39.99" }, availableForSale: true, selectedOptions: [{ name: "Title", value: "Default Title" }] } }] },
    collections: { edges: [{ node: { handle: "skincare-essentials", title: "Skincare Essentials" } }] },
  },
  "sleep-enhancement-spray-melatonin-lavender": {
    title: "Sleep Enhancement Spray – Melatonin + Lavender",
    description: "0.5mg melatonin micro-dose with pure French lavender. Promotes restful sleep without morning grogginess. Spritz on pillow or pulse points.",
    priceRange: { minVariantPrice: { amount: "34.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "49.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1600612253971-33f876a56de3?w=700&auto=format&fit=crop", altText: "Sleep Enhancement Spray" } }] },
    tags: ["Aromatherapy", "Lavender", "Melatonin", "Sleep Aid"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-sleep", title: "Default Title", price: { amount: "34.99" }, availableForSale: true, selectedOptions: [{ name: "Title", value: "Default Title" }] } }] },
    collections: { edges: [{ node: { handle: "aromatherapy-sleep", title: "Aromatherapy & Sleep" } }] },
  },
  // ── Legacy handles (kept for backward compat) ──
  "collagen-powder": {
    title: "Collagen Powder",
    description: "Premium marine collagen with hyaluronic acid and vitamin C. 10g hydrolyzed collagen per serving for superior bioavailability. Unflavored and dissolves easily in any beverage.",
    priceRange: { minVariantPrice: { amount: "59.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "79.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=700&auto=format&fit=crop", altText: "Collagen Powder" } }] },
    tags: ["bestseller", "supplements"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-collagen", title: "Default Title", price: { amount: "59.99" }, availableForSale: true, selectedOptions: [{ name: "Title", value: "Default Title" }] } }] },
    collections: { edges: [] },
  },
  "creatine-gummies": {
    title: "Creatine Gummies",
    description: "5g creatine monohydrate per serving in a delicious gummy format. Enhanced with electrolytes for superior absorption. No mixing required.",
    priceRange: { minVariantPrice: { amount: "39.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "49.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1585394838622-3121dd282885?w=700&auto=format&fit=crop", altText: "Creatine Gummies" } }] },
    tags: ["supplements"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-creatine", title: "Default Title", price: { amount: "39.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "red-light-therapy-device": {
    title: "Red Light Therapy Device",
    description: "FDA Cleared X50 Ultra Series. Dual wavelength 630nm + 850nm for full-body photobiomodulation. 20-minute sessions proven to reduce inflammation and boost collagen production.",
    priceRange: { minVariantPrice: { amount: "299.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "399.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&auto=format&fit=crop", altText: "Red Light Therapy Device" } }] },
    tags: ["fitness-tech", "bestseller"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-rlt", title: "Default Title", price: { amount: "299.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "fitness-ring": {
    title: "EternoBliss Fitness Ring",
    description: "Advanced health monitoring in an elegant titanium ring. Tracks continuous heart rate, SpO2, sleep quality, stress, and readiness score. 7-day battery life. Waterproof.",
    priceRange: { minVariantPrice: { amount: "199.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "249.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=700&auto=format&fit=crop", altText: "Fitness Ring" } }] },
    tags: ["fitness-tech"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-ring", title: "Default Title", price: { amount: "199.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "compression-leggings": {
    title: "Compression Leggings",
    description: "Medical-grade graduated compression 20-30mmHg. Breathable mesh panels for temperature regulation. UPF 50+ protection. Four-way stretch for unrestricted movement.",
    priceRange: { minVariantPrice: { amount: "129.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "169.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=700&auto=format&fit=crop", altText: "Compression Leggings" } }] },
    tags: ["compression-wear"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-leggings", title: "Default Title", price: { amount: "129.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "magnesium-gummies": {
    title: "Magnesium Gummies",
    description: "Magnesium glycinate formula for deep sleep support and nervous system calm. 300mg per serving in a delicious raspberry flavor.",
    priceRange: { minVariantPrice: { amount: "34.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "44.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=700&auto=format&fit=crop", altText: "Magnesium Gummies" } }] },
    tags: ["supplements"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-mag", title: "Default Title", price: { amount: "34.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "electrolyte-sticks": {
    title: "Electrolyte Sticks",
    description: "Precise electrolyte balance: sodium, potassium, magnesium. Zero sugar. Naturally flavored. For peak hydration and performance.",
    priceRange: { minVariantPrice: { amount: "29.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "39.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1596803244536-97618c2e1edd?w=700&auto=format&fit=crop", altText: "Electrolyte Sticks" } }] },
    tags: ["supplements"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-elec", title: "Default Title", price: { amount: "29.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "vitamin-d3-k2": {
    title: "Vitamin D3+K2",
    description: "Superior absorption liquid formula. 5000 IU Vitamin D3 paired with K2 for optimal calcium metabolism and bone health.",
    priceRange: { minVariantPrice: { amount: "44.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "59.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&auto=format&fit=crop", altText: "Vitamin D3+K2" } }] },
    tags: ["supplements"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-vit", title: "Default Title", price: { amount: "44.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "compression-face-mask": {
    title: "Compression Face Mask",
    description: "Reduces facial puffiness with gentle graduated compression. Hyaluronic acid-infused fabric. Cool-to-the-touch technology for recovery boost.",
    priceRange: { minVariantPrice: { amount: "49.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "69.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop", altText: "Compression Face Mask" } }] },
    tags: ["compression-wear"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-mask", title: "Default Title", price: { amount: "49.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "knee-sleeves": {
    title: "Knee Sleeves",
    description: "Graduated compression 15-20mmHg. Neoprene-free design. Targeted patella support with anatomical 3D shaping.",
    priceRange: { minVariantPrice: { amount: "79.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "99.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=700&auto=format&fit=crop", altText: "Knee Sleeves" } }] },
    tags: ["compression-wear"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-knee", title: "Default Title", price: { amount: "79.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
  "upper-body-compression": {
    title: "Upper Body Compression",
    description: "Shoulder and back support with moisture-wicking compression fabric. 20-30mmHg graduated compression for posture improvement and recovery.",
    priceRange: { minVariantPrice: { amount: "89.99", currencyCode: "CAD" } },
    compareAtPriceRange: { minVariantPrice: { amount: "119.99" } },
    images: { edges: [{ node: { url: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=700&auto=format&fit=crop", altText: "Upper Body Compression" } }] },
    tags: ["compression-wear"],
    variants: { edges: [{ node: { id: "gid://shopify/ProductVariant/placeholder-upper", title: "Default Title", price: { amount: "89.99" }, availableForSale: true, selectedOptions: [] } }] },
    collections: { edges: [] },
  },
};

const TRUST_BADGES = [
  { icon: Shield, label: "Third-Party Tested" },
  { icon: Truck, label: "Free Shipping $100+" },
  { icon: RotateCcw, label: "60-Day Returns" },
  { icon: Star, label: "4.9/5 Rating" },
];

export default function ProductPage() {
  const [, params] = useRoute("/products/:handle");
  const handle = params?.handle || "";

  const [product, setProduct] = useState<Partial<ShopifyProduct> | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart, isLoading: cartLoading } = useCart();

  useEffect(() => {
    setIsLoading(true);
    setSelectedImage(0);
    setQuantity(1);

    const loadProduct = async () => {
      try {
        const data = await shopifyFetch({
          query: GET_PRODUCT_BY_HANDLE,
          variables: { handle },
        });
        if (data.data.product) {
          const p = data.data.product;
          setProduct(p);
          const firstVariant = p.variants?.edges?.[0]?.node;
          setSelectedVariant(firstVariant || null);
        } else {
          throw new Error("Product not found");
        }
      } catch {
        const fallback = FALLBACK_PRODUCTS[handle];
        if (fallback) {
          setProduct(fallback);
          const firstVariant = fallback.variants?.edges?.[0]?.node;
          setSelectedVariant(firstVariant || null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addToCart(selectedVariant.id, quantity, handle);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (isLoading) {
    return (
      <div style={{ padding: "4rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div style={{ aspectRatio: "1/1", backgroundColor: "#EFE9DF" }} className="animate-shimmer" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ height: "1rem", width: "8rem", backgroundColor: "#EFE9DF" }} className="animate-shimmer" />
            <div style={{ height: "2rem", width: "16rem", backgroundColor: "#EFE9DF" }} className="animate-shimmer" />
            <div style={{ height: "1.5rem", width: "6rem", backgroundColor: "#EFE9DF" }} className="animate-shimmer" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "2rem", color: "#0D0C0B", marginBottom: "1rem" }}>
          Product Not Found
        </h1>
        <Link href="/collections/all" className="eb-btn eb-btn-primary">
          SHOP ALL
        </Link>
      </div>
    );
  }

  const images = product.images?.edges || [];
  const price = parseFloat(product.priceRange?.minVariantPrice?.amount || "0");
  const comparePrice = parseFloat(product.compareAtPriceRange?.minVariantPrice?.amount || "0");
  const discount = comparePrice > price ? Math.round(((comparePrice - price) / comparePrice) * 100) : 0;
  const collectionHandles = product.collections?.edges?.map((e) => e.node.handle) || [];
  const productType = detectProductType(product.tags || [], collectionHandles);

  return (
    <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E5E3DF", padding: "0.75rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <ol style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "12px", color: "#6B6B6B", listStyle: "none" }}>
            <li><Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link></li>
            <li><ChevronRight style={{ width: "12px", height: "12px" }} /></li>
            <li><Link href="/collections/all" style={{ color: "#6B6B6B", textDecoration: "none" }}>Shop</Link></li>
            <li><ChevronRight style={{ width: "12px", height: "12px" }} /></li>
            <li style={{ color: "#0D0C0B" }}>{product.title}</li>
          </ol>
        </div>
      </nav>

      {/* ─── HERO / ATC ─── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          <div>
            <div style={{ aspectRatio: "1/1", backgroundColor: "#EFE9DF", overflow: "hidden", marginBottom: "0.75rem" }}>
              {images[selectedImage] ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5E3DF", fontSize: "48px" }}>
                  ○
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    style={{
                      width: "64px",
                      height: "64px",
                      overflow: "hidden",
                      border: `2px solid ${i === selectedImage ? "#9B6B4D" : "#E5E3DF"}`,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    <img src={img.node.url} alt={`View ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} style={{ width: "12px", height: "12px", color: "#9B6B4D", fill: "#9B6B4D" }} />
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "12px", color: "#6B6B6B" }}>
                4.9 (128 reviews)
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", color: "#0D0C0B", marginBottom: "0.5rem" }}>
              {product.title}
            </h1>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.5rem", color: "#0D0C0B" }}>
                ${price.toFixed(2)} CAD
              </span>
              {comparePrice > price && (
                <>
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "1rem", color: "rgba(107,107,107,0.6)", textDecoration: "line-through" }}>
                    ${comparePrice.toFixed(2)}
                  </span>
                  <span style={{ backgroundColor: "#9B6B4D", color: "white", fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", padding: "2px 8px" }}>
                    SAVE {discount}%
                  </span>
                </>
              )}
            </div>

            <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              {product.description}
            </p>

            {product.variants && product.variants.edges.length > 1 && (
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", color: "#0D0C0B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                  Select Option
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {product.variants.edges.map(({ node: variant }) => (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      disabled={!variant.availableForSale}
                      style={{
                        padding: "0.5rem 0.75rem",
                        fontSize: "13px",
                        fontFamily: "var(--font-lato)",
                        fontWeight: 300,
                        border: `1px solid ${selectedVariant?.id === variant.id ? "#9B6B4D" : "#E5E3DF"}`,
                        backgroundColor: selectedVariant?.id === variant.id ? "#9B6B4D" : "transparent",
                        color: selectedVariant?.id === variant.id ? "white" : "#0D0C0B",
                        cursor: variant.availableForSale ? "pointer" : "not-allowed",
                        opacity: variant.availableForSale ? 1 : 0.4,
                      }}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #E5E3DF" }}>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", color: "#6B6B6B", fontSize: "18px" }}
                >
                  −
                </button>
                <span style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "14px", borderLeft: "1px solid #E5E3DF", borderRight: "1px solid #E5E3DF" }}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", color: "#6B6B6B", fontSize: "18px" }}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={cartLoading || !selectedVariant?.availableForSale}
                className="eb-btn eb-btn-primary"
                style={{ flex: 1, opacity: (cartLoading || !selectedVariant?.availableForSale) ? 0.6 : 1, cursor: (cartLoading || !selectedVariant?.availableForSale) ? "not-allowed" : "pointer" }}
              >
                {addedToCart ? "ADDED!" : cartLoading ? "ADDING..." : "ADD TO BAG"}
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Icon style={{ width: "16px", height: "16px", color: "#9B6B4D", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "12px", color: "#6B6B6B" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── SPEC STRIP ─── */}
      <SpecStrip productType={productType} />

      {/* ─── HOW IT WORKS ─── */}
      <HowItWorks productType={productType} />

      {/* ─── SUPPLEMENT ONLY: SUBSCRIPTION CALLOUT ─── */}
      {productType === "supplement" && <SubscriptionCallout />}

      {/* ─── CLINICAL RESULTS ─── */}
      <ClinicalResults productType={productType} />

      {/* ─── FITNESS TECH ONLY: IN THE BOX ─── */}
      {productType === "fitness-tech" && <InTheBox productHandle={handle} />}

      {/* ─── COMPRESSION ONLY: SIZE GUIDE ─── */}
      {productType === "compression" && <SizeGuide />}

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials productType={productType} />

      {/* ─── FAQ ─── */}
      <FAQ productType={productType} />

      {/* ─── YOU MAY ALSO LIKE ─── */}
      <YouMayAlsoLike productType={productType} />
    </div>
  );
}
