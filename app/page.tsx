import { ReactLenis, useLenis } from "lenis/react";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Tickets from "./sections/Tickets";
import Merch from "./sections/Merch";
import Contact from "./sections/Contact";
import Watch from "./sections/Watch";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center max-w-site-wrapper mx-auto gap-16 mt-4 max-sm:gap-10 font-bold">
        <ReactLenis root />
        <BackgroundVideo />
        <Hero />
        <Watch />
        <Contact />
      </main>
    </div>
  );
}
