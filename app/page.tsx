import Image from "next/image";
import logo from "@/public/stacked-logo-orange.png";
import bg from "@/public/bg.png";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center overflow-hidden">
        <Image
          src={bg}
          alt="Background image"
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />
        <section className="relative z-20 flex flex-col justify-center items-center min-h-screen w-full">
          <div className="flex">
            <Image src={logo} alt="Beauty School logo" className="max-w-96" />
          </div>
          <div>
            <Countdown />
          </div>
        </section>
      </main>
    </div>
  );
}
