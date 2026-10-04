import { createFileRoute } from "@tanstack/react-router";
import { BookNow, TideNav, tideFonts } from "@/lib/booking";
import "../tide.css";

const services = [
  {
    name: "Fade or classic",
    price: "42",
    detail:
      "Not a mall cut. Short styles and precision fades, shaped to the person in the chair. Brow, ear, and nose as needed.",
  },
  {
    name: "Beard and cut",
    price: "51",
    detail:
      "The beard brought exactly where you want it, with the haircut. Brow, ears, and nose included.",
  },
  {
    name: "Medium and flow",
    price: "55",
    detail:
      "Longer hair, including fluffy and flow. Feather razor, clippers, or scissors, keeping the length you want. Brows, ears, and styling included.",
  },
  {
    name: "The Deluxe",
    price: "89",
    detail:
      "The full groom. Precision cut and beard, hot towels, shampoo, straight-razor lineup and neck shave, styling, then a facial and scalp massage. You leave sharp, and you feel it.",
  },
  {
    name: "Military and first responders",
    price: "35",
    detail: "A thank-you rate. Brow, nose, and ear trim as needed.",
  },
  {
    name: "Seniors and veterans",
    price: "35",
    detail: "Brow, nose, and ear trim as needed.",
  },
  {
    name: "Kids under 11",
    price: "35",
    detail:
      "Any kind of kids cut. Patient with neurodivergent children. The aim is a chair that feels easy, and a look they feel good about.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rising Tide Barbers" },
      {
        name: "description",
        content: "Cuts, beards, the Deluxe, and service rates at Rising Tide Barbers in Parksville.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: tideFonts },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="rt">
      <div className="rt-cove" aria-hidden="true" />
      <TideNav />
      <main className="rt-book-page">
        <p className="rt-kicker">The work</p>
        <h1>Services.</h1>
        <ul className="rt-menu">
          {services.map((service, index) => (
            <li key={service.name}>
              <span className="rt-idx">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.name}</h3>
              <p>{service.detail}</p>
              <span className="rt-price">${service.price}</span>
            </li>
          ))}
        </ul>
        <BookNow />
      </main>
    </div>
  );
}
