import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryGrid from "../components/CategoryGrid";
import SpecialEvents from "../components/SpecialEvents";
import TechShowcase from "../components/TechShowcase";
import BenefitsGrid from "../components/BenefitsGrid";
import ExclusiveOffers from "../components/ExclusiveOffers";
import AwardsSection from "../components/AwardsSection";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <CategoryGrid />
      <SpecialEvents />
      <TechShowcase />
      <BenefitsGrid />
      <ExclusiveOffers />
      <AwardsSection />
      <AboutSection />
      <BlogSection />
      <Newsletter />
    </main>
  );
}
