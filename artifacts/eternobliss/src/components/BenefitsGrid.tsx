const benefits = [
  {
    id: 1,
    icon: "⬡",
    title: "Clinical Formulations",
    description: "Backed by clinical research. Every dose is precisely calibrated for maximum bioavailability and effectiveness.",
  },
  {
    id: 2,
    icon: "◈",
    title: "Sustainable Luxury",
    description: "Zero-waste packaging. Sustainably sourced ingredients. Luxury that doesn't compromise the planet.",
  },
  {
    id: 3,
    icon: "◎",
    title: "Transparent Labels",
    description: "No proprietary blends. No hidden ingredients. Every gram disclosed because you deserve to know what you're putting in your body.",
  },
  {
    id: 4,
    icon: "◌",
    title: "Science-Backed",
    description: "Developed with leading nutritionists and biomedical researchers. Formulations that meet the highest scientific standards.",
  },
  {
    id: 5,
    icon: "⬬",
    title: "Third-Party Tested",
    description: "Every batch independently tested for purity and potency. COA available on request. Because trust is built, not claimed.",
  },
  {
    id: 6,
    icon: "◇",
    title: "Subscribe & Save",
    description: "Never run out. Save 15% on every order with flexible subscription scheduling. Pause or cancel anytime.",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="dreame-section bg-champagne">
      <div className="dreame-container">
        <div className="text-center mb-10">
          <p className="eb-eyebrow mb-3">OUR PROMISE</p>
          <h2
            className="text-3xl md:text-4xl text-jet max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            The EternoBliss Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-8 border border-eb-border hover:border-cognac transition-colors group"
            >
              <div
                className="w-12 h-12 bg-champagne flex items-center justify-center mb-5 text-cognac text-xl group-hover:bg-cognac group-hover:text-white transition-colors"
              >
                {benefit.icon}
              </div>
              <h3
                className="text-lg text-jet mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-sm text-pewter leading-relaxed"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
