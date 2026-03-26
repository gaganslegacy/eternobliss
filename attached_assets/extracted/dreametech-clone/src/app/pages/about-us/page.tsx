"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const stats = [
  { number: "11", label: "Products" },
  { number: "3", label: "Pillars" },
  { number: "2,300+", label: "Members" },
  { number: "100%", label: "Satisfaction Guaranteed" },
];

const storySections = [
  {
    eyebrow: "THE INTERSECTION",
    heading: "Where Health Meets Beauty",
    body: "EternoBliss was built on one belief — that health and beauty are not separate pursuits. Every product we create sits at their perfect intersection. We source clinically-proven ingredients, FDA-cleared technology, and thoughtful design to help you look and feel your best.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
    imageRight: false,
  },
  {
    eyebrow: "CLINICAL STANDARDS",
    heading: "Not Wellness Marketing. Science.",
    body: "Every supplement is third-party tested. Every device is clinically validated. We don't move a product to market until the evidence is clear. Our standards are pharmaceutical, not promotional.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    imageRight: true,
  },
  {
    eyebrow: "THE RITUAL",
    heading: "Daily Consistency. Lasting Results.",
    body: "Transformation happens through consistency, not intensity. EternoBliss is built around the daily ritual — small, intentional acts that compound over time into measurable change.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
    imageRight: false,
  },
];

const headingStyle = {
  fontFamily: "var(--font-cormorant)",
  fontWeight: 400,
  letterSpacing: "-0.03em",
};

const bodyStyle = {
  fontFamily: "var(--font-lato)",
  fontWeight: 300,
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-linen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-champagne py-3 px-4 lg:px-8 border-b border-eb-border">
        <div className="dreame-container">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-pewter hover:text-cognac transition-colors" style={bodyStyle}>Home</Link>
            <ChevronRight className="h-3 w-3 text-pewter" />
            <span className="text-jet" style={{ ...bodyStyle, fontWeight: 400 }}>About</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop"
          alt="EternoBliss wellness ritual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-jet/55" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-warmwhite">
          <div className="max-w-3xl px-4 animate-slideUp">
            <p className="eb-eyebrow mb-4" style={{ color: "#B4826A" }}>OUR STORY</p>
            <h1 className="text-5xl md:text-7xl text-warmwhite mb-5 text-balance" style={headingStyle}>
              Where Health Meets Beauty
            </h1>
            <p className="text-warmwhite/70 text-lg max-w-xl mx-auto leading-relaxed" style={bodyStyle}>
              We built EternoBliss on one belief.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="dreame-section bg-linen">
        <div className="dreame-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eb-eyebrow mb-4">THE MISSION</p>
            <blockquote
              className="text-3xl md:text-4xl text-jet text-balance leading-snug"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              &ldquo;EternoBliss was built on one belief — that health and beauty are not separate pursuits. Every product sits at their intersection.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-champagne border-y border-eb-border py-10">
        <div className="dreame-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl md:text-5xl text-jet mb-1"
                  style={headingStyle}
                >
                  {stat.number}
                </div>
                <div
                  className="text-pewter text-sm"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story sections */}
      {storySections.map((section, i) => (
        <section key={section.eyebrow} className={`dreame-section ${i % 2 === 0 ? "bg-linen" : "bg-warmwhite"}`}>
          <div className="dreame-container">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${section.imageRight ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}>
              <div>
                <p className="eb-eyebrow mb-3">{section.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl text-jet mb-4 text-balance" style={headingStyle}>
                  {section.heading}
                </h2>
                <p className="text-pewter leading-relaxed" style={bodyStyle}>
                  {section.body}
                </p>
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA — dark */}
      <section className="dreame-section bg-jet">
        <div className="dreame-container text-center">
          <p className="eb-eyebrow mb-4" style={{ color: "#B4826A" }}>BEGIN YOUR RITUAL</p>
          <h2 className="text-3xl md:text-4xl text-warmwhite mb-6 text-balance" style={headingStyle}>
            Experience EternoBliss
          </h2>
          <p className="text-warmwhite/60 mb-8 max-w-lg mx-auto leading-relaxed" style={bodyStyle}>
            Join thousands of members who have made wellness their daily ritual.
          </p>
          <Link href="/collections/robot-vacuums" className="eb-btn eb-btn-primary">
            SHOP THE COLLECTION
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
