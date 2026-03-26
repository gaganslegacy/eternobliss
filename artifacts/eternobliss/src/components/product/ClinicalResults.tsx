import { useEffect, useRef, useState } from "react";

type ProductType = "supplement" | "fitness-tech" | "compression";

const STATS: Record<ProductType, Array<{ pct: number; label: string; value: string; title: string; body: string }>> = {
  supplement: [
    { pct: 87, value: "87%", title: "Improved Skin Elasticity", body: "Visible improvement in skin firmness and texture after 8 weeks of daily use" },
    { pct: 76, value: "76%", title: "Reduced Joint Discomfort", body: "Measurable reduction in joint stiffness reported after 4–6 weeks" },
    { pct: 91, value: "91%", title: "Would Recommend", body: "Of verified buyers would recommend to a friend or family member" },
  ],
  "fitness-tech": [
    { pct: 92, value: "92%", title: "Reduced Inflammation", body: "In a double-blind study showed measurable reduction in inflammatory markers" },
    { pct: 87, value: "87%", title: "Improved Skin Texture", body: "Independent dermatological assessment after 12 weeks" },
    { pct: 100, value: "2.4×", title: "Collagen Production", body: "Biopsies showed increased collagen density vs control group" },
  ],
  compression: [
    { pct: 23, value: "23%", title: "Venous Return Velocity", body: "Increase in blood flow back toward the heart vs standard clothing" },
    { pct: 31, value: "31%", title: "Less Muscle Soreness", body: "Reduction in delayed onset soreness after high intensity exercise" },
    { pct: 48, value: "48%", title: "Reduced Swelling", body: "Of wearers reported measurable reduction in leg swelling during extended wear" },
  ],
};

function AnimatedCircle({ pct, value, visible }: { pct: number; value: string; visible: boolean }) {
  const r = 60;
  const circ = 2 * Math.PI * r;
  const offset = circ - (visible ? (Math.min(pct, 100) / 100) * circ : 0);

  return (
    <div style={{ position: "relative", width: "140px", height: "140px", margin: "0 auto 16px" }}>
      <svg width="140" height="140" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="#E5E3DF" strokeWidth={3} />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#9B6B4D"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: visible ? "stroke-dashoffset 1200ms ease" : "none" }}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-cormorant)",
          fontSize: "36px",
          color: "#9B6B4D",
          fontWeight: 400,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function ClinicalResults({ productType }: { productType: ProductType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = STATS[productType];

  return (
    <section style={{ backgroundColor: "#EFE9DF", padding: "96px 1.5rem" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
        <p className="eb-eyebrow" style={{ marginBottom: "12px" }}>CLINICAL RESULTS</p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#0A0A0A",
            marginBottom: "12px",
          }}
        >
          The Numbers
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 300,
            fontSize: "14px",
            color: "#6B6B6B",
            lineHeight: 1.8,
            marginBottom: "64px",
          }}
        >
          Based on independent clinical studies and customer research over 12 weeks.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.title} style={{ textAlign: "center" }}>
              <AnimatedCircle pct={stat.pct} value={stat.value} visible={visible} />
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#0A0A0A",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                {stat.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#6B6B6B",
                  lineHeight: 1.75,
                  maxWidth: "200px",
                  margin: "0 auto",
                }}
              >
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
