import React from "react";
import { serviceProcessData } from "@/lib/data";
import { BorderBeam } from "./ui/border-beam";

export default function ServiceProcess() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-archivo">
            Our Service <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            A streamlined approach to ensure your project&apos;s success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {serviceProcessData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4 relative overflow-hidden">
                <item.icon className="h-6 w-6 text-primary" />
                <BorderBeam
                  colorFrom="#f48927"
                  colorTo="#e8d6c6"
                  duration={4}
                  size={100}
                />
              </div>
              <h3 className="text-xl text-center font-semibold mb-2 font-archivo">
                {index + 1}.&nbsp;{item.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
