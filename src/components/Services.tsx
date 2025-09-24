import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, Users, Globe } from "lucide-react";
import { Highlighter } from "./ui/highlighter";
import { BorderBeam } from "./ui/border-beam";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Construction,
    title: "Equipment Rental",
    description:
      "A comprehensive fleet of modern, well-maintained heavy machinery available for short-term and long-term rental.",
    buttonText: "View Fleet",
    buttonLink: "/services",
  },
  {
    icon: Users,
    title: "Project Consultation",
    description:
      "Professional consultation to help you plan your project, select the right equipment, and ensure operational efficiency.",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
  },
  {
    icon: Globe,
    title: "International Trading",
    description:
      "Facilitating the buying and selling of heavy equipment internationally, with a trusted network of global partners.",
    buttonText: "Explore Fleet",
    buttonLink: "/services",
  },
];

export default function Services({ heading = "md" }: { heading?: "lg" | "md" }) {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2
            className={cn(
              heading === "md" &&
                "text-3xl md:text-4xl font-bold font-archivo mb-4",
              heading === "lg" &&
                "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-archivo"
            )}
          >
            Our &nbsp;
            <Highlighter
              strokeWidth={2}
              isView={true}
              action={heading === "md" ? "underline" : "highlight"}
              color="#f48927"
            >
              Services
            </Highlighter>
          </h2>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            {/* Uptiza delivers complete solutions in equipment rental,
            consultation and trading services. We are built on commitment, quality,
            professionalism, efficiency and safety. */}
            {/* We provide a comprehensive range of services to meet the demands of
            any construction, industrial, or logistical project. */}
            We deliver complete solutions in construction equipment and
            machinery rental, consultation, and trading services to meet the
            demands of your project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className={cn(
                  "text-center flex flex-col px-4 py-6 relative overflow-hidden md:col-span-2 lg:col-span-1",
                  services.length % 2 !== 0 &&
                    index === services.length - 1 &&
                    "md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                )}
              >
                <CardHeader className="p-0">
                  <div className="p-2 bg-primary/10 rounded-full mb-2 flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-archivo">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Link href={service.buttonLink}>
                    <Button className="cursor-pointer">
                      {service.buttonText}
                    </Button>
                  </Link>
                </CardFooter>
                <BorderBeam
                  colorFrom="#f48927"
                  colorTo="#f48927"
                  duration={8}
                  size={100}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
