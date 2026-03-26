import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="dreame-section bg-champagne overflow-hidden">
      <div className="dreame-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eb-eyebrow mb-3">OUR PHILOSOPHY</p>
            <h2
              className="text-3xl md:text-4xl text-jet mb-5"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              Wellness Without Compromise
            </h2>
            <p className="text-pewter mb-4 leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              EternoBliss was born from a simple belief: that what you put in and on your body should be as refined as the life you're building. We source only the finest ingredients, partner with world-class researchers, and rigorously test every formula before it reaches your hands.
            </p>
            <p className="text-pewter mb-8 leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Our compression wear is designed with input from physical therapists, our supplements formulated with registered dietitians, and our fitness technology built alongside biomedical engineers. This is wellness elevated to luxury.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about" className="eb-btn eb-btn-primary">
                LEARN OUR STORY
              </Link>
              <Link
                href="/collections/all"
                className="text-sm font-medium text-cognac border-b border-cognac pb-0.5 hover:text-cognac-dark transition-colors"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.05em" }}
              >
                Shop All Products
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
                alt="Luxury wellness lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-1/2 aspect-square overflow-hidden border-4 border-champagne">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&auto=format&fit=crop"
                alt="EternoBliss products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
