import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function ContactCTA({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold font-archivo mb-2 flex items-center justify-center md:justify-start gap-2">
            Looking for the Right Equipment?
          </h3>
          <p className="text-muted-foreground">
            Explore our Fleet to see how Uptiza can support your project before
            getting in touch.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="group">
            <Button size="lg" className="cursor-pointer">
              View Fleet
              <ArrowRight className="ml-0 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ContactCTA;
