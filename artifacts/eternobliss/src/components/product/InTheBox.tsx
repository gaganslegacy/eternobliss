import { useEffect, useRef, useState } from "react";

type BoxItem = { name: string; description: string };

const RED_LIGHT_BOX: BoxItem[] = [
  { name: "Red Light Therapy Device", description: "21cm × 15cm — full face coverage" },
  { name: "AC Power Adapter", description: "Canadian plug — worldwide compatible" },
  { name: "Protective Carrying Case", description: "Premium hard shell, travel-ready" },
  { name: "User Manual", description: "Protocol guide + safety information" },
  { name: "Warranty Card", description: "2-year coverage — register online" },
];

const FITNESS_RING_BOX: BoxItem[] = [
  { name: "Fitness Ring", description: "Titanium shell, chosen size" },
  { name: "Charging Cable", description: "Magnetic USB — charges in 60–80 min" },
  { name: "Sizing Kit", description: "Trial rings to find your perfect fit" },
  { name: "User Manual", description: "Setup guide + health metrics explained" },
  { name: "Warranty Card", description: "2-year coverage — register online" },
];

export default function InTheBox({ productHandle }: { productHandle: string }) {
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

  const items = productHandle === "fitness-ring" ? FITNESS_RING_BOX : RED_LIGHT_BOX;

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
        <div style={{ marginBottom: "48px" }}>
          <p className="eb-eyebrow" style={{ marginBottom: "8px" }}>WHAT YOU RECEIVE</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0A0A0A",
            }}
          >
            In The Box
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              aspectRatio: "4/3",
              backgroundColor: "#F0EBE3",
              background: "linear-gradient(90deg, #F0EBE3 25%, #E8E0D8 50%, #F0EBE3 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />

          <div>
            {items.map((item, i) => (
              <div
                key={item.name}
                style={{
                  borderBottom: "1px solid #F0EBE3",
                  padding: "16px 0",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "22px",
                    color: "#9B6B4D",
                    width: "32px",
                    flexShrink: 0,
                    fontWeight: 400,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#0A0A0A",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-lato)",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: "#6B6B6B",
                      marginTop: "3px",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
