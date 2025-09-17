
import AboutBlock from "./component/home/AboutBlock";
import Contact from "./component/home/Contact";
import HeroBanner from "./component/home/HeroBanner";
import Portfolio from "./component/home/Portfolio";
import ServicesSection from "./component/home/ServicesSection";

export default function Home() {
  return (
     <main className="min-h-screen bg-white">
      <HeroBanner />
      {/* rest of the page… */}
      <AboutBlock />
      <ServicesSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
