import { Link } from "wouter";

const QUICK_LINKS = [
  { label: "Supplements", href: "/collections/supplements" },
  { label: "Fitness Tech", href: "/collections/fitness-tech" },
  { label: "Compression", href: "/collections/compression" },
  { label: "Contact", href: "/contact" },
];

export default function NotFoundPage() {
  return (
    <div
      style={{
        backgroundColor: "#FAFAF8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-cormorant)",
          fontWeight: 300,
          fontSize: "200px",
          color: "#F0EBE3",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        404
      </span>
      <div style={{ position: "relative", marginTop: "-80px" }}>
        <p className="eb-eyebrow" style={{ marginBottom: "16px" }}>PAGE NOT FOUND</p>
        <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "48px", color: "#0A0A0A", marginBottom: "16px" }}>
          Lost in the Ritual
        </h1>
        <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#6B6B6B", maxWidth: "400px", margin: "0 auto", lineHeight: 1.8 }}>
          The page you're looking for has moved or doesn't exist. Let's get you back on track.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px" }}>
          <Link href="/">
            <button type="button" className="eb-btn eb-btn-primary">GO HOME</button>
          </Link>
          <Link href="/collections/all">
            <button type="button" className="eb-btn eb-btn-secondary">SHOP ALL</button>
          </Link>
        </div>

        <div style={{ marginTop: "40px" }}>
          <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px", color: "#9B9B9B", marginBottom: "12px" }}>
            Popular pages:
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            {QUICK_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                <span
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#9B6B4D",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
