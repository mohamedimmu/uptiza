import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <Card className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6">
          <div>
            <h3 className="text-2xl font-bold font-archivo mb-2">
              Need a Tailored Solution?
            </h3>
            <p className="text-muted-foreground">
              Tell us your project needs, and we&apos;ll recommend the right
              fleet with safety-first supervision.
            </p>
          </div>
          <Link href="/contact" className="group">
            <Button size="lg" className="cursor-pointer">
              Contact Us
              <ArrowRight className="ml-0 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100" />
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
