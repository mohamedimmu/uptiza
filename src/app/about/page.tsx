import CommitmentToSafety from "@/components/CommitmentToSafety";
import CoreValues from "@/components/CoreValues";
import CTA from "@/components/CTA";
import FleetPreview from "@/components/FleetPreview";
import FounderInfo from "@/components/FounderInfo";
import ServiceProcess from "@/components/ServiceProcess";
import Services from "@/components/Services";
import { Highlighter } from "@/components/ui/highlighter";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="my-16 md:my-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-archivo">
            About&nbsp;
            <Highlighter
              strokeWidth={2}
              isView={true}
              action="circle"
              color="#f48927"
              padding={8}
            >
              Uptiza
            </Highlighter>
          </h2>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            Trusted since 1996, built on commitment, quality, professionalism,
            efficiency, and safety.
          </p>
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <div className="flex items-center">
              <NumberTicker
                value={28}
                delay={0}
                className="font-archivo whitespace-pre-wrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-primary"
              />
              <span className="whitespace-pre-wrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-primary">
                +
              </span>
            </div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              delay={0.5}
              once={true}
              className="font-archivo whitespace-pre-wrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground"
            >
              Years of Experience
            </TextAnimate>
          </div>
        </div>

        <FounderInfo />
        <CoreValues />
        <ServiceProcess />
        <Services />
        <FleetPreview />
        <CommitmentToSafety />
        <CTA
          title="Need a Tailored Solution?"
          description="Tell us your project needs, and we'll recommend the right fleet with safety-first supervision."
          primaryButton={{
            text: "Contact Us",
            href: "/contact",
            icon: (
              <ArrowRight className="ml-0 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100" />
            ),
          }}
        />
      </div>
    </section>
  );
}
