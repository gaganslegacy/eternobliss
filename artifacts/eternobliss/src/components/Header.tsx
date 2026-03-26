import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const navigation = [
  {
    name: "SHOP",
    href: "#",
    submenu: {
      columns: [
        {
          heading: "SKINCARE ESSENTIALS",
          items: [
            { name: "Vitamin C Serum", href: "/products/vitamin-c-serum-20-l-ascorbic-acid" },
            { name: "Retinol Night Cream", href: "/products/retinol-night-cream-anti-aging-formula" },
            { name: "Hair Growth Serum", href: "/products/hair-growth-serum-clinical-peptide-complex" },
          ],
        },
        {
          heading: "WELLNESS SUPPLEMENTS",
          items: [
            { name: "Collagen Powder", href: "/products/collagen-powder-unflavored-marine-collagen" },
          ],
        },
        {
          heading: "AROMATHERAPY & SLEEP",
          items: [
            { name: "Sleep Enhancement Spray", href: "/products/sleep-enhancement-spray-melatonin-lavender" },
          ],
        },
      ],
      footer: [
        { name: "SHOP ALL", href: "/collections/all" },
        { name: "BESTSELLERS", href: "/collections/bestsellers" },
        { name: "NEW ARRIVALS", href: "/collections/new-arrivals" },
        { name: "SUBSCRIBE & SAVE", href: "#" },
      ],
    },
  },
  { name: "COLLECTIONS", href: "/collections/all" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const announcements = [
  "Free Shipping on Orders $100+",
  "Subscribe & Save 15% on Every Order",
  "Where Health Meets Beauty",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-linen border-b border-eb-border">
      <div className="bg-jet text-warmwhite text-center py-2">
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          {announcements[announcementIndex]}
        </p>
      </div>

      <div className="dreame-container">
        <nav className="flex items-center justify-between h-16 px-4 lg:px-8">
          <Link href="/" className="flex-shrink-0">
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "22px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#0A0A0A",
              }}
            >
              ETERNO BLISS
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <button
                type="button"
                className="py-4 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: shopMenuOpen ? "#9B6B4D" : "#0A0A0A",
                }}
              >
                SHOP
              </button>

              {shopMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-linen border border-eb-border shadow-xl animate-fadeIn">
                  <div className="grid grid-cols-3 gap-0 p-8">
                    {navigation[0].submenu?.columns.map((col) => (
                      <div key={col.heading}>
                        <p
                          className="eb-eyebrow mb-4"
                          style={{ color: "#9B6B4D" }}
                        >
                          {col.heading}
                        </p>
                        <ul className="space-y-2.5">
                          {col.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block text-sm text-pewter hover:text-cognac transition-colors duration-200"
                                style={{
                                  fontFamily: "var(--font-lato)",
                                  fontWeight: 300,
                                }}
                                onClick={() => setShopMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-eb-border px-8 py-4 flex gap-6">
                    {navigation[0].submenu?.footer.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="eb-eyebrow hover:opacity-70 transition-opacity"
                        onClick={() => setShopMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-4 transition-colors duration-200 hover:text-cognac"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#0A0A0A",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-2 text-charcoal hover:text-cognac transition-colors"
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              className="p-2 text-charcoal hover:text-cognac transition-colors"
              aria-label="Account"
            >
              <User className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              className="p-2 text-charcoal hover:text-cognac transition-colors relative"
              aria-label="Cart"
              onClick={openCart}
            >
              <ShoppingCart className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-cognac text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-linen border-t border-eb-border animate-fadeIn">
          <div className="px-6 py-6 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 border-b border-eb-border hover:text-cognac transition-colors"
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#0A0A0A",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
