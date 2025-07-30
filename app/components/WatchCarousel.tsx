import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const embdedLinks = [
  {
    index: 1,
    src: "https://www.youtube.com/embed/uurDRDkYzbw?si=_xpv82fzRu0uAaGi",
  },
  {
    index: 2,
    src: "https://www.youtube.com/embed/_lNpfLKWVK8?si=GP03Z4QvtWQfeN28",
  },
  {
    index: 3,
    src: "https://www.youtube.com/embed/RRQF2mpLzT0?si=99uFoEHS6wIFkCgZ",
  },
  {
    index: 4,
    src: "https://www.youtube.com/embed/w0jkDCzSkRI?si=0LfzPa_JGNP2WFG4",
  },
];

export default function WatchCarousel() {
  return (
    <div>
      <Carousel className="w-full flex flex-col">
        <CarouselContent>
          {embdedLinks.map((embed) => (
            <CarouselItem key={embed.index} className="aspect-video">
              <iframe
                src={embed.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-xl"
              ></iframe>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
