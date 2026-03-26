import { useState } from "react";
import { Link } from "wouter";
import { Truck, Lock, ShieldCheck, RefreshCw, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const SUPP_IMAGES: Record<string, string> = {
  "collagen-powder": "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=200&auto=format&fit=crop",
  "creatine-gummies": "https://images.unsplash.com/photo-1585394838622-3121dd282885?w=200&auto=format&fit=crop",
  "magnesium-gummies": "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=200&auto=format&fit=crop",
  "electrolyte-sticks": "https://images.unsplash.com/photo-1596803244536-97618c2e1edd?w=200&auto=format&fit=crop",
  "vitamin-d3-k2": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&auto=format&fit=crop",
  "red-light-therapy-device": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&auto=format&fit=crop",
  "fitness-ring": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=200&auto=format&fit=crop",
  "compression-leggings": "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=200&auto=format&fit=crop",
  "compression-face-mask": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&auto=format&fit=crop",
  "knee-sleeves": "https://images.unsplash.com/photo-1506629082632-11c0b11fbc0d?w=200&auto=format&fit=crop",
  "upper-body-compression": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&auto=format&fit=crop",
};

const FBT_PRODUCTS = [
  { handle: "collagen-powder", name: "Collagen Powder", price: "$59.99", type: "supplement", image: SUPP_IMAGES["collagen-powder"] },
  { handle: "creatine-gummies", name: "Creatine Gummies", price: "$39.99", type: "supplement", image: SUPP_IMAGES["creatine-gummies"] },
  { handle: "magnesium-gummies", name: "Magnesium Gummies", price: "$34.99", type: "supplement", image: SUPP_IMAGES["magnesium-gummies"] },
  { handle: "red-light-therapy-device", name: "Red Light Device", price: "$299.99", type: "fitness-tech", image: SUPP_IMAGES["red-light-therapy-device"] },
  { handle: "fitness-ring", name: "Fitness Ring", price: "$199.99", type: "fitness-tech", image: SUPP_IMAGES["fitness-ring"] },
];

const inputStyle: React.CSSProperties = {
  height: "44px",
  border: "1px solid #E5E3DF",
  borderRadius: 0,
  backgroundColor: "#FAFAF8",
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
  fontSize: "14px",
  padding: "0 16px",
  outline: "none",
  width: "100%",
};

function getItemProductHandle(item: { merchandiseId?: string; handle?: string; productTitle?: string }): string {
  if (item.handle) return item.handle;
  const t = item.productTitle?.toLowerCase().replace(/\s+/g, "-") || "";
  return t;
}

function getItemImage(handle: string, fallback?: string): string {
  return SUPP_IMAGES[handle] || fallback || "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=200&auto=format&fit=crop";
}

export default function CartPage() {
  const { cartItems, cartTotal, cartCount, removeFromCart, updateQuantity, goToCheckout } = useCart();

  const [discountCode, setDiscountCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const FREE_SHIPPING_THRESHOLD = 100;
  const SHIPPING_COST = 8.99;
  const freeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const shippingProgress = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal).toFixed(2);
  const total = freeShipping ? cartTotal : cartTotal + SHIPPING_COST;

  const handleApplyCode = () => {
    if (discountCode.trim()) {
      setAppliedCode(discountCode.trim().toUpperCase());
      setDiscountApplied(true);
      setDiscountCode("");
    }
  };

  const handleQtyChange = async (lineId: string, newQty: number) => {
    setUpdatingId(lineId);
    if (newQty < 1) {
      await removeFromCart(lineId);
    } else {
      await updateQuantity(lineId, newQty);
    }
    setUpdatingId(null);
  };

  const cartHandles = cartItems.map((item) => getItemProductHandle(item as any));
  const hasSupplements = cartHandles.some((h) => ["collagen-powder", "creatine-gummies", "magnesium-gummies", "electrolyte-sticks", "vitamin-d3-k2"].includes(h));
  const hasFitnessTech = cartHandles.some((h) => ["red-light-therapy-device", "fitness-ring"].includes(h));

  const fbtProducts = FBT_PRODUCTS.filter((p) => {
    if (cartHandles.includes(p.handle)) return false;
    if (hasSupplements && p.type === "fitness-tech") return true;
    if (hasFitnessTech && p.type === "supplement") return true;
    if (!hasSupplements && !hasFitnessTech && p.type === "supplement") return true;
    return false;
  }).slice(0, 3);

  if (cartItems.length === 0) {
    return (
      <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 80px", textAlign: "center" }}>
          <div style={{ position: "relative", paddingTop: "80px" }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant)",
                fontSize: "200px",
                color: "#F0EBE3",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              0
            </span>
            <div style={{ position: "relative", marginTop: "-80px" }}>
              <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "48px", color: "#0A0A0A" }}>
                Your Cart is Empty
              </h1>
              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#6B6B6B", maxWidth: "380px", margin: "16px auto 0", lineHeight: 1.7 }}>
                Looks like you haven't added anything yet. Explore our collection.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px" }}>
                <Link href="/collections/supplements">
                  <button type="button" className="eb-btn eb-btn-primary">SHOP SUPPLEMENTS</button>
                </Link>
                <Link href="/collections/all">
                  <button type="button" className="eb-btn eb-btn-secondary">SHOP ALL</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 40px 0" }}>
        {/* PAGE HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: "28px",
            borderBottom: "1px solid #E5E3DF",
            marginBottom: "32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "48px", color: "#0A0A0A", margin: 0 }}>
              Your Cart
            </h1>
            <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "16px", color: "#9B9B9B", fontStyle: "italic" }}>
              {cartCount} item{cartCount !== 1 ? "s" : ""}
            </span>
          </div>
          <Link href="/collections/all">
            <span
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 400,
                fontSize: "12px",
                color: "#9B6B4D",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                cursor: "pointer",
                textDecoration: "none",
                transition: "letter-spacing 300ms ease",
              }}
            >
              Continue Shopping →
            </span>
          </Link>
        </div>

        {/* FREE SHIPPING BAR */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E3DF",
            borderRadius: "4px",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <Truck style={{ width: "20px", height: "20px", color: freeShipping ? "#9B6B4D" : "#9B9B9B", flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            {freeShipping ? (
              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "14px", color: "#5F7A61", marginBottom: "8px" }}>
                🎉 You've unlocked free shipping!
              </p>
            ) : (
              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#0A0A0A", marginBottom: "8px" }}>
                Add <strong style={{ color: "#9B6B4D", fontWeight: 700 }}>${remaining}</strong> more to unlock free shipping
              </p>
            )}
            <div style={{ height: "4px", backgroundColor: "#E5E3DF", borderRadius: "2px", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${shippingProgress}%`,
                  backgroundColor: freeShipping ? "#5F7A61" : "#9B6B4D",
                  transition: "width 500ms ease",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div style={{ display: "grid", gridTemplateColumns: "60fr 40fr", gap: "48px", alignItems: "start" }}>
          {/* LEFT — CART ITEMS */}
          <div>
            {cartItems.map((item) => {
              const handle = getItemProductHandle(item as any);
              const imgUrl = getItemImage(handle, (item as any).image?.url);
              const linePrice = parseFloat((item as any).price?.amount || "0") * item.quantity;

              return (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr auto",
                    gap: "24px",
                    alignItems: "start",
                    padding: "28px 0",
                    borderBottom: "1px solid #F0EBE3",
                    opacity: updatingId === item.id ? 0.5 : 1,
                    transition: "opacity 200ms",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "#F0EBE3",
                      borderRadius: "2px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img src={imgUrl} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                  <div>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "10px", color: "#9B9B9B", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px" }}>
                      EternoBliss
                    </p>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "16px", color: "#0A0A0A", marginBottom: "4px" }}>
                      {item.title}
                    </p>
                    {item.variantTitle && item.variantTitle !== "Default Title" && (
                      <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px", color: "#9B9B9B", marginBottom: "8px" }}>
                        {item.variantTitle}
                      </p>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: "12px" }}>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(item.id, item.quantity - 1)}
                        disabled={updatingId !== null}
                        style={{
                          width: "36px",
                          height: "36px",
                          border: "1px solid #E5E3DF",
                          borderRadius: 0,
                          backgroundColor: "transparent",
                          color: "#9B6B4D",
                          cursor: "pointer",
                          fontSize: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "border-color 200ms",
                        }}
                      >
                        −
                      </button>
                      <div
                        style={{
                          width: "48px",
                          height: "36px",
                          borderTop: "1px solid #E5E3DF",
                          borderBottom: "1px solid #E5E3DF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-lato)",
                          fontWeight: 400,
                          fontSize: "14px",
                          color: "#0A0A0A",
                        }}
                      >
                        {item.quantity}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(item.id, item.quantity + 1)}
                        disabled={updatingId !== null}
                        style={{
                          width: "36px",
                          height: "36px",
                          border: "1px solid #E5E3DF",
                          borderRadius: 0,
                          backgroundColor: "transparent",
                          color: "#9B6B4D",
                          cursor: "pointer",
                          fontSize: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "border-color 200ms",
                        }}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          marginLeft: "16px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "var(--font-lato)",
                          fontWeight: 300,
                          fontSize: "12px",
                          color: "#C0B8B0",
                          padding: 0,
                          transition: "color 200ms",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "18px", color: "#0A0A0A" }}>
                      ${linePrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* SUBSCRIPTION UPSELL */}
            {hasSupplements && (
              <div
                style={{
                  backgroundColor: "rgba(155,107,77,0.06)",
                  border: "1px solid rgba(155,107,77,0.2)",
                  borderRadius: "4px",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "24px 0",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <RefreshCw style={{ width: "24px", height: "24px", color: "#9B6B4D", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "14px", color: "#0A0A0A", marginBottom: "4px" }}>
                      Switch to Subscribe &amp; Save
                    </p>
                    <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px", color: "#6B6B6B" }}>
                      Get 15% off every order · Free shipping · Cancel anytime
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  style={{
                    border: "1px solid #9B6B4D",
                    color: "#9B6B4D",
                    backgroundColor: "transparent",
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "10px 20px",
                    borderRadius: 0,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "background-color 200ms, color 200ms",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9B6B4D"; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#9B6B4D"; }}
                >
                  SWITCH &amp; SAVE 15%
                </button>
              </div>
            )}

            {/* FREQUENTLY BOUGHT TOGETHER */}
            {fbtProducts.length > 0 && (
              <div style={{ marginTop: "40px" }}>
                <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", color: "#9B9B9B", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "20px" }}>
                  Complete Your Order
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                  {fbtProducts.map((p) => (
                    <div
                      key={p.handle}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E5E3DF",
                        borderRadius: "2px",
                        padding: "16px",
                        display: "flex",
                        gap: "14px",
                        alignItems: "center",
                        transition: "border-color 200ms",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#9B6B4D")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#E5E3DF")}
                    >
                      <div style={{ width: "60px", height: "60px", backgroundColor: "#F0EBE3", overflow: "hidden", flexShrink: 0 }}>
                        <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "13px", color: "#0A0A0A", marginBottom: "2px" }}>{p.name}</p>
                        <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px", color: "#9B9B9B", marginBottom: "8px" }}>{p.price}</p>
                        <Link href={`/products/${p.handle}`}>
                          <button
                            type="button"
                            style={{
                              border: "1px solid #9B6B4D",
                              color: "#9B6B4D",
                              backgroundColor: "transparent",
                              fontFamily: "var(--font-lato)",
                              fontWeight: 700,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              padding: "5px 0",
                              borderRadius: 0,
                              cursor: "pointer",
                              width: "100%",
                            }}
                          >
                            + Add
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div style={{ position: "sticky", top: "108px" }}>
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3DF", borderRadius: "4px", padding: "32px" }}>
              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #E5E3DF" }}>
                Order Summary
              </p>

              <div style={{ marginBottom: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B" }}>
                  Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})
                </span>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "16px", color: "#0A0A0A" }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <div style={{ marginBottom: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B" }}>Shipping</span>
                {freeShipping ? (
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "14px", color: "#5F7A61" }}>FREE</span>
                ) : (
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "16px", color: "#0A0A0A" }}>${SHIPPING_COST.toFixed(2)}</span>
                )}
              </div>

              <div style={{ marginBottom: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "14px", color: "#6B6B6B" }}>Taxes</span>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontStyle: "italic", fontSize: "13px", color: "#9B9B9B" }}>Calculated at checkout</span>
              </div>

              <div style={{ borderTop: "1px solid #E5E3DF", margin: "20px 0" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "24px" }}>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "16px", color: "#0A0A0A" }}>Total</span>
                <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "28px", color: "#0A0A0A" }}>${total.toFixed(2)}</span>
              </div>

              {/* DISCOUNT CODE */}
              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", color: "#0A0A0A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
                Discount Code
              </p>
              {discountApplied ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", padding: "10px 14px", border: "1px solid #E5E3DF" }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "14px", color: "#0A0A0A" }}>{appliedCode}</span>
                    <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "13px", color: "#5F7A61", marginLeft: "8px" }}>15% off applied ✓</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setDiscountApplied(false); setAppliedCode(""); }}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#C0B8B0", fontSize: "16px" }}
                  >
                    <X style={{ width: "14px", height: "14px" }} />
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", gap: 0, marginBottom: "16px" }}>
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Enter code"
                    style={{ ...inputStyle, fontStyle: "italic" }}
                    onKeyDown={(e) => e.key === "Enter" && handleApplyCode()}
                  />
                  <button
                    type="button"
                    onClick={handleApplyCode}
                    style={{
                      height: "44px",
                      padding: "0 16px",
                      border: "1px solid #9B6B4D",
                      borderLeft: "none",
                      color: "#9B6B4D",
                      backgroundColor: "transparent",
                      fontFamily: "var(--font-lato)",
                      fontWeight: 400,
                      fontSize: "11px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "background-color 200ms, color 200ms",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9B6B4D"; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#9B6B4D"; }}
                  >
                    APPLY
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={goToCheckout}
                style={{
                  width: "100%",
                  height: "56px",
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
                  marginTop: "8px",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#8A5D40")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9B6B4D")}
              >
                CHECKOUT — ${total.toFixed(2)}
              </button>

              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Lock style={{ width: "12px", height: "12px", color: "#9B9B9B" }} />
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "11px", color: "#9B9B9B", textTransform: "uppercase", letterSpacing: "0.05em" }}>Secure Checkout</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShieldCheck style={{ width: "12px", height: "12px", color: "#9B9B9B" }} />
                  <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "11px", color: "#9B9B9B", textTransform: "uppercase", letterSpacing: "0.05em" }}>SSL Encrypted</span>
                </div>
              </div>

              <p style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontStyle: "italic", fontSize: "12px", color: "#9B9B9B", textAlign: "center", marginTop: "16px" }}>
                30-day money-back guarantee. Free returns. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY CHECKOUT */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "72px",
          backgroundColor: "white",
          borderTop: "1px solid #E5E3DF",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 50,
        }}
        className="md:hidden"
      >
        <div>
          <span style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: "12px", color: "#6B6B6B" }}>Total: </span>
          <span style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "18px", color: "#0A0A0A" }}>${total.toFixed(2)}</span>
        </div>
        <button
          type="button"
          onClick={goToCheckout}
          style={{
            backgroundColor: "#9B6B4D",
            color: "white",
            border: "none",
            height: "44px",
            padding: "0 24px",
            fontFamily: "var(--font-lato)",
            fontWeight: 400,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            cursor: "pointer",
            borderRadius: 0,
          }}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
