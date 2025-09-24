import CommitmentToSafety from "@/components/CommitmentToSafety";
import CTA from "@/components/CTA";
import FleetPreview from "@/components/FleetPreview";
import GetCompanyProfile from "@/components/GetCompanyProfile";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ArrowRight } from "lucide-react";

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
      <CTA
        title="Need a Tailored Solution?"
        description="Tell us your project needs, and we&apos;ll recommend the right fleet with safety-first supervision."
        primaryButton={{
          text: "Contact Us",
          href: "/contact",
          icon: (
            <ArrowRight className="ml-0 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100" />
          ),
        }}
      />
    </div>
  );
}
