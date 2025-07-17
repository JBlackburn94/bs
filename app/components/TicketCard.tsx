interface TicketCardProps {
  venue?: string;
  city?: string;
  country?: string;
  date?: string;
  link?: string;
  image?: string;
  alt?: string;
}

export default function TicketCard(props: TicketCardProps) {
  return (
    <div className="ticket-card rounded-3xl grid grid-cols-1 backdrop-blur-xl border border-white/20 grid-rows-8 overflow-hidden shadow-md h-[500px] w-[350px]">
      <div className="relative overflow-hidden row-span-5">
        <img
          src={props.image}
          alt={props.alt}
          className="absolute top-0 left-0"
        />
      </div>
      <ul className="row-span-3 text-black p-5 text-lg">
        <li className="font-semibold text-xl">{props.venue}</li>
        <li>{props.date}</li>
        <li className="flex gap-2 items-center">
          <span>{props.city}, </span>
          <span>{props.country}</span>
        </li>
      </ul>
      <a
        href={props.link}
        className="justify-self-center bg-black font-bold text-xl hover:bg-black/80 hover:-translate-y-2 transition ease-in-out duration-200 text-white py-2 px-3 mb-5 rounded-lg cursor-pointer"
        target="_blank"
      >
        Tickets
      </a>
    </div>
  );
}
