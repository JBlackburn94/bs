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
    href: "https://www.seetickets.com/tour/beauty-school?aff=id1google&src=googlead&inf=googlead&utm_source=google&utm_medium=cpc&utm_campaign=ar_Rock_tour_channable&utm_agid=186767315957&utm_term=beauty%20school%20tickets&creative=778300907943&device=c&placement=&gad_source=1&gad_campaignid=22745038233&gclid=Cj0KCQiAnJHMBhDAARIsABr7b84EJeVvKpVlJEr3_pu9-tQjZpKCYPx2FKlaXv_TQe0fNEjMJ0Y_oUEaAqBPEALw_wcB",
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
