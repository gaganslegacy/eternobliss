import { useEffect, useRef, useState } from "react";

export default function SubscriptionCallout() {
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

  const benefits = [
    "15% off every order, forever",
    "Free shipping on all subscription orders",
    "Skip, pause, or cancel anytime",
    "Priority support and early access",
  ];

  return (
    <section style={{ backgroundColor: "#9B6B4D", padding: "64px 1.5rem" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "60fr 40fr",
          gap: "64px",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "white",
              marginBottom: "12px",
            }}
          >
            Subscribe &amp; Save 15%
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 300,
              fontSize: "15px",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
            }}
          >
            Get 15% off every order, free shipping, and the flexibility to skip or cancel anytime. No commitment required.
          </p>
        </div>

        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {benefits.map((benefit) => (
              <div key={benefit} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 700, color: "white", flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            style={{
              marginTop: "24px",
              backgroundColor: "white",
              color: "#9B6B4D",
              fontFamily: "var(--font-lato)",
              fontWeight: 400,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              padding: "14px 28px",
              border: "none",
              borderRadius: 0,
              cursor: "pointer",
            }}
          >
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </section>
  );
}
