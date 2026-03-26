import { ReactNode, useEffect, useRef, useState } from "react";

interface PolicyPageProps {
  eyebrow: string;
  heading: string;
  lastUpdated?: string;
  children: ReactNode;
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 400,
  fontSize: "28px",
  color: "#0A0A0A",
  marginTop: "48px",
  marginBottom: "16px",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-lato)",
  fontWeight: 700,
  fontSize: "16px",
  color: "#0A0A0A",
  marginTop: "32px",
  marginBottom: "12px",
};

const pStyle: React.CSSProperties = {
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
  fontSize: "16px",
  color: "#333333",
  lineHeight: 1.85,
  marginBottom: "16px",
};

const ulStyle: React.CSSProperties = {
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
  fontSize: "16px",
  color: "#333333",
  lineHeight: 1.85,
  paddingLeft: "24px",
  marginBottom: "16px",
};

export const prose = { h2: h2Style, h3: h3Style, p: pStyle, ul: ulStyle };

export default function PolicyPage({ eyebrow, heading, lastUpdated, children }: PolicyPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeroVisible(true); obs1.disconnect(); } }, { threshold: 0.1 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setContentVisible(true); obs2.disconnect(); } }, { threshold: 0.05 });
    if (heroRef.current) obs1.observe(heroRef.current);
    if (contentRef.current) obs2.observe(contentRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ backgroundColor: "#EFE9DF", padding: "64px 1.5rem", textAlign: "center" }}>
        <div
          ref={heroRef}
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <p className="eb-eyebrow" style={{ marginBottom: "12px" }}>LEGAL</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(32px, 4vw, 56px)", color: "#0A0A0A", marginBottom: "12px" }}>
            {heading}
          </h1>
          {lastUpdated && (
            <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#9B9B9B" }}>
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 1.5rem" }}>
        <div
          ref={contentRef}
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
