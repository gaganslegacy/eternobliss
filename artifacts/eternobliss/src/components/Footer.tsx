import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";

const footerLinks = {
  shop: {
    title: "SHOP",
    links: [
      { name: "Supplements", href: "/collections/supplements" },
      { name: "Fitness Tech", href: "/collections/fitness-tech" },
      { name: "Compression Wear", href: "/collections/compression-wear" },
      { name: "Shop All", href: "/collections/all" },
      { name: "Bestsellers", href: "/collections/bestsellers" },
      { name: "Subscribe & Save", href: "#" },
      { name: "Bundle", href: "#" },
    ],
  },
  collections: {
    title: "COLLECTIONS",
    links: [
      { name: "New Arrivals", href: "#" },
      { name: "Wellness Guides", href: "#" },
      { name: "Gift Sets", href: "#" },
      { name: "Refer a Friend", href: "#" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { name: "Track Order", href: "/track-order" },
      { name: "Contact", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Returns", href: "/refund-policy" },
      { name: "Customer Care", href: "/contact" },
    ],
  },
  company: {
    title: "COMPANY",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Newsroom", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  legal: {
    title: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Shipping Policy", href: "/shipping-policy" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-jet text-warmwhite">
      <div className="dreame-container px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-eb-border pb-8 mb-8">
          <div>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "28px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "white",
                display: "block",
              }}
            >
              Eterno Bliss
            </span>
            <p className="text-sm text-warmwhite/70 mt-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Luxury wellness essentials that transform your daily ritual.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Join the Ritual"
              className="px-4 py-2 bg-charcoal border border-eb-border text-white text-sm focus:outline-none focus:ring-1 focus:ring-cognac flex-1 md:flex-initial w-full md:w-48"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
            />
            <button
              type="button"
              className="px-4 py-2 bg-cognac text-white text-sm font-medium hover:bg-cognac-dark transition-colors"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Join
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-warmwhite/70 hover:text-cognac transition-colors"
                      style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-eb-border pt-8 mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="#" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-cognac transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-cognac transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-cognac transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center hover:bg-cognac transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-sm text-warmwhite/70" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
            <p className="mb-1">
              Customer Care: +1 (866) 555-0123
              <br />
              (Mon-Fri: 9am-6pm EST)
            </p>
            <p>support@eternobliss.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-eb-border pt-8">
          <p className="text-sm text-warmwhite/70 mb-4 md:mb-0" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
            © 2025 EternoBliss. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 flex-wrap gap-y-2">
            <Link href="/privacy-policy" className="text-sm text-warmwhite/70 hover:text-white transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Privacy Policy
            </Link>
            <span className="text-warmwhite/40">|</span>
            <Link href="/terms-of-service" className="text-sm text-warmwhite/70 hover:text-white transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Terms of Service
            </Link>
            <span className="text-warmwhite/40">|</span>
            <Link href="/refund-policy" className="text-sm text-warmwhite/70 hover:text-white transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Refund Policy
            </Link>
            <span className="text-warmwhite/40">|</span>
            <Link href="/shipping-policy" className="text-sm text-warmwhite/70 hover:text-white transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
