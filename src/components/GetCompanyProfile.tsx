import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function GetCompanyProfile() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      {/* Company Profile Section */}
      <section className="mb-16 md:mb-24">
        <Card className="bg-primary/10 overflow-hidden p-0">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-archivo font-headline mb-4">
                Get the Catalogue
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
                Download Uptiza&apos;s complete catalogue of services and
                equipment.
              </p>
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </div>
            <div className="relative h-64 md:h-full justify-self-end">
              <Image
                src="/catalogue/cover.png"
                alt="Uptiza Catalogue Cover"
                width={240}
                height={240}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </Card>
      </section>
    </section>
  );
}
