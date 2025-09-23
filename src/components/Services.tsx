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
// import { ShineBorder } from "./ui/shine-border";
import { Highlighter } from "./ui/highlighter";
import { BorderBeam } from "./ui/border-beam";

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

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-16 md:mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-archivo mb-4">
            Our &nbsp;
            <Highlighter
              strokeWidth={2}
              isView={true}
              action="underline"
              color="#f48927"
            >
              Services
            </Highlighter>
          </h2>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            Uptiza delivers complete solutions in heavy lifting, equipment
            rental, consultation and trading—built on commitment, quality,
            professionalism, efficiency and safety.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center flex flex-col px-4 py-6 relative overflow-hidden"
            >
              {/* <ShineBorder shineColor={"#f48927"} borderWidth={1} /> */}
              <CardHeader className="p-0">
                <div className="p-2 bg-primary/10 rounded-full mb-2 flex items-center justify-center mx-auto">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">
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
          ))}
        </div>
      </div>
    </section>
  );
}
