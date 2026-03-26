"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <section className="dreame-section bg-warmwhite">
      <div className="dreame-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            <div className="flex items-center mb-4">
              <Mail className="h-8 w-8 text-cognac mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
                Join the Ritual
              </h2>
            </div>
            <p className="text-pewter mb-6" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Get 10% off your first order plus
              <br />
              weekly wellness insights and exclusive previews.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-eb-border bg-white text-jet focus:outline-none focus:ring-1 focus:ring-cognac transition-all"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cognac text-white font-medium hover:bg-cognac-dark transition-colors"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 400, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", borderRadius: "0" }}
              >
                Join Now
              </button>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-cognac"
                />
                <span className="text-sm text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  I agree to EternoBliss Terms of Service and Privacy Policy.
                </span>
              </label>
            </form>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1609899372282-e4e4b6f1aed5?w=800&auto=format&fit=crop"
              alt="EternoBliss wellness lifestyle"
              className="w-full h-[400px] object-cover"
              style={{ borderRadius: "0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
