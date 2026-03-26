const awards = [
  {
    id: 1,
    label: "Best Wellness Brand",
    organization: "Health & Beauty Awards 2024",
    badge: "AWARD",
  },
  {
    id: 2,
    label: "Top Rated Supplement",
    organization: "Nutrition Today Magazine",
    badge: "TOP RATED",
  },
  {
    id: 3,
    label: "Editor's Choice",
    organization: "Well+Good",
    badge: "EDITOR'S CHOICE",
  },
  {
    id: 4,
    label: "Best in Innovation",
    organization: "FitTech Expo 2024",
    badge: "INNOVATION",
  },
];

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "60-Day", label: "Money-Back Guarantee" },
];

export default function AwardsSection() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="text-center mb-10">
          <p className="eb-eyebrow mb-3">RECOGNIZED EXCELLENCE</p>
          <h2
            className="text-3xl md:text-4xl text-jet"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            Award-Winning Wellness
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {awards.map((award) => (
            <div
              key={award.id}
              className="border border-eb-border p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 bg-champagne border border-eb-border flex items-center justify-center mb-4"
              >
                <span
                  className="text-[8px] font-bold text-cognac"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {award.badge}
                </span>
              </div>
              <h3
                className="text-base text-jet mb-1"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                {award.label}
              </h3>
              <p
                className="text-xs text-pewter"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
              >
                {award.organization}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl md:text-4xl text-cognac mb-2"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs text-pewter uppercase"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.1em" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
