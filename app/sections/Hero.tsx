import Image from "next/image";
import logo from "@/public/linear-logo-orange.png";
import fnoArtwork from "@/public/album-artwork.jpg";
import sdrLogo from "@/public/logo-sdr.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-site-inner mx-auto">
      <div className="flex flex-col gap-16 max-lg:gap-8">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/umPT7Hn3kpc?si=vWqHcq0qNBG8EqcK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full shadow-lg rounded-xl"
          ></iframe>
        </div>
        <div className="flex flex-row-reverse justify-between gap-4 max-lg:gap-1 max-lg:flex-col-reverse max-lg:justify-center">
          <div className="w-1/2 max-lg:w-full">
            <Image
              src={fnoArtwork}
              alt="From Now On Artwork"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 max-lg:w-full text-center gap-2">
            <Image src={logo} alt="Beauty School logo" className="max-w-logo" />
            <h2 className="text-orange font-bold text-4xl max-lg:text-2xl">
              New Album!
            </h2>
            <p className="font-medium text-xl">
              From Now On has been a long time coming and is easily the most
              honest collection of songs we have made so far as a group.
              It&apos;s heavier, darker and decidedly more Beauty School than
              ever before. We&apos;ve lived lot since Happiness and we are so
              excited for you to hear this record in full on “3rd October 2025.
              From us to you, &quot;From Now On&quot;.
            </p>
            <Link
              href={
                "https://slamdunk.world/collections/beauty-school-from-now-on"
              }
              target="_blank"
              className="bg-orange py-3 px-5 rounded-xl text-white uppercase mt-2"
            >
              Pre Order
            </Link>
            <Image
              src={sdrLogo}
              alt="Slam Dunk Records logo"
              className="max-w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
