import React from "react";
import { Highlighter } from "./ui/highlighter";

export default function FounderInfo() {
  return (
    <section className="mx-auto max-w-7xl px-4">
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
              Foundation
            </Highlighter>
          </h2>
        </div>
        <div className="bg-muted/30 p-8 rounded-lg">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
              <span className="text-muted-foreground">Founded</span>
              <span className="font-semibold">1996</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
              <span className="text-muted-foreground">Founder & CEO</span>
              <span className="font-semibold">Mr. Usman Hanif</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
              <span className="text-muted-foreground">Location</span>
              <span className="font-semibold">Abu Dhabi, UAE</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
              <span className="text-muted-foreground">Industry</span>
              <span className="font-semibold">Heavy Lifting Operations</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
              <span className="text-muted-foreground">Experience</span>
              <span className="font-semibold">28+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
