"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Play } from "lucide-react";

const stats = [
  { number: "785", label: "Filed patents" },
  { number: "60%", label: "Expected patents" },
  { number: "419", label: "Annual patents" },
  { number: "248", label: "Invention patents" },
];

const awards = [
  { name: "CES", image: "https://ext.same-assets.com/1798743184/2376331268.png" },
  { name: "Golden Pin Design Award", image: "https://ext.same-assets.com/1798743184/2376331268.png" },
  { name: "Red Dot Winner 2021", image: "https://ext.same-assets.com/1798743184/2376331268.png" },
  { name: "iF Design Award 2021", image: "https://ext.same-assets.com/1798743184/2376331268.png" },
  { name: "Forbes", image: "https://ext.same-assets.com/1798743184/2824654834.png" },
  { name: "Vacuum Wars", image: "https://ext.same-assets.com/1798743184/2376331268.png" },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] py-3 px-4 lg:px-8">
        <div className="dreame-container">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#b79d6d] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-800 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://ext.same-assets.com/1798743184/1848076075.jpeg"
        >
          <source src="https://ext.same-assets.com/1798743184/2344505316.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A Dream Unveiled in 2017
            </h1>
            <p className="text-lg text-white/80">
              Founded in 2017, Dreame Technology, affectionately known as "Dreame,"
              embarked on a journey driven by innovation. Our roots delve into the
              heart of tech, aiming to revolutionize daily life for our global consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Pioneering Section */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
              Pioneering Smart Home Cleaning
            </h2>
            <p className="text-gray-600 text-lg">
              We've emerged as one of the leading brands in smart home cleaning with our 4
              major product lines: robotic vacuums and mops, cordless stick vacuums, wet and
              dry vacuums, and high-speed hair dryers. Each product is meticulously designed to
              redefine convenience in household innovation and improve our users' homes.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto mb-16 group cursor-pointer">
            <img
              src="https://ext.same-assets.com/1798743184/1461520653.webp"
              alt="Dreame Smart Factory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              <span className="mr-2">DREAME</span>
              Dreame Smart Factory Introduction
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] text-center mb-12">
            A Born Pioneer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#050505] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1798743184/3916445655.png"
                alt="Founder Yu Hao"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
                Beyond Boundaries: Innovating for Tomorrow
              </h2>
              <p className="text-gray-600 mb-6">
                We're incredibly proud of our innovations but are still going strong. The future
                holds endless possibilities, including robotic lawnmowers, cordless robotic pool
                cleaners, and commercial food delivery robots. These are only a few ideas we at
                Dreame are working toward to bring convenience to everyday life.
              </p>
              <p className="text-lg font-semibold text-[#050505]">
                Founder, Yu Hao
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Engine Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/1798743184/2596412148.png"
            alt="Innovative Engine Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="dreame-container relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dreame's Innovative Engine
            </h2>
            <p className="text-lg text-white/80">
              Dreame's technological journey began in 2015 with our founding team's pioneering
              work on high-speed digital motors. Evolving into intelligent algorithms, Dreame creates
              distinctive products that bring joy to users worldwide. Our extensive patent filing
              portfolio reflects our dedication to pushing technological boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Design Excellence Section */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://ext.same-assets.com/1798743184/4037193875.png"
                alt="Design Excellence"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
                Bridging Tech and Lifestyle: Design Excellence
              </h2>
              <p className="text-gray-600">
                We at Dreame have made it a point to seamlessly blend functionality and design aesthetics through
                collaborations with leading design institutes worldwide, achieving a harmonious fusion of cutting-edge
                technology and a cozy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="dreame-section bg-[#f5f5f5]">
        <div className="dreame-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
              Dreame's Reach Across 120 Countries
            </h2>
            <p className="text-gray-600 text-lg">
              Over 21 million households have trusted Dreame products in over 120 countries and regions, including China, the United
              States, Germany, France, and South Korea. We now have a network of more than 4,000 physical stores and more than 7.5
              million channel members.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="dreame-section bg-white">
        <div className="dreame-container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {awards.map((award) => (
              <div key={award.name} className="text-center">
                <img
                  src={award.image}
                  alt={award.name}
                  className="h-16 md:h-20 w-auto mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dreame-section bg-[#050505] text-white">
        <div className="dreame-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Dreame Difference
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join millions of households worldwide who trust Dreame for their smart home cleaning needs.
          </p>
          <Link
            href="/collections/robot-vacuums"
            className="inline-flex items-center px-8 py-4 bg-[#b79d6d] text-white rounded-full font-medium hover:bg-[#a08a5c] transition-colors"
          >
            Shop Our Products
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
