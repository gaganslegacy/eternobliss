import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Supplements",
    title: "Why Marine Collagen is Superior for Skin and Joint Health",
    excerpt: "Not all collagen is created equal. Discover why marine-sourced collagen has superior bioavailability compared to bovine alternatives.",
    date: "March 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf96c3a00?w=600&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    category: "Fitness Tech",
    title: "Red Light Therapy: The Science of Cellular Regeneration",
    excerpt: "How photobiomodulation works at the cellular level, and why it's become the fastest-growing recovery modality among athletes.",
    date: "February 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    category: "Compression",
    title: "Graduated Compression: How Pressure Gradients Accelerate Recovery",
    excerpt: "The engineering behind medical-grade compression wear and why it's not just for athletes anymore.",
    date: "February 14, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eb-eyebrow mb-2">WELLNESS JOURNAL</p>
            <h2
              className="text-2xl md:text-3xl text-jet"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              The Science Behind the Ritual
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center text-sm font-medium text-cognac hover:text-cognac-dark transition-colors"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
          >
            View all articles
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={post.href} className="group">
              <div className="overflow-hidden mb-4 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <p
                  className="text-cognac text-xs font-medium mb-2"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {post.category}
                </p>
                <h3
                  className="text-lg text-jet mb-2 group-hover:text-cognac transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-pewter mb-3 line-clamp-2" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {post.excerpt}
                </p>
                <p className="text-xs text-pewter/70" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {post.date} · {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
