import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceProcessData } from "@/lib/data";


export default function ServiceProcess() {
  const timelineData = serviceProcessData.map((item) => ({
    title: `Step ${item.step}`,
    content: (
      <Card className="bg-card text-left">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{item.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    ),
  }));

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-archivo">
          Our Service Process
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          A streamlined approach to ensure your project&apos;s success.
        </p>
      </div>
      <Timeline data={timelineData} />
    </section>
  );
}
