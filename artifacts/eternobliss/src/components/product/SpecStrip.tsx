type ProductType = "supplement" | "fitness-tech" | "compression";

const SPECS: Record<ProductType, Array<{ value: string; label: string }>> = {
  supplement: [
    { value: "10g", label: "Collagen Per Serving" },
    { value: "30", label: "Daily Servings" },
    { value: "Types I & III", label: "Collagen Type" },
    { value: "Unflavored", label: "Mixes in Anything" },
    { value: "15%", label: "Subscribe & Save" },
  ],
  "fitness-tech": [
    { value: "630nm + 850nm", label: "Dual Wavelength" },
    { value: "21×15cm", label: "Treatment Area" },
    { value: "10–20 min", label: "Daily Protocol" },
    { value: "Class II", label: "FDA Cleared" },
    { value: "2 Years", label: "Warranty" },
  ],
  compression: [
    { value: "15–25mmHg", label: "Medical Grade" },
    { value: "4-Way Stretch", label: "Full Range" },
    { value: "82% Nylon", label: "Premium Fabric" },
    { value: "6–12mo", label: "Compression Life" },
    { value: "Machine", label: "Washable" },
  ],
};

export default function SpecStrip({ productType }: { productType: ProductType }) {
  const specs = SPECS[productType];
  return (
    <div
      style={{
        backgroundColor: "#EFE9DF",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        gap: "48px",
        overflowX: "auto",
      }}
    >
      {specs.map((spec, i) => (
        <div key={spec.label} style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "28px",
                color: "#9B6B4D",
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              {spec.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 300,
                fontSize: "11px",
                color: "#6B6B6B",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                whiteSpace: "nowrap",
              }}
            >
              {spec.label}
            </span>
          </div>
          {i < specs.length - 1 && (
            <div
              style={{
                width: "1px",
                height: "32px",
                backgroundColor: "#E5E3DF",
                flexShrink: 0,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
