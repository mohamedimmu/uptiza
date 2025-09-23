import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { contactInfo } from "@/lib/data";

export default function ContactInfo({ className }: { className?: string }) {
  return (
    <Card className={`bg-card border-0 rounded-2xl ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          return (
            <div key={info.title} className="flex items-start gap-4">
              <Icon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">{info.title}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
