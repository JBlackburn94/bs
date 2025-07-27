import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function VideoCarousel() {
  return (
    <section className="relative z-20 my-20 max-lg:my-10 max-lg:py-10 py-20 flex justify-center items-center w-full px-5 bg-orange/10 rounded-3xl border border-orange/20 shadow-lg backdrop-blur-xl">
      <Carousel className="max-w-site-wrapper mx-auto">
        <CarouselContent>
          <CarouselItem>
            <iframe
              src="https://www.youtube.com/embed/uurDRDkYzbw?si=GHWQuJ3_WfgOmyot"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-video rounded-3xl shadow-md"
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <iframe
              src="https://www.youtube.com/embed/RRQF2mpLzT0?si=1P0yj-tS0Fpxzbus"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-video rounded-3xl shadow-md"
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <iframe
              src="https://www.youtube.com/embed/w0jkDCzSkRI?si=Mle0rj7_ODlGzbru"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-video rounded-3xl shadow-md"
            ></iframe>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
