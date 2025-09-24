import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function GetCompanyProfileMini({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={cn("bg-card overflow-hidden p-0 rouned-lg", className)}>
      <div className="px-4 py-6 h-full flex flex-col">
        <h2 className="text-2xl font-semibold font-archivo mb-2">
          Get the Catalogue
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Download Uptiza&apos;s complete catalogue of services and equipment.
        </p>

        <Link href="/catalogue/Uptiza.pdf" download="Uptiza-Catalogue.pdf" className="mt-auto flex">
          <Button size="lg" className="cursor-pointer">
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Button>
        </Link>
      </div>
    </Card>
  );
}
