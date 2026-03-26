import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="dreame-section bg-jet text-warmwhite">
      <div className="dreame-container max-w-2xl mx-auto text-center">
        <p className="eb-eyebrow text-warmwhite/60 mb-4">JOIN THE COMMUNITY</p>
        <h2
          className="text-3xl md:text-4xl text-warmwhite mb-3"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
        >
          Your Wellness Ritual Awaits
        </h2>
        <p className="text-warmwhite/70 mb-8 leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
          Join 50,000+ members who've elevated their daily ritual. Receive exclusive offers, science-backed wellness tips, and early access to new arrivals.
        </p>

        {submitted ? (
          <div className="bg-cognac/20 border border-cognac text-warmwhite px-6 py-4">
            <p className="text-base" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              Welcome to the EternoBliss community.
            </p>
            <p className="text-sm text-warmwhite/70 mt-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Your welcome gift code will arrive shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-warmwhite/20 text-warmwhite text-sm focus:outline-none focus:border-cognac placeholder-warmwhite/40"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
            />
            <button
              type="submit"
              className="eb-btn eb-btn-primary whitespace-nowrap"
            >
              JOIN + GET $10 OFF
            </button>
          </form>
        )}

        <p className="text-xs text-warmwhite/40 mt-4" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
          By subscribing, you agree to our privacy policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
