import { Link } from "wouter";

const techProducts = [
  {
    id: 1,
    name: "Red Light Therapy Device",
    handle: "red-light-therapy-device",
    subtitle: "X50 Ultra Series",
    description: "FDA Cleared. Clinically proven to reduce inflammation, boost collagen, and accelerate recovery. Dual wavelength 630nm + 850nm.",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop",
    badge: "FDA Cleared",
    features: ["Dual 630nm + 850nm wavelengths", "20-minute sessions", "For full body use", "100,000 hour lifespan"],
  },
  {
    id: 2,
    name: "EternoBliss Fitness Ring",
    handle: "fitness-ring",
    subtitle: "Advanced Health Monitor",
    description: "Track your health with precision. Continuous heart rate, SpO2, sleep analysis, and readiness score — all from an elegant titanium ring.",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop",
    badge: "New Release",
    features: ["Continuous heart rate monitoring", "Sleep quality analysis", "SpO2 + stress tracking", "7-day battery life"],
  },
];

export default function TechShowcase() {
  return (
    <section className="dreame-section bg-jet text-warmwhite overflow-hidden">
      <div className="dreame-container">
        <div className="text-center mb-12">
          <p className="eb-eyebrow text-warmwhite/60 mb-3">FITNESS TECHNOLOGY</p>
          <h2
            className="text-3xl md:text-4xl text-warmwhite max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            Performance, Engineered
          </h2>
        </div>

        <div className="space-y-12">
          {techProducts.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
              }`}
            >
              <div className="aspect-square overflow-hidden bg-[#1C1C1C] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                {product.badge && (
                  <span
                    className="inline-block px-3 py-1 text-xs font-medium bg-cognac text-white mb-4"
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}
                  >
                    {product.badge}
                  </span>
                )}
                <p className="text-warmwhite/60 text-sm mb-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {product.subtitle}
                </p>
                <h3
                  className="text-2xl md:text-3xl text-warmwhite mb-3"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {product.name}
                </h3>
                <p className="text-warmwhite/70 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {product.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-warmwhite/80"
                      style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cognac flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl text-warmwhite" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                    ${product.price.toFixed(2)} CAD
                  </span>
                  <span className="text-warmwhite/40 text-base line-through" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                <Link
                  href={`/products/${product.handle}`}
                  className="eb-btn eb-btn-secondary text-warmwhite border-warmwhite/50 hover:bg-warmwhite hover:text-jet"
                >
                  EXPLORE {product.name.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
