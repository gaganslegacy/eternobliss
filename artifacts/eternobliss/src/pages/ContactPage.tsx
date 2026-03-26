import { useState, useEffect, useRef } from "react";
import { Mail, MessageCircle, Truck, CheckCircle } from "lucide-react";

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

const CONTACT_CARDS = [
  {
    Icon: Mail,
    title: "Email Us",
    body: "For general inquiries, orders, and product questions. We reply within 2 hours.",
    cta: "support@eternobliss.com",
    href: "mailto:support@eternobliss.com",
  },
  {
    Icon: MessageCircle,
    title: "Live Chat",
    body: "Chat with our wellness team in real time. Available Monday–Friday 9am–6pm EST.",
    cta: "START A CHAT",
    href: "#",
  },
  {
    Icon: Truck,
    title: "Track Your Order",
    body: "Have an order number? Track your delivery status in real time.",
    cta: "TRACK ORDER",
    href: "/track-order",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "9am – 6pm EST" },
  { day: "Saturday", time: "10am – 4pm EST" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  const heroFade = useScrollFade();
  const cardsFade = useScrollFade();
  const formFade = useScrollFade();

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ backgroundColor: "#EFE9DF", padding: "96px 80px", textAlign: "center" }}>
        <div
          ref={heroFade.ref}
          style={{
            opacity: heroFade.visible ? 1 : 0,
            transform: heroFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <p className="eb-eyebrow" style={{ marginBottom: "16px" }}>GET IN TOUCH</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "64px", color: "#0A0A0A", marginBottom: "16px" }}>
            We're Here to Help
          </h1>
          <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "18px", color: "#6B6B6B", maxWidth: "480px", margin: "0 auto" }}>
            Our wellness team replies within 2 hours on business days.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 1.5rem" }}>
        <div
          ref={cardsFade.ref}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            opacity: cardsFade.visible ? 1 : 0,
            transform: cardsFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          {CONTACT_CARDS.map(({ Icon, title, body, cta, href }) => (
            <a
              key={title}
              href={href}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "#FAFAF8",
                  border: "1px solid #E5E3DF",
                  borderRadius: "4px",
                  padding: "40px 32px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "border-color 300ms, transform 300ms",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#9B6B4D";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#E5E3DF";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Icon style={{ width: "32px", height: "32px", color: "#9B6B4D", marginBottom: "20px" }} />
                <p style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "16px", color: "#0A0A0A", marginBottom: "8px" }}>
                  {title}
                </p>
                <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B", lineHeight: 1.75, marginBottom: "20px" }}>
                  {body}
                </p>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "12px", color: "#9B6B4D", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ backgroundColor: "#FAFAF8", padding: "96px 1.5rem" }}>
        <div
          ref={formFade.ref}
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "40fr 60fr",
            gap: "80px",
            alignItems: "start",
            opacity: formFade.visible ? 1 : 0,
            transform: formFade.visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          {/* LEFT */}
          <div>
            <p className="eb-eyebrow" style={{ marginBottom: "12px" }}>SEND A MESSAGE</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "40px", color: "#0A0A0A", marginBottom: "16px" }}>
              We'd Love to Hear From You
            </h2>
            <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#6B6B6B", lineHeight: 1.8 }}>
              Whether it's a question about a product, your order, or just wanting to know more about our wellness philosophy — we're here.
            </p>

            <div style={{ marginTop: "32px" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "12px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                Business Hours
              </p>
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #E5E3DF",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B" }}>{h.day}</span>
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B" }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3DF", borderRadius: "4px", padding: "40px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle style={{ width: "48px", height: "48px", color: "#5F7A61", margin: "0 auto 16px" }} />
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "36px", color: "#0A0A0A", marginBottom: "12px" }}>
                  Message Sent!
                </h3>
                <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#6B6B6B" }}>
                  We'll get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Question</option>
                    <option value="product">Product Information</option>
                    <option value="returns">Returns &amp; Refunds</option>
                    <option value="subscription">Subscription Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    style={{
                      ...inputStyle,
                      height: "140px",
                      resize: "none",
                      padding: "14px 16px",
                      lineHeight: 1.6,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    height: "52px",
                    backgroundColor: "#9B6B4D",
                    color: "white",
                    border: "none",
                    borderRadius: 0,
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    cursor: "pointer",
                    transition: "background-color 250ms",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#8A5D40")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9B6B4D")}
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
