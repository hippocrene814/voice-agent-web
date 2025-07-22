import NavigationBar from "../components/layout/navigation/NavigationBar";
import HeroSection from "../components/sections/hero/HeroSection";
import PartnersCarousel from "../components/sections/partners/PartnersCarousel";
import HowItWorksSection from "../components/sections/how-it-works/HowItWorksSection";
import ComparisonSection from "../components/sections/comparison/ComparisonSection";
import FAQSection from "../components/sections/faq/FAQSection";
import FooterSection from "../components/sections/footer/FooterSection";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <PartnersCarousel />
      <HowItWorksSection />
      <ComparisonSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
