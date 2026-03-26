import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

type ProductType = "supplement" | "fitness-tech" | "compression";

type RelatedProduct = {
  handle: string;
  name: string;
  price: string;
  badge?: string;
  image: string;
};

const RELATED: Record<ProductType, RelatedProduct[]> = {
  supplement: [
    { handle: "creatine-gummies", name: "Creatine Gummies", price: "$39.99", badge: "NEW", image: "https://images.unsplash.com/photo-1585394838622-3121dd282885?w=400&auto=format&fit=crop" },
    { handle: "magnesium-gummies", name: "Magnesium Gummies", price: "$34.99", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop" },
    { handle: "vitamin-d3-k2", name: "Vitamin D3+K2", price: "$34.99", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&auto=format&fit=crop" },
    { handle: "fitness-ring", name: "Fitness Ring", price: "$249.99", badge: "NEW", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop" },
  ],
  "fitness-tech": [
    { handle: "collagen-powder", name: "Collagen Powder", price: "$49.99", badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop" },
    { handle: "fitness-ring", name: "Fitness Ring", price: "$249.99", badge: "NEW", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop" },
    { handle: "compression-leggings", name: "Compression Leggings", price: "$79.99", image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop" },
    { handle: "magnesium-gummies", name: "Magnesium Gummies", price: "$34.99", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop" },
  ],
  compression: [
    { handle: "knee-sleeves", name: "Knee Sleeves", price: "$54.99", image: "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=400&auto=format&fit=crop" },
    { handle: "upper-body-compression", name: "Upper Body Compression", price: "$69.99", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop" },
    { handle: "compression-face-mask", name: "Compression Face Mask", price: "$49.99", badge: "NEW", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop" },
    { handle: "collagen-powder", name: "Collagen Powder", price: "$49.99", badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=400&auto=format&fit=crop" },
  ],
};

export default function YouMayAlsoLike({ productType }: { productType: ProductType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const products = RELATED[productType];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "80px 1.5rem" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <p className="eb-eyebrow" style={{ marginBottom: "8px" }}>YOU MAY ALSO LIKE</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#0A0A0A",
            }}
          >
            Complete Your Collection
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            overflowX: "auto",
          }}
        >
          {products.map((product) => (
            <Link key={product.handle} href={`/products/${product.handle}`}>
              <div
                className="product-card group"
                style={{
                  border: "1px solid #E5E3DF",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1/1",
                    backgroundColor: "#EFE9DF",
                    overflow: "hidden",
                  }}
                >
                  {product.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "#9B6B4D",
                        color: "white",
                        fontFamily: "var(--font-lato)",
                        fontWeight: 400,
                        fontSize: "9px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "2px 8px",
                        zIndex: 10,
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 400ms ease",
                    }}
                  />
                </div>
                <div style={{ padding: "14px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontWeight: 400,
                      fontSize: "13px",
                      color: "#0A0A0A",
                      marginBottom: "4px",
                    }}
                  >
                    {product.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: "#6B6B6B",
                    }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
