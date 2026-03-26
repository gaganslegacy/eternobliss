import { Link } from "wouter";

const offers = [
  {
    id: 1,
    eyebrow: "SUBSCRIBE & SAVE",
    title: "Save 15% on Every Order",
    description: "Never run out of your favorites. Lock in your personal wellness ritual with flexible subscription scheduling.",
    cta: "Start Subscription",
    href: "#",
    bg: "bg-jet",
    textLight: true,
    badgeText: "15% OFF",
  },
  {
    id: 2,
    eyebrow: "FIRST ORDER",
    title: "Welcome Gift for New Members",
    description: "Enjoy $10 off your first order when you join the EternoBliss community. Use code: WELCOME10",
    cta: "Claim Offer",
    href: "/collections/all",
    bg: "bg-cognac",
    textLight: true,
    badgeText: "$10 OFF",
  },
  {
    id: 3,
    eyebrow: "BUNDLE",
    title: "Build Your Ritual Bundle",
    description: "Choose any 3+ products and save up to 20%. Create your personalized wellness stack.",
    cta: "Build Bundle",
    href: "#",
    bg: "bg-champagne",
    textLight: false,
    badgeText: "UP TO 20% OFF",
  },
];

export default function ExclusiveOffers() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="text-center mb-10">
          <p className="eb-eyebrow mb-3">EXCLUSIVE MEMBER BENEFITS</p>
          <h2
            className="text-3xl md:text-4xl text-jet"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            Exceptional Value
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bg} p-8 flex flex-col justify-between min-h-[280px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p
                    className={`text-xs font-medium tracking-widest ${
                      offer.textLight ? "text-white/70" : "text-pewter"
                    }`}
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    {offer.eyebrow}
                  </p>
                  <span
                    className={`text-xs font-bold px-2 py-1 ${
                      offer.textLight
                        ? "bg-white/20 text-white"
                        : "bg-cognac text-white"
                    }`}
                    style={{ fontFamily: "var(--font-lato)", fontWeight: 600, fontSize: "9px", letterSpacing: "0.08em" }}
                  >
                    {offer.badgeText}
                  </span>
                </div>
                <h3
                  className={`text-xl md:text-2xl mb-3 ${
                    offer.textLight ? "text-white" : "text-jet"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {offer.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    offer.textLight ? "text-white/70" : "text-pewter"
                  }`}
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  {offer.description}
                </p>
              </div>
              <Link
                href={offer.href}
                className={`mt-6 inline-flex items-center text-sm font-medium transition-all ${
                  offer.textLight
                    ? "text-white border-b border-white/40 hover:border-white"
                    : "text-jet border-b border-jet/40 hover:border-jet"
                }`}
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.05em" }}
              >
                {offer.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
