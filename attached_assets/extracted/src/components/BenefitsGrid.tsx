"use client";

import Link from "next/link";
import { ChevronRight, Award, Headphones, CreditCard, Truck, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Award,
    title: "Clinical Grade",
    description:
      "Third-party tested and FDA-cleared for safety and efficacy.",
    link: false,
  },
  {
    id: 2,
    icon: Truck,
    title: "Free Shipping Always",
    description: "On all orders. No minimums. No exceptions.",
    link: false,
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Subscribe & Save 15%",
    description:
      "Delivered monthly. Skip or cancel anytime.",
    link: true,
  },
  {
    id: 4,
    icon: Headphones,
    title: "Expert Support",
    description: "Wellness coaches available to answer your questions.",
    link: false,
  },
];

export default function BenefitsGrid() {
  return (
    <section className="dreame-section bg-white">
      <div className="dreame-container">
        <div className="mb-8">
          <p className="eb-eyebrow mb-2">WHY ETERNOBLISS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, letterSpacing: "-0.03em" }}>
            Where Health Meets Beauty
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white border border-eb-border p-6 hover:shadow-lg transition-shadow"
            >
              {benefit.icon && (
                <benefit.icon className="h-10 w-10 text-cognac mb-4" />
              )}
              <h3 className="font-semibold text-jet mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                {benefit.title}
              </h3>
              {benefit.description && (
                <p className="text-sm text-pewter mb-3" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
                  {benefit.description}
                </p>
              )}
              {benefit.link && (
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-cognac hover:text-cognac-dark transition-colors"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {/* 30 Days Returns */}
          <div className="bg-champagne p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-bold text-cognac">30</span>
              <span className="text-lg text-pewter ml-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>Days</span>
            </div>
            <h3 className="font-semibold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              Money-Back Guarantee
            </h3>
          </div>

          {/* 2,300+ Reviews */}
          <div className="bg-champagne p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-bold text-cognac">2,300</span>
              <span className="text-lg text-pewter ml-1" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>+</span>
            </div>
            <h3 className="font-semibold text-jet" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              5-Star Reviews
            </h3>
          </div>

          {/* Third Party Tested */}
          <div className="bg-champagne p-6 hover:shadow-lg transition-shadow">
            <BarChart3 className="h-10 w-10 text-cognac mb-4" />
            <h3 className="font-semibold text-jet mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              Third-Party Tested
            </h3>
            <p className="text-sm text-pewter" style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}>
              Every batch verified for purity and potency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
