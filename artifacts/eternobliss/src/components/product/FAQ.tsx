import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

type ProductType = "supplement" | "fitness-tech" | "compression";

const FAQS: Record<ProductType, Array<{ q: string; a: string }>> = {
  supplement: [
    {
      q: "When should I take collagen?",
      a: "Consistency matters more than timing. Most customers take it in the morning with coffee or water. Post-workout is also effective for joint and muscle support. Just take it daily.",
    },
    {
      q: "How long until I see results?",
      a: "Most customers notice improved skin texture and hydration at 4–6 weeks. Hair and nail improvements typically appear at 8–10 weeks. Joint support is often felt within 2–4 weeks.",
    },
    {
      q: "Is it truly unflavored?",
      a: "Yes — completely tasteless and odorless. It dissolves fully in hot or cold liquids. You will not taste it in your coffee, smoothie, or water.",
    },
    {
      q: "Can I take it with other supplements?",
      a: "Absolutely. Collagen stacks well with Vitamin C (enhances synthesis), Biotin, and Hyaluronic Acid. All of which are included in our formula already.",
    },
    {
      q: "What is the return policy?",
      a: "30-day money-back guarantee. If you are not satisfied for any reason email support@eternobliss.com for a full refund. No questions asked.",
    },
  ],
  "fitness-tech": [
    {
      q: "Is this safe for all skin types?",
      a: "Yes. Red light is non-ablative, produces no UV radiation, and generates minimal heat. Safe for all skin types and tones. The only contraindication is photosensitizing medications.",
    },
    {
      q: "How soon will I see results?",
      a: "Most notice improved texture and reduced redness within 2–4 weeks. Significant collagen improvement is typically visible at 8–12 weeks. Results are cumulative.",
    },
    {
      q: "How often should I use it?",
      a: "3–5 sessions per week, 10–20 minutes per session. Daily use is safe and accelerates results. Consistency matters more than session length.",
    },
    {
      q: "What does the 2-year warranty cover?",
      a: "Manufacturing defects, component failures, and performance degradation. Does not cover physical damage. Contact support@eternobliss.com to initiate.",
    },
    {
      q: "Can I return it if I've used it?",
      a: "Yes — 30-day returns on all items including used devices. We want you to properly try it before deciding.",
    },
  ],
  compression: [
    {
      q: "What compression level is this?",
      a: "15–25mmHg graduated compression — the medical-grade moderate support range. Strongest at the extremity, decreasing upward. Used clinically for DVT prevention and post-surgical recovery.",
    },
    {
      q: "How do I find my size?",
      a: "Use the size guide on the page. Measure waist and hips, match to the chart. If between sizes, always size up. Compression should feel snug — never painful or restrictive.",
    },
    {
      q: "How do I wash them?",
      a: "Machine wash cold, gentle cycle, inside out. Lay flat to dry — never tumble dry. Heat degrades compression fibers. Avoid bleach and fabric softener.",
    },
    {
      q: "How long does compression last?",
      a: "With proper care, compression integrity lasts 6–12 months of regular wear. Replace every 6 months if worn daily for medical purposes.",
    },
    {
      q: "Can I wear these during exercise?",
      a: "Absolutely. Four-way stretch is designed for full range of motion during running, cycling, weightlifting, and yoga. Compression stays consistent through every movement.",
    },
  ],
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E5E3DF" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 600,
            fontSize: "15px",
            color: "#0A0A0A",
          }}
        >
          {q}
        </span>
        <ChevronRight
          style={{
            flexShrink: 0,
            width: "16px",
            height: "16px",
            color: "#9B6B4D",
            transform: open ? "rotate(90deg)" : "rotate(0)",
            transition: "transform 250ms ease",
          }}
        />
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "400px" : "0",
          transition: "max-height 300ms ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 300,
            fontSize: "14px",
            color: "#6B6B6B",
            lineHeight: 1.8,
            paddingBottom: "20px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ productType }: { productType: ProductType }) {
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

  const faqs = FAQS[productType];

  return (
    <section style={{ backgroundColor: "#FAFAF8", padding: "96px 1.5rem" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="eb-eyebrow" style={{ marginBottom: "12px" }}>FAQ</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0A0A0A",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
