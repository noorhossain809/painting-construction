import { RealitySection } from "@/components/ui/RealitySection";
import AboutBlock from "./component/home/AboutBlock";
import Contact from "./component/home/Contact";
import HeroBanner from "./component/home/HeroBanner";
import Portfolio from "./component/home/Portfolio";
import ServicesSection from "./component/home/ServicesSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pro Painting Construction | Top Painters & Contractors in New York, USA",
  description: "Your trusted partner for residential and commercial painting and construction services in New York City. We deliver quality craftsmanship on time. Get a free estimate today!",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      {/* rest of the page… */}

      <AboutBlock />
      <ServicesSection />
      <Portfolio />
      <RealitySection />
      <Contact />
    </main>
  );
}
