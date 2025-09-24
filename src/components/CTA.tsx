import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href: string;
  icon?: ReactNode;
}

interface CTAProps {
  title: string;
  description: string;
  icon?: ReactNode;
  primaryButton: CTAButtonProps;
  secondaryButton?: CTAButtonProps;
}

export default function CTA({
  title,
  description,
  icon,
  primaryButton,
  secondaryButton,
}: CTAProps) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <Card className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-archivo mb-2 flex items-center justify-center md:justify-start gap-2">
              {icon && icon}
              {title}
            </h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryButton.href} className="group">
              <Button size="lg" className="cursor-pointer">
                {primaryButton.text}
                {primaryButton.icon ? (
                  primaryButton.icon
                ) : (
                  <ArrowRight className="ml-0 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100" />
                )}
              </Button>
            </Link>
            {secondaryButton && (
              <Link href={secondaryButton.href} className="group">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  {secondaryButton.text}
                  {secondaryButton.icon ? (
                    secondaryButton.icon
                  ) : (
                    <ArrowRight className="ml-0 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100" />
                  )}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
