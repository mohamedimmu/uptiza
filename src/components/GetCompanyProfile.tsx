"use client";

import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Globe } from "./ui/globe";

export default function GetCompanyProfile() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <section className="mb-16 md:mb-24">
        <Card className="bg-primary/5 overflow-hidden p-0">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 md:pr-2 pr-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-archivo font-headline mb-2">
                Get the Catalogue
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                Download Uptiza&apos;s complete catalogue of services and
                equipment.
              </p>
              <a href="/catalogue/uptiza.pdf" download="Uptiza-Catalogue.pdf">
                <Button size="lg" className="cursor-pointer">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </a>
            </div>
            <div className="relative flex size-full items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent font-archivo">
                Uptiza
              </span>
              <Globe className="top-16" />
              <div className="pointer-events-none absolute inset-0 h-full  bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.2),rgba(255,255,255,0))]" />
            </div>
          </div>
        </Card>
      </section>
    </section>
  );
}
