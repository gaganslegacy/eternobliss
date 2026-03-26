import { useEffect, useRef, useState } from "react";

type ProductType = "supplement" | "fitness-tech" | "compression";

const HEADINGS: Record<ProductType, string> = {
  supplement: "Science Made Simple",
  "fitness-tech": "Your Daily Protocol",
  compression: "Wear It Right",
};

const STEPS: Record<ProductType, Array<{ num: string; title: string; body: string }>> = {
  supplement: [
    {
      num: "01",
      title: "MIX IT IN",
      body: "Add one scoop to water, coffee, smoothie, or any beverage of your choice. Unflavored — no taste, no texture.",
    },
    {
      num: "02",
      title: "TAKE DAILY",
      body: "Consistency is everything with collagen. Daily use for 8–12 weeks delivers the most measurable results.",
    },
    {
      num: "03",
      title: "FEEL THE SHIFT",
      body: "Most customers notice improved skin elasticity in 4–6 weeks. Hair and nail improvements follow at 8–10 weeks.",
    },
  ],
  "fitness-tech": [
    {
      num: "01",
      title: "CLEANSE",
      body: "Cleanse and dry the treatment area. Remove all makeup and oils before your session.",
    },
    {
      num: "02",
      title: "TREAT",
      body: "Position device 6 inches from your face. Treat for 10–20 minutes per session. Keep eyes closed.",
    },
    {
      num: "03",
      title: "RESTORE",
      body: "Apply your normal skincare routine immediately after. Your skin is primed for maximum absorption.",
    },
  ],
  compression: [
    {
      num: "01",
      title: "PUT IT ON",
      body: "Roll on from the foot upward. Never pull from the top down. Ensures even compression distribution throughout.",
    },
    {
      num: "02",
      title: "MOVE FREELY",
      body: "Four-way stretch adapts to every movement. Compression stays consistent through your full range of motion all day.",
    },
    {
      num: "03",
      title: "FEEL THE DIFFERENCE",
      body: "Reduced heaviness within hours. With daily use, circulation improvement and faster recovery become consistently measurable.",
    },
  ],
};

function useScrollEntry(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function HowItWorks({ productType }: { productType: ProductType }) {
  const { ref, visible } = useScrollEntry();
  const steps = STEPS[productType];
  const heading = HEADINGS[productType];

  return (
    <section style={{ backgroundColor: "#FAFAF8", padding: "96px 1.5rem" }}>
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
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eb-eyebrow" style={{ marginBottom: "12px" }}>HOW IT WORKS</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0A0A0A",
              marginBottom: "20px",
            }}
          >
            {heading}
          </h2>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#9B6B4D", margin: "0 auto" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: "center", position: "relative" }}>
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "50%",
                    right: "-50%",
                    borderTop: "1px dashed #E5E3DF",
                    pointerEvents: "none",
                  }}
                />
              )}
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "80px",
                  color: "#9B6B4D",
                  opacity: 0.15,
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "-24px",
                  fontWeight: 400,
                }}
              >
                {step.num}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#0A0A0A",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "#6B6B6B",
                  lineHeight: 1.8,
                  maxWidth: "220px",
                  margin: "0 auto",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
