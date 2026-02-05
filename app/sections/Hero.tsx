import Image from "next/image";
import Link from "next/link";
import tour from "@/public/bs-headline-1.jpg";

export default function Hero() {
  return (
    <section className="w-full max-w-site-inner mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
            <Image src={tour} alt="Beauty School tour" className="max-w-1/2 max-md:max-w-full"/>
            <p className="text-xl uppercase">From Now On - Live 2026!</p>
            <Link className="bg-orange text-white py-3 px-4 rounded-xl" href="https://www.seetickets.com/tour/beauty-school?aff=id1google&src=googlead&inf=googlead&utm_source=google&utm_medium=cpc&utm_campaign=ar_Rock_tour_channable&utm_agid=186767315957&utm_term=beauty%20school%20tickets&creative=778300907943&device=c&placement=&gad_source=1&gad_campaignid=22745038233&gclid=Cj0KCQiAnJHMBhDAARIsABr7b84EJeVvKpVlJEr3_pu9-tQjZpKCYPx2FKlaXv_TQe0fNEjMJ0Y_oUEaAqBPEALw_wcB" target="_blank">Tickets</Link>
        </div>
    </section>
  );
}
