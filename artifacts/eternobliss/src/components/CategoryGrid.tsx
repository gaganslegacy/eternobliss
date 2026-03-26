import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Supplements",
    description: "Clinical doses. Daily nutrition.",
    href: "/collections/supplements",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fitness Tech",
    description: "Professional-grade devices.",
    href: "/collections/fitness-tech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Compression Wear",
    description: "Medical-grade. Every day.",
    href: "/collections/compression-wear",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop",
  },
];

const quickLinks = [
  {
    id: 4,
    name: "Collagen Powder",
    description: "10g per serving",
    href: "/products/collagen-powder",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Red Light Device",
    description: "FDA Cleared",
    href: "/products/red-light-therapy-device",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Fitness Ring",
    description: "Track everything",
    href: "/products/fitness-ring",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Bundles",
    description: "Save up to 20%",
    href: "/collections/all",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&auto=format&fit=crop",
  },
];

export default function CategoryGrid() {
  return (
    <section className="dreame-section bg-linen">
      <div className="dreame-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eb-eyebrow mb-2">THREE PILLARS</p>
            <h2
              className="text-3xl md:text-4xl text-jet text-balance"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              The Complete System
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="relative group overflow-hidden h-[220px] md:h-[280px]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="category-overlay" />
              <div className="absolute bottom-0 left-0 p-6 text-warmwhite">
                <h3
                  className="text-2xl mb-1 text-warmwhite"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {category.name}
                </h3>
                <p
                  className="text-xs text-warmwhite/70 mb-4"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  {category.description}
                </p>
                <span className="eb-btn eb-btn-secondary text-warmwhite border-warmwhite/60 hover:bg-warmwhite hover:text-jet inline-flex items-center" style={{ fontSize: "10px", padding: "0.5rem 1rem" }}>
                  EXPLORE
                  <ChevronRight className="ml-1.5 h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="relative group overflow-hidden h-[160px]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="category-overlay" />
              <div className="absolute bottom-0 left-0 p-4 text-warmwhite">
                <h3
                  className="text-lg text-warmwhite mb-0.5"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {category.name}
                </h3>
                <p
                  className="text-xs text-warmwhite/70"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
