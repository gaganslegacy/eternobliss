import { useEffect, useRef, useState } from "react";

type ProductType = "supplement" | "fitness-tech" | "compression";

type Review = {
  tag: string;
  heading: string;
  body: string;
  name: string;
};

const REVIEWS: Record<ProductType, Review[]> = {
  supplement: [
    {
      tag: "Collagen Powder",
      heading: "My Skin Has Completely Changed",
      body: "I've tried every collagen powder on the market. This one actually works. Six weeks in and my aesthetician asked what I was doing differently. My skin looks like it did five years ago.",
      name: "Sarah M.",
    },
    {
      tag: "Collagen Powder — Subscribe",
      heading: "Finally a Supplement That Delivers",
      body: "Started for my joints, stayed for my skin. The subscription is effortless. I genuinely notice a difference when I miss a few days — that's when you know it's working.",
      name: "James T.",
    },
    {
      tag: "Collagen Powder",
      heading: "Worth Every Cent",
      body: "My nails were breaking constantly. After 8 weeks they're longer and stronger than they've ever been. The powder is completely tasteless — I put it in my morning coffee daily.",
      name: "Emily R.",
    },
    {
      tag: "Collagen Powder — 90 Day",
      heading: "My Go-To Daily Ritual",
      body: "Three months in. My hair is noticeably thicker, my skin has a glow I haven't had in years, and my knee pain from running has almost completely disappeared.",
      name: "Michelle K.",
    },
  ],
  "fitness-tech": [
    {
      tag: "Red Light Therapy Device",
      heading: "My Skin Has Never Looked Better",
      body: "I was paying $180 per red light session at my clinic. This device paid for itself after two visits. The results are identical and I use it in my living room at night.",
      name: "Caroline M.",
    },
    {
      tag: "Red Light Therapy Device",
      heading: "Worth Every Single Cent",
      body: "Week 6 my aesthetician asked what I was doing differently. Fine lines have softened, skin tone is more even, and I have a glow I haven't had since my twenties.",
      name: "David K.",
    },
    {
      tag: "Fitness Ring",
      heading: "Finally Understand My Sleep",
      body: "The sleep data completely changed how I approach recovery. I stopped overtraining and my performance has improved more in 8 weeks than the previous year.",
      name: "Marcus T.",
    },
    {
      tag: "Fitness Ring",
      heading: "The Most Useful Wearable I've Owned",
      body: "I've tried four rings and two watches. This one has the most accurate sleep tracking and the 7-day battery means I actually wear it every single day.",
      name: "Priya N.",
    },
  ],
  compression: [
    {
      tag: "Compression Leggings — Dusty Rose",
      heading: "I Wear These Every Day",
      body: "Bought Dusty Rose, immediately ordered Midnight Black. My legs feel incredible after long days on my feet and they look so good I wear them everywhere. Genuinely obsessed.",
      name: "Taylor M.",
    },
    {
      tag: "Compression Face Mask",
      heading: "My Face Looks Lifted Every Morning",
      body: "After 3 weeks wearing this overnight my face looks more defined when I wake up. The puffiness is completely gone and my skincare absorbs so much better underneath it.",
      name: "Sophia L.",
    },
    {
      tag: "Knee Sleeves — Olive",
      heading: "Training Without Pain",
      body: "Knee issues for years. These gave me enough support to get back to heavy squats. The olive color looks amazing and they don't slip during my workout at all.",
      name: "Ryan C.",
    },
    {
      tag: "Upper Body Compression",
      heading: "My Posture Has Changed",
      body: "A week of wearing this during work hours and I caught myself sitting straight without thinking. Back pain from desk work has reduced dramatically. The black goes under literally everything.",
      name: "Natalie K.",
    },
  ],
};

function StarRow({ size = 11 }: { size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#D4AF37">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: "#EFE9DF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-cormorant)",
        fontSize: "16px",
        color: "#9B6B4D",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials({ productType }: { productType: ProductType }) {
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

  const reviews = REVIEWS[productType];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 1.5rem" }}>
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
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="eb-eyebrow" style={{ marginBottom: "12px" }}>REAL RESULTS</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0A0A0A",
              marginBottom: "20px",
            }}
          >
            What Our Community Says
          </h2>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "28px",
                color: "#0A0A0A",
                fontWeight: 400,
              }}
            >
              4.8 out of 5
            </span>
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 300,
                fontSize: "13px",
                color: "#6B6B6B",
              }}
            >
              Based on 2,300+ verified reviews
            </span>
            <div style={{ width: "60px", height: "1px", backgroundColor: "#E5E3DF", margin: "20px auto 0" }} />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              style={{
                backgroundColor: "#FAFAF8",
                borderTop: "2px solid #9B6B4D",
                padding: "28px 0 0 0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "80px",
                  color: "#9B6B4D",
                  opacity: 0.08,
                  lineHeight: 0.5,
                  display: "block",
                  marginBottom: "-20px",
                }}
              >
                "
              </span>
              <div style={{ padding: "0 24px 24px" }}>
                <StarRow />
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(155,107,77,0.08)",
                    color: "#9B6B4D",
                    fontFamily: "var(--font-lato)",
                    fontWeight: 700,
                    fontSize: "9px",
                    textTransform: "uppercase",
                    padding: "4px 8px",
                    margin: "8px 0 10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {review.tag}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#0A0A0A",
                    marginBottom: "8px",
                  }}
                >
                  {review.heading}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#333333",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  {review.body}
                </p>
                <div
                  style={{
                    borderTop: "1px solid #F0EBE3",
                    paddingTop: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Avatar name={review.name} />
                  <div>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 600, fontSize: "13px", color: "#0A0A0A" }}>
                      {review.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "11px", color: "#5F7A61" }}>
                      ✓ Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
