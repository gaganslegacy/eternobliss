import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function SpecialEvents() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="eb-eyebrow mb-2">FEATURED</p>
            <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
              The Complete Ritual
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="#" className="group relative overflow-hidden h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&auto=format&fit=crop"
              alt="Complete Supplement Bundle"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="top-4 left-4 absolute">
              <span className="inline-flex items-center bg-success text-white text-xs font-medium px-2 py-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse" />
                Featured
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm text-white/80 mb-2" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>All 5 Supplements. One Subscription.</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                Complete Ritual Bundle
              </h3>
              <p className="text-sm text-white/80 mb-4" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                Save 20% with our curated supplement stack. Free shipping included.
              </p>
              <span className="inline-flex items-center bg-cognac px-4 py-2 text-sm font-medium hover:bg-cognac-dark transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Build Your Bundle
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </Link>

          <Link href="/collections/compression-wear" className="group relative overflow-hidden h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
              alt="Recovery Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                Recovery Collection
              </h3>
              <p className="text-sm text-white/80 mb-4" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                Red light therapy + compression wear + targeted supplements for optimal recovery.
              </p>
              <span className="inline-flex items-center bg-cognac px-4 py-2 text-sm font-medium hover:bg-cognac-dark transition-colors" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Shop Recovery
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
