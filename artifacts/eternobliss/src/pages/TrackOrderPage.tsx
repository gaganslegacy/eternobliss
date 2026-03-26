import { useState, useEffect, useRef } from "react";
import { Package, CheckCircle, Clock, Truck } from "lucide-react";

function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const inputStyle: React.CSSProperties = {
  height: "48px",
  border: "1px solid #E5E3DF",
  borderRadius: 0,
  backgroundColor: "#FAFAF8",
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
  fontSize: "14px",
  color: "#0A0A0A",
  padding: "0 16px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-lato)",
  fontWeight: 400,
  fontSize: "11px",
  color: "#0A0A0A",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "8px",
};

const STEPS = [
  { key: "placed", label: "Order Placed", Icon: Package },
  { key: "processing", label: "Processing", Icon: Clock },
  { key: "shipped", label: "Shipped", Icon: Truck },
  { key: "delivered", label: "Delivered", Icon: CheckCircle },
];

type TrackResult = {
  orderNumber: string;
  status: "IN TRANSIT" | "DELIVERED" | "PROCESSING";
  activeStep: number;
};

export default function TrackOrderPage() {
  const heroFade = useScrollFade();
  const formFade = useScrollFade();

  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<TrackResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect Shopify Admin API
    // POST /api/track-order → GET /admin/api/orders.json?name=[number]
    setTimeout(() => {
      setResult({
        orderNumber,
        status: "IN TRANSIT",
        activeStep: 2,
      });
      setLoading(false);
    }, 1000);
  };

  const statusStyles: Record<string, { bg: string; color: string }> = {
    "IN TRANSIT": { bg: "rgba(95,122,97,0.12)", color: "#5F7A61" },
    DELIVERED: { bg: "rgba(95,122,97,0.2)", color: "#5F7A61" },
    PROCESSING: { bg: "rgba(155,107,77,0.1)", color: "#9B6B4D" },
  };

  return (
    <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ backgroundColor: "#EFE9DF", padding: "80px 1.5rem", textAlign: "center" }}>
        <div
          ref={heroFade.ref}
          style={{
            opacity: heroFade.visible ? 1 : 0,
            transform: heroFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <p className="eb-eyebrow" style={{ marginBottom: "16px" }}>ORDER TRACKING</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", color: "#0A0A0A", marginBottom: "16px" }}>
            Track Your Order
          </h1>
          <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "18px", color: "#6B6B6B", maxWidth: "480px", margin: "0 auto" }}>
            Enter your order number and email to see your delivery status.
          </p>
        </div>
      </section>

      {/* TRACKING FORM */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 1.5rem" }}>
        <div
          ref={formFade.ref}
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            opacity: formFade.visible ? 1 : 0,
            transform: formFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3DF", borderRadius: "4px", padding: "48px" }}>
            <form onSubmit={handleTrack} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={labelStyle}>Order Number</label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="#EB10001"
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  height: "52px",
                  backgroundColor: loading ? "#C0A899" : "#9B6B4D",
                  color: "white",
                  border: "none",
                  borderRadius: 0,
                  fontFamily: "var(--font-lato)",
                  fontWeight: 400,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background-color 250ms",
                  marginTop: "8px",
                }}
              >
                {loading ? "TRACKING..." : "TRACK ORDER"}
              </button>

              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontStyle: "italic", fontSize: "13px", color: "#9B9B9B", textAlign: "center" }}>
                Your order number is in your confirmation email.
              </p>
            </form>

            {/* RESULT */}
            {result && (
              <div style={{ backgroundColor: "#FAFAF8", border: "1px solid #E5E3DF", borderRadius: "4px", padding: "32px", marginTop: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "14px", color: "#0A0A0A" }}>
                    Order {result.orderNumber}
                  </span>
                  <span
                    style={{
                      backgroundColor: statusStyles[result.status].bg,
                      color: statusStyles[result.status].color,
                      fontFamily: "var(--font-lato)",
                      fontWeight: 700,
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "4px 10px",
                    }}
                  >
                    {result.status}
                  </span>
                </div>

                {/* PROGRESS STEPS */}
                <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      right: "16px",
                      height: "2px",
                      backgroundColor: "#E5E3DF",
                      zIndex: 0,
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(result.activeStep / (STEPS.length - 1)) * 100}%`,
                        backgroundColor: "#5F7A61",
                        transition: "width 600ms ease",
                      }}
                    />
                  </div>

                  {STEPS.map((step, i) => {
                    const completed = i < result.activeStep;
                    const active = i === result.activeStep;
                    return (
                      <div key={step.key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", position: "relative", zIndex: 1 }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: completed ? "#5F7A61" : active ? "#9B6B4D" : "#E5E3DF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <step.Icon style={{ width: "14px", height: "14px", color: completed || active ? "white" : "#9B9B9B" }} />
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-lato)",
                            fontWeight: active ? 700 : 300,
                            fontSize: "10px",
                            color: active ? "#9B6B4D" : completed ? "#5F7A61" : "#9B9B9B",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B", marginTop: "24px" }}>
                  Estimated delivery: <strong>2–3 business days</strong>
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#9B6B4D",
                    textDecoration: "none",
                  }}
                >
                  View full tracking →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
