import { Link } from "wouter";
import Newsletter from "../components/Newsletter";

export default function AboutPage() {
  return (
    <div className="bg-linen min-h-screen">
      <section className="bg-champagne py-16 md:py-24">
        <div className="dreame-container text-center">
          <p className="eb-eyebrow mb-4">OUR STORY</p>
          <h1
            className="text-4xl md:text-5xl text-jet mb-5 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            Crafted for Those Who Refuse to Compromise
          </h1>
          <p className="text-pewter max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
            EternoBliss was founded with a singular vision: to bring pharmaceutical-grade wellness into everyday luxury.
          </p>
        </div>
      </section>

      <section className="dreame-section bg-white">
        <div className="dreame-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eb-eyebrow mb-3">THE MISSION</p>
            <h2 className="text-3xl text-jet mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              Where Science Meets Luxury
            </h2>
            <p className="text-pewter mb-4 leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Founded by a team of nutritionists, biomedical engineers, and luxury brand veterans, EternoBliss bridges the gap between clinical efficacy and refined aesthetics. We believe your wellness routine should be as curated as every other aspect of your life.
            </p>
            <p className="text-pewter leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Every product is developed through rigorous research, tested by independent third-party labs, and packaged with the kind of care usually reserved for fine jewelry. Because your health deserves nothing less.
            </p>
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
              alt="EternoBliss wellness"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="dreame-section bg-champagne">
        <div className="dreame-container text-center">
          <p className="eb-eyebrow mb-3">THE PILLARS</p>
          <h2 className="text-3xl text-jet mb-10" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
            Three Categories. One System.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Supplements", desc: "Clinically-dosed formulas with transparent labels. No proprietary blends. No fillers.", href: "/collections/supplements" },
              { title: "Fitness Tech", desc: "Professional-grade devices once reserved for elite athletes and clinical settings.", href: "/collections/fitness-tech" },
              { title: "Compression Wear", desc: "Medical-grade graduated compression reimagined for everyday luxury and performance.", href: "/collections/compression-wear" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 border border-eb-border text-left">
                <h3 className="text-xl text-jet mb-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p className="text-sm text-pewter mb-4" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="text-sm text-cognac border-b border-cognac pb-0.5 hover:text-jet hover:border-jet transition-colors"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
