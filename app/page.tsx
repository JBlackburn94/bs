import { ReactLenis, useLenis } from "lenis/react";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Tickets from "./sections/Tickets";
import Merch from "./sections/Merch";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center max-w-site-wrapper m-auto">
        <ReactLenis root />
        <BackgroundVideo />
        <Hero />
        <Tickets />
        <Merch />
        <Contact />
      </main>
    </div>
  );
}
