import Image from "next/image";
import logo from "@/public/stacked-logo-orange.png";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col justify-center items-center gap-5 max-lg:gap-2 h-screen w-full">
      <div className="flex">
        <Image src={logo} alt="Beauty School logo" className="max-w-96" />
      </div>
      <div></div>
    </section>
  );
}
