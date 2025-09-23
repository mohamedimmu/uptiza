import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Award, Globe, ShieldCheck, Truck } from "lucide-react";
import { TextAnimate } from "./ui/text-animate";
import { ShimmerButton } from "./ui/shimmer-button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <TextAnimate
              animation="slideUp"
              as="h1"
              once={true}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-archivo"
            >
              Powerful Solutions for Heavy Lifting
            </TextAnimate>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
              A modern fleet of cranes, forklifts, trailers, boom loaders, and
              excavators — ready to power projects of any scale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/services">
                <ShimmerButton
                  className="cursor-pointer py-0 !px-6 h-10"
                  borderRadius="14px"
                  background="#f48927"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight">
                    Explore Our Fleet
                  </span>
                </ShimmerButton>
              </Link>
              <Button size="lg" className="cursor-pointer" variant="outline">
                Get a Quote
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-muted-foreground text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Trusted Since 1996</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span>Powerful Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Safety Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>International Trading</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-3 gap-4 h-[600px]">
            <div className="col-span-3 row-span-1 sm:row-span-2 rounded-lg overflow-hidden">
              <Image
                src="/hero-section/1.png"
                alt="Pottery making"
                width={800}
                height={800}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint="crane"
              />
            </div>
            <div className="col-span-3 row-span-1 rounded-lg overflow-hidden">
              <Image
                src="/hero-section/2.png"
                alt="Couple on scooter"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint="excavator"
              />
            </div>
            <div className="col-span-3 row-span-1 rounded-lg overflow-hidden">
              <Image
                src="/hero-section/3.png"
                alt="Chef plating food"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint="trailer"
              />
            </div>
            <div className="col-span-3 sm:col-span-2 row-span-1 rounded-lg overflow-hidden">
              <Image
                src="/hero-section/4.png"
                alt="Hiker in mountains"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="col-span-3 sm:col-span-2 row-span-1 rounded-lg overflow-hidden">
              <Image
                src="/hero-section/5.png"
                alt="Man laughing"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="col-span-3 sm:col-span-2 row-span-1 rounded-lg overflow-hidden">
              <Image
                src="/hero-section/6.png"
                alt="Vineyard"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
