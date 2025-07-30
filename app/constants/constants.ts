interface LinkType {
  name: string;
  href: string;
  target: string;
}

export const links: LinkType[] = [
  {
    name: "Home",
    href: "/",
    target: "_self",
  },
  {
    name: "Tickets",
    href: "https://www.ticketmaster.co.uk/beauty-school-tickets/artist/2269578",
    target: "_blank",
  },
  {
    name: "Merch",
    href: "https://beautyschooluk.bandcamp.com/merch",
    target: "_blank",
  },
  {
    name: "Pre Order",
    href: "https://slamdunk.world/collections/beauty-school-from-now-on",
    target: "_blank",
  },
  {
    name: "Watch",
    href: "#watch",
    target: "_self",
  },
  {
    name: "Contact",
    href: "#contact",
    target: "_self",
  },
];
