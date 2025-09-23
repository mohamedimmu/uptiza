import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Highlighter } from "./ui/highlighter";

const fleetItems = [
  {
    name: "Hydraulic Cranes",
    description: "Ranges from 40 to 500 ton",
    imageUrl: "/fleets/crane.png",
    imageHint: "hydraulic crane",
  },
  {
    name: "Forklifts",
    description: "Upto 17 ton",
    imageUrl: "/fleets/forklifts.png",
    imageHint: "forklift",
  },
  {
    name: "Boom Loader Trucks",
    description: "Upto 15 ton",
    imageUrl: "/fleets/boom-loader.png",
    imageHint: "boom loader",
  },
  {
    name: "Trailers",
    description: "Flat/Low Bed",
    imageUrl: "/fleets/trailers.png",
    imageHint: "trailer",
  },
  {
    name: "Excavators",
    description: "Wheeled, Mini, Crawler",
    imageUrl: "/fleets/excavators.png",
    imageHint: "excavator",
  },
];

export default function FleetPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-archivo mb-4">
          <Highlighter
            isView={true}
            action="underline"
            color="#f48927"
            padding={8}
            strokeWidth={2}
          >
            Our Fleet:
          </Highlighter>{" "}
          Powering Your Projects
        </h2>
        <p className="text-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our Fleet. We provide a comprehensive range of equipment to
          meet the demands of any construction, industrial, or logistical
          project.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6">
          {fleetItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none hover:shadow-none text-center pt-0"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    data-ai-hint={item.imageHint}
                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          <Link href="/fleet" className="group block col-span-1 aspect-square">
            <Card className="h-full flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-muted">
              <CardContent className="text-center p-4">
                <ArrowRight className="h-12 w-12 mx-auto text-primary transition-transform duration-300 group-hover:translate-x-4" />
                <h3 className="text-xl font-semibold mt-4">View All Fleet</h3>
                <p className="text-muted-foreground">See all our equipment</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
