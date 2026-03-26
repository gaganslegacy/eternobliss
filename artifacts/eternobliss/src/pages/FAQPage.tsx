import { useState, useEffect, useRef } from "react";
import { ChevronRight, Search } from "lucide-react";
import { Link } from "wouter";

function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

type FAQ = { q: string; a: string; category: string };

const FAQS: FAQ[] = [
  { category: "Orders", q: "How do I track my order?", a: "Once your order ships you'll receive a tracking email with a link to follow your delivery in real time. You can also visit our Track Order page and enter your order number and email." },
  { category: "Orders", q: "Can I modify or cancel my order?", a: "Orders can be modified or cancelled within 1 hour of placing them. After that they enter fulfillment and cannot be changed. Email us immediately at support@eternobliss.com." },
  { category: "Orders", q: "I received the wrong item. What do I do?", a: "We're sorry about that. Email support@eternobliss.com with your order number and a photo of what you received. We'll ship the correct item immediately at no cost." },
  { category: "Orders", q: "My order arrived damaged.", a: "Please email us within 48 hours of delivery with your order number and photos of the damage. We'll arrange a replacement or full refund right away." },
  { category: "Orders", q: "Do you ship to Canada?", a: "Yes — we're based in Mississauga, Ontario and ship across Canada. Free shipping on orders over $100. Standard delivery is 1–3 business days." },
  { category: "Products", q: "Are your supplements third-party tested?", a: "Yes. Every batch is tested by an independent laboratory for purity, potency, and the absence of contaminants. Certificates of analysis are available on request." },
  { category: "Products", q: "Is the collagen powder truly unflavored?", a: "Completely tasteless and odorless. It dissolves fully in hot or cold liquids without any taste or texture. Safe to add to coffee, smoothies, water, or any beverage." },
  { category: "Products", q: "Is the Red Light Device FDA cleared?", a: "Yes — registered with the FDA as a Class II medical device. Clinical evidence of safety and efficacy was required for clearance. Documentation is available on request." },
  { category: "Products", q: "What compression level is EternoBliss compression wear?", a: "15–25mmHg graduated compression — the medical-grade moderate support range used clinically for DVT prevention and post-surgical recovery." },
  { category: "Products", q: "Can I use the red light device every day?", a: "Yes — daily use is safe and accelerates results. We recommend 3–5 sessions per week minimum, 10–20 minutes per session." },
  { category: "Subscriptions", q: "How does Subscribe & Save work?", a: "Choose any supplement, select 'Subscribe & Save' at checkout, and choose your delivery frequency (15, 30, 60, or 90 days). You save 15% on every order automatically." },
  { category: "Subscriptions", q: "Can I skip, pause, or cancel?", a: "Yes — anytime, no questions asked. Log into your account or email support@eternobliss.com to manage your subscription. No cancellation fees or penalties." },
  { category: "Subscriptions", q: "Can I change my delivery frequency?", a: "Yes — log into your account and update your subscription frequency at any time. Changes take effect on your next scheduled order." },
  { category: "Subscriptions", q: "Will I be notified before each charge?", a: "Yes — you'll receive an email 3 days before each scheduled charge so you can skip, delay, or cancel if needed." },
  { category: "Subscriptions", q: "Can I subscribe to multiple products?", a: "Absolutely. Each product has its own subscription you manage independently. All supplements are eligible for Subscribe & Save." },
  { category: "Returns", q: "What is your return policy?", a: "30-day money-back guarantee on all products — including opened and used items. If you're not satisfied for any reason, we'll refund you in full. No questions asked." },
  { category: "Returns", q: "How do I start a return?", a: "Email support@eternobliss.com with your order number and reason for return. We'll send a prepaid return label within 24 hours. Refunds are processed within 3–5 business days of receiving the item." },
  { category: "Returns", q: "Do I have to return subscription items?", a: "For subscription cancellations within 30 days of your first order, yes — we'll send a prepaid label. After 30 days you can simply cancel the subscription going forward with no return required." },
  { category: "Shipping", q: "How much does shipping cost?", a: "Free shipping on all orders over $100. Orders under $100 are $8.99 flat rate. All orders include tracking." },
  { category: "Shipping", q: "How long does delivery take?", a: "1–3 business days across Canada. Orders placed before 2pm EST ship same day Monday–Friday." },
  { category: "Shipping", q: "Do you ship internationally?", a: "Currently Canada only. We're working on US and international shipping. Sign up to our newsletter to be notified when it launches." },
];

const TABS = ["All", "Orders", "Products", "Subscriptions", "Returns", "Shipping"];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E5E3DF" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span style={{ fontFamily: "var(--font-lato)", fontWeight: 600, fontSize: "15px", color: "#0A0A0A" }}>
          {faq.q}
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
      <div style={{ overflow: "hidden", maxHeight: open ? "400px" : 0, transition: "max-height 300ms ease" }}>
        <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B", lineHeight: 1.8, paddingBottom: "20px" }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const heroFade = useScrollFade();
  const contentFade = useScrollFade();
  const bottomFade = useScrollFade();

  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FAQS.filter((faq) => {
    const matchesTab = activeTab === "All" || faq.category === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const grouped = TABS.filter((t) => t !== "All").reduce<Record<string, FAQ[]>>((acc, cat) => {
    const items = filtered.filter((f) => f.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

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
          <p className="eb-eyebrow" style={{ marginBottom: "16px" }}>SUPPORT</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", color: "#0A0A0A", marginBottom: "16px" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#6B6B6B", marginBottom: "32px" }}>
            Can't find what you're looking for? Email us at{" "}
            <a href="mailto:support@eternobliss.com" style={{ color: "#9B6B4D" }}>support@eternobliss.com</a>
          </p>

          <div style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}>
            <Search style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "18px", height: "18px", color: "#9B9B9B" }} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                height: "52px",
                border: "1px solid #E5E3DF",
                borderRadius: 0,
                backgroundColor: "white",
                fontFamily: "var(--font-lato)",
                fontWeight: 300,
                fontSize: "14px",
                paddingLeft: "48px",
                paddingRight: "16px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 1.5rem" }}>
        <div
          ref={contentFade.ref}
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            opacity: contentFade.visible ? 1 : 0,
            transform: contentFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          {/* TABS */}
          <div style={{ display: "flex", borderBottom: "1px solid #E5E3DF", marginBottom: "48px", overflowX: "auto" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: activeTab === tab ? 600 : 300,
                  fontSize: "13px",
                  color: activeTab === tab ? "#9B6B4D" : "#6B6B6B",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? "2px solid #9B6B4D" : "2px solid transparent",
                  padding: "12px 20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  marginBottom: "-1px",
                  transition: "color 200ms",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ITEMS */}
          {activeTab === "All" ? (
            Object.entries(grouped).map(([category, items]) => (
              <div key={category} style={{ marginBottom: "48px" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#9B6B4D",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "8px",
                  }}
                >
                  {category}
                </h2>
                {items.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
              </div>
            ))
          ) : (
            filtered.map((faq) => <FAQItem key={faq.q} faq={faq} />)
          )}

          {filtered.length === 0 && (
            <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#9B9B9B", textAlign: "center", padding: "40px 0" }}>
              No results found. Try a different search term or{" "}
              <a href="mailto:support@eternobliss.com" style={{ color: "#9B6B4D" }}>contact us</a>.
            </p>
          )}
        </div>
      </section>

      {/* STILL NEED HELP */}
      <section style={{ padding: "0 1.5rem 96px" }}>
        <div
          ref={bottomFade.ref}
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            backgroundColor: "#EFE9DF",
            borderRadius: "4px",
            padding: "48px",
            textAlign: "center",
            opacity: bottomFade.visible ? 1 : 0,
            transform: bottomFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "36px", color: "#0A0A0A", marginBottom: "12px" }}>
            Still Have Questions?
          </h2>
          <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#6B6B6B" }}>
            Our team replies within 2 hours on business days.
          </p>
          <Link href="/contact">
            <button
              type="button"
              style={{
                marginTop: "24px",
                border: "1px solid #9B6B4D",
                color: "#9B6B4D",
                backgroundColor: "transparent",
                fontFamily: "var(--font-lato)",
                fontWeight: 400,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                padding: "14px 32px",
                borderRadius: 0,
                cursor: "pointer",
                transition: "background-color 200ms, color 200ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9B6B4D"; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#9B6B4D"; }}
            >
              CONTACT US
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
