import CommitmentToSafety from "@/components/CommitmentToSafety";
import CTA from "@/components/CTA";
import FleetPreview from "@/components/FleetPreview";
import GetCompanyProfile from "@/components/GetCompanyProfile";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <WhyChooseUs />
      <Services />
      <FleetPreview />
      <GetCompanyProfile />
      <CommitmentToSafety />
      <CTA />
    </div>
  );
}
