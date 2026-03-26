import { useEffect, useRef, useState } from "react";

const LEGGINGS_ROWS = [
  { size: "XS", waist: '24–26"', hips: '34–36"', height: '5\'0"–5\'4"' },
  { size: "S", waist: '27–29"', hips: '37–39"', height: '5\'2"–5\'6"' },
  { size: "M", waist: '30–32"', hips: '40–42"', height: '5\'4"–5\'8"' },
  { size: "L", waist: '33–35"', hips: '43–45"', height: '5\'6"–5\'10"' },
  { size: "XL", waist: '36–38"', hips: '46–48"', height: '5\'8"–6\'0"' },
  { size: "XXL", waist: '39–42"', hips: '49–52"', height: '5\'10"–6\'2"' },
];

const KNEE_ROWS = [
  { size: "S", knee: '13–14"', thigh: '17–18"' },
  { size: "M", knee: '14–15"', thigh: '18–20"' },
  { size: "L", knee: '15–17"', thigh: '20–22"' },
  { size: "XL", knee: '17–19"', thigh: '22–24"' },
];

const MEASURE_STEPS = [
  {
    num: "1",
    title: "Measure Your Waist",
    body: "Find the narrowest point of your torso, 1 inch above your belly button. Exhale and measure snugly.",
  },
  {
    num: "2",
    title: "Measure Your Hips",
    body: "Stand with feet together. Measure around the fullest part of your hips and buttocks.",
  },
  {
    num: "3",
    title: "Find Your Size",
    body: "Match to the chart. If between two sizes, choose the larger — compression should feel supportive, never painful.",
  },
];

const thStyle: React.CSSProperties = {
  fontFamily: "var(--font-lato)",
  fontWeight: 700,
  fontSize: "11px",
  color: "#0A0A0A",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  padding: "10px 12px",
  backgroundColor: "#EFE9DF",
  textAlign: "left",
};

const tdStyle: React.CSSProperties = {
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
  fontSize: "13px",
  color: "#6B6B6B",
  padding: "10px 12px",
  borderBottom: "1px solid #F0EBE3",
};

export default function SizeGuide() {
  const [activeTab, setActiveTab] = useState<"leggings" | "knee">("leggings");
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
        <div style={{ marginBottom: "48px" }}>
          <p className="eb-eyebrow" style={{ marginBottom: "8px" }}>SIZE GUIDE</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0A0A0A",
              marginBottom: "8px",
            }}
          >
            Find Your Perfect Fit
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 300,
              fontSize: "14px",
              color: "#6B6B6B",
            }}
          >
            If between sizes, size up. Compression should feel supportive — never painful.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "18px", color: "#0A0A0A", marginBottom: "28px" }}>
              How to Measure
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {MEASURE_STEPS.map((step) => (
                <div key={step.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#9B6B4D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontFamily: "var(--font-lato)",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "14px", color: "#0A0A0A", marginBottom: "4px" }}>
                      {step.title}
                    </p>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px", color: "#6B6B6B", lineHeight: 1.7 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", marginBottom: "16px", borderBottom: "1px solid #E5E3DF" }}>
              {(["leggings", "knee"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: activeTab === tab ? 600 : 300,
                    fontSize: "12px",
                    color: activeTab === tab ? "#0A0A0A" : "#6B6B6B",
                    background: "none",
                    border: "none",
                    borderBottom: activeTab === tab ? "2px solid #9B6B4D" : "2px solid transparent",
                    padding: "10px 16px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "-1px",
                  }}
                >
                  {tab === "leggings" ? "Leggings & Upper Body" : "Knee Sleeves"}
                </button>
              ))}
            </div>

            <div style={{ overflowX: "auto" }}>
              {activeTab === "leggings" ? (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Size</th>
                      <th style={thStyle}>Waist</th>
                      <th style={thStyle}>Hips</th>
                      <th style={thStyle}>Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LEGGINGS_ROWS.map((row) => (
                      <tr key={row.size}>
                        <td style={{ ...tdStyle, fontWeight: 700, color: "#0A0A0A" }}>{row.size}</td>
                        <td style={tdStyle}>{row.waist}</td>
                        <td style={tdStyle}>{row.hips}</td>
                        <td style={tdStyle}>{row.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Size</th>
                      <th style={thStyle}>Knee</th>
                      <th style={thStyle}>Thigh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {KNEE_ROWS.map((row) => (
                      <tr key={row.size}>
                        <td style={{ ...tdStyle, fontWeight: 700, color: "#0A0A0A" }}>{row.size}</td>
                        <td style={tdStyle}>{row.knee}</td>
                        <td style={tdStyle}>{row.thigh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div
              style={{
                backgroundColor: "#EFE9DF",
                borderRadius: "4px",
                padding: "14px 16px",
                marginTop: "12px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "#6B6B6B",
                }}
              >
                Machine wash cold · Lay flat to dry · Compression lasts 6–12 months with proper care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
