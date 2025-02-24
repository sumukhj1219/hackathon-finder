"use client";

import { Carousel } from "../ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Find Idea",
      src: "./idea.jpg",
    },
    {
      title: "Hackathons",
      src: "./find.jpg",
    },
    {
      title: "Generate Idea",
      src: "./generate.jpg",
    },
    {
      title: "WIN !",
      src: "./win.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
