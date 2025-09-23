import React from "react";
import { Highlighter } from "./ui/highlighter";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { equipmentData } from "@/lib/data";

export default function FleetDetail() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-16 md:mb-24">
        <div>
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
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentData.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-0 shadow-none hover:shadow-none text-center py-0 rounded-lg"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative w-full overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
