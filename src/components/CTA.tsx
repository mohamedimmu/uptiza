import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

export default function CTA() {
  return (
    <Card className="p-8 mx-auto max-w-7xl px-4 mb-16 md:mb-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6">
        <div>
          <h3 className="text-2xl font-bold font-headline mb-2">
            Need a Tailored Solution?
          </h3>
          <p className="text-muted-foreground">
            Tell us your project needs, and we&apos;ll recommend the right fleet
            with safety-first supervision.
          </p>
        </div>
        <Link href="/contact">
          <Button size="lg" className="cursor-pointer">Contact Us</Button>
        </Link>
      </div>
    </Card>
  );
}
