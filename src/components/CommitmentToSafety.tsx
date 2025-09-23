import React from "react";
import { ShieldCheck, HardHat, ClipboardCheck } from "lucide-react";
import { Highlighter } from "./ui/highlighter";
import { BorderBeam } from "./ui/border-beam";

const safetyPromises = [
  {
    icon: ShieldCheck,
    title: "Certified Operators",
    description:
      "Our operators are fully certified and continuously trained to adhere to the highest safety standards.",
  },
  {
    icon: HardHat,
    title: "Rigorous Maintenance",
    description:
      "Our fleet undergoes regular, thorough inspections and preventative maintenance to ensure peak performance and safety.",
  },
  {
    icon: ClipboardCheck,
    title: "Site-Specific Plans",
    description:
      "We develop and implement detailed, site-specific safety plans for every project we undertake.",
  },
];

export default function CommitmentToSafety() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-archivo">
          Our Unwavering Commitment to{" "}
          <Highlighter
            isView={true}
            color="#f48927"
            action="circle"
            padding={7.5}
            strokeWidth={2}
          >
            Safety
          </Highlighter>
        </h2>
        <p className="text-foreground text-lg mb-12 max-w-3xl mx-auto">
          Safety is not just a policy; it&apos;s the cornerstone of our
          operations. We are dedicated to ensuring the well-being of our team,
          your crew, and the public on every project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyPromises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4 relative overflow-hidden">
                <promise.icon className="h-8 w-8 text-primary" />
                <BorderBeam
                  colorFrom="#f48927"
                  colorTo="#e8d6c6"
                  duration={4}
                  size={100}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-archivo">{promise.title}</h3>
              <p className="text-muted-foreground">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
