import React from "react";
import SplitText from "./ui/split-text";

export default function WelcomeSection() {
  return (
    <section className="mx-auto max-7xl px-4">
      <div className="mb-24 md:mb-32 text-center ">
        <SplitText
          text=" Welcome to Uptiza"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-archivo"
          delay={50}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="text-foreground text-lg max-w-4xl mx-auto">
          Since 1996, Uptiza has been providing construction equipment and
          machinery rental services and trading. Built on the values of
          commitment, quality, professionalism, efficiency, and safety, we have
          grown to become one of the leading crane rental companies in Abu
          Dhabi, United Arab Emirates.
        </p>
      </div>
    </section>
  );
}
