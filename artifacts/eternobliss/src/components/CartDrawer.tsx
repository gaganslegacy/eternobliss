import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    cartItems,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
    goToCheckout,
    isLoading,
  } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-linen z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-eb-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-cognac" />
            <span
              className="font-medium text-jet"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Your Bag ({cartCount})
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-1.5 text-pewter hover:text-jet transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-eb-border mb-4" />
              <h3
                className="text-xl text-jet mb-2"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Your bag is empty
              </h3>
              <p className="text-sm text-pewter mb-6" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                Discover our luxury wellness collection
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="eb-btn eb-btn-primary"
              >
                <Link href="/collections/all" onClick={closeCart}>SHOP NOW</Link>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.lineId}
                  className="flex gap-4 py-4 border-b border-eb-border last:border-0"
                >
                  <div className="w-20 h-20 bg-champagne flex-shrink-0 overflow-hidden">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.productTitle}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-champagne" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-sm text-jet font-medium mb-0.5 truncate"
                      style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                    >
                      {item.productTitle}
                    </h4>
                    {item.variantTitle !== "Default Title" && (
                      <p
                        className="text-xs text-pewter mb-2"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                      >
                        {item.variantTitle}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-eb-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          disabled={isLoading}
                          className="w-7 h-7 flex items-center justify-center text-pewter hover:text-jet transition-colors disabled:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span
                          className="w-7 h-7 flex items-center justify-center text-sm text-jet border-x border-eb-border"
                          style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          disabled={isLoading}
                          className="w-7 h-7 flex items-center justify-center text-pewter hover:text-jet transition-colors disabled:opacity-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p
                        className="text-sm font-medium text-jet"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.lineId)}
                    disabled={isLoading}
                    className="flex-shrink-0 text-pewter hover:text-red-500 transition-colors disabled:opacity-50"
                    aria-label="Remove item"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-eb-border bg-white">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                Subtotal
              </p>
              <p
                className="text-lg font-medium text-jet"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                ${cartTotal.toFixed(2)} CAD
              </p>
            </div>
            <p className="text-xs text-pewter mb-4" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Shipping and taxes calculated at checkout
            </p>
            <button
              type="button"
              onClick={goToCheckout}
              disabled={isLoading}
              className="w-full eb-btn eb-btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "LOADING..." : "PROCEED TO CHECKOUT"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
