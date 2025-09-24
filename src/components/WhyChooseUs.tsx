import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Building,
  Clock,
  DollarSign,
  HardHat,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Highlighter } from "./ui/highlighter";
import { cn } from "@/lib/utils";

const whyChooseUsItems = [
  {
    icon: Building,
    title: "One-Stop Solution",
    description:
      "Cranes, trailers, excavators, forklifts, and boom loaders — all in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "On-site inspections to plan accurately and reduce risks.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Get the right fleet at the right value for your project.",
  },
  {
    icon: Clock,
    title: "Customer Convenience",
    description: "Responsive, reliable service tailored to industry needs.",
  },
  {
    icon: HardHat,
    title: "Modern Heavy Cranes",
    description:
      "A technology-driven fleet built for efficiency and reliability.",
  },
  {
    icon: Truck,
    title: "Projects of Any Scale",
    description: "From small to large-scale projects, we've got you covered",
  },
];

export default function WhyChooseUs({
  className,
  marginBottom = true,
  innerCardRadius = "",
  defaultHeading = true
}: {
  className?: string;
  marginBottom?: boolean;
  innerCardRadius?: string;
  defaultHeading?: boolean
}) {
  return (
    <section className={`max-w-7xl mx-auto px-4 ${className}`}>
      <div className={cn(marginBottom && "mb-16 md:mb-24")}>
        {defaultHeading ? (
          <h2 className="text-3xl md:text-4xl font-bold text-center font-archivo mb-12">
            Why Choose&nbsp;
            <Highlighter isView={true} action="highlight" color="#f48927">
              Uptiza
            </Highlighter>
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold text-center font-archivo mb-12">
            Why Choose&nbsp;
            <Highlighter isView={true} action="highlight" color="#f48927">
              Uptiza
            </Highlighter>
          </h2>
        )}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsItems.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "bg-card text-center px-4 py-6 border-0 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden",
                innerCardRadius
              )}
            >
              <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                <div className="bg-primary/10 p-2 rounded-full">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-archivo">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
