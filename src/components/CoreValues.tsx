import React from "react";
import { Highlighter } from "./ui/highlighter";
import { CheckCircle } from "lucide-react";
import { coreValues } from "@/lib/data";
import { Card } from "./ui/card";
import { BorderBeam } from "./ui/border-beam";

export default function CoreValues() {
  return (
    <section className="mx-auto max-w-4xl px-4">
      <div className="my-16 md:my-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-archivo mb-4">
            Our&nbsp;
            <Highlighter
              strokeWidth={2}
              isView={true}
              action="underline"
              color="#f48927"
            >
              Core Values
            </Highlighter>
          </h2>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            The values that define us and guide everything we do.
          </p>
        </div>

        <div className="grid gap-8 ">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row py-6 px-4 items-center gap-4 rounded-xl transition-colors"
            >
              <div className="p-4 bg-primary/10 rounded-full relative overflow-hidden flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
                <BorderBeam
                  colorFrom="#f48927"
                  colorTo="#e8d6c6"
                  duration={4}
                  size={100}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 font-archivo">
                  {value.title}
                </h3>
                <span className="text-muted-foreground">
                  {value.description}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
