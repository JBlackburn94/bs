import TicketCard from "../components/TicketCard";

const ticketInfo = [
  {
    city: "Bristol",
    venue: "Thekla",
    date: "22/10/2025",
    country: "UK",
    image: "/mouth-culture-poster.jpg",
    alt: "Mouth Culture poster",
    link: "https://www.seetickets.com/event/mouth-culture/thekla/3415052",
  },
  {
    city: "Birmingham",
    venue: "Asylum",
    date: "23/10/2025",
    country: "UK",
    image: "/mouth-culture-poster.jpg",
    alt: "Mouth Culture poster",
    link: "https://www.seetickets.com/event/mouth-culture/asylum/3414998",
  },
  {
    city: "London",
    venue: "The Garage",
    date: "24/10/2025",
    country: "UK",
    image: "/mouth-culture-poster.jpg",
    alt: "Mouth Culture poster",
    link: "https://www.seetickets.com/event/mouth-culture/the-garage/3415053",
  },
  {
    city: "Manchester",
    venue: "Academy 3",
    date: "26/10/2025",
    country: "UK",
    image: "/mouth-culture-poster.jpg",
    alt: "Mouth Culture poster",
    link: "https://www.seetickets.com/event/mouth-culture/manchester-academy-3/3415005",
  },
  {
    city: "Glasgow",
    venue: "G2",
    date: "27/10/2025",
    country: "UK",
    image: "/mouth-culture-poster.jpg",
    alt: "Mouth Culture poster",
    link: "https://www.seetickets.com/event/mouth-culture/g2/3419125",
  },
];

export default function Tickets() {
  return (
    <section
      className="flex justify-start items-center flex-col w-full gap-10 max-lg:gap-5 scroll-mt-2"
      id="tickets"
    >
      <div className="flex flex-wrap justify-center gap-10">
        {ticketInfo.map((ticket) => (
          <TicketCard
            key={ticket.date}
            city={ticket.city}
            venue={ticket.venue}
            date={ticket.date}
            country={ticket.country}
            image={ticket.image}
            alt={ticket.alt}
            link={ticket.link}
          />
        ))}
      </div>
    </section>
  );
}
