import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Features from "@/components/FeaturesSection";
import Testimonials from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import Services from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import EventsSection from "@/components/EventsSection";
import PricingSection from "@/components/PricingSection";
import StatsTicker from "@/components/StatsSection";
import DiscountSection from "@/components/DiscountSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <StatsTicker />
      <Services />
      <Features />
      <Testimonials />
      <TeamSection />
      <SkillsSection />
      <EventsSection />
      <PricingSection />
      <DiscountSection />
      <Footer />
    </main>
  );
}
