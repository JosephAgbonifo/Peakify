import { features } from "@/data/features";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Features() {
  return (
    <BentoGrid className="max-w-4xl mx-auto ">
      {features.map((feature, i) => (
        <BentoGridItem
          key={i}
          title={feature.title}
          description={feature.description}
          img={feature.img}
          className={i === 0 ? "md:col-span-2 row-span-2" : ""}
          i={i}
        />
      ))}
    </BentoGrid>
  );
}
