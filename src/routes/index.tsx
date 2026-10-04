import { createFileRoute } from "@tanstack/react-router";
import { BookNow } from "@/lib/booking";
import "../tide.css";

const services = [
  { name: "Fade or classic", price: "42", detail: "Short styles. Precision fades, shaped to the person." },
  { name: "Beard and cut", price: "51", detail: "The beard lined to the haircut." },
  { name: "Medium and flow", price: "55", detail: "Longer hair, fluffy and flow. Razor, clipper, or scissor." },
  { name: "The Deluxe", price: "89", detail: "Cut, beard, hot towel, shampoo, razor lineup, massage." },
  { name: "Service rate", price: "35", detail: "Military, first responders, seniors, veterans, kids under 11." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rising Tide Barbers — Parksville" },
      {
        name: "description",
        content:
          "Rising Tide Barbers in Parksville. Precision cuts, beards, and the Deluxe. An ode to the ancient craft.",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Rising Tide Barbers",
          url: "https://www.risingtidebarber.com/",
        },
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="rt">
      <div className="rt-cove" aria-hidden="true" />
      <header className="rt-nav">
        <a className="rt-mark" href="#top">
          Rising Tide
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#barbers">Barbers</a>
        </nav>
        <BookNow />
      </header>

      <section className="rt-hero" id="top">
        <img src="/tide/shop.jpg" alt="The Rising Tide room. Black chairs, gold hardware, purple light in the ceiling." />
        <div className="rt-veil" />
        <div className="rt-frame" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="rt-hero-copy">
          <p className="rt-kicker">49.319° N · 124.316° W · Parksville</p>
          <h1>
            Rising Tide
            <span>Barbers</span>
          </h1>
          <p className="rt-lead">An ode to our ancient craft.</p>
          <BookNow big />
        </div>
      </section>

      <section className="rt-section alt" id="services">
        <p className="rt-kicker">Services</p>
        <h2>Services.</h2>
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
      </section>

      <section className="rt-section" id="room">
        <div className="rt-film">
          {Array.from({ length: 12 }, (_, i) => {
            const n = String(i + 1).padStart(2, "0");
            return <img key={n} src={`/tide/site-${n}.jpg`} alt="Work from Rising Tide Barbers." />;
          })}
        </div>
      </section>

      <section className="rt-section alt" id="barbers">
        <p className="rt-kicker">The chairs</p>
        <h2>Darren and Dan.</h2>
        <div className="rt-team">
          <figure>
            <img src="/tide/d1.jpg" alt="Darren Lundquist, owner of Rising Tide Barbers." />
            <figcaption>
              <strong>Darren Lundquist</strong>
              <span>Owner. A surfer who opened Tofino Barber, then this room in Parksville. Patient in the chair, precise with the cut.</span>
            </figcaption>
          </figure>
          <figure>
            <img src="/tide/d3.jpg" alt="Dan the Barber, at Rising Tide." />
            <figcaption>
              <strong>Dan the Barber</strong>
              <span>Raised in Parksville. Trained at Rising Tide Barber School. A calm hand and a loyal chair.</span>
            </figcaption>
          </figure>
        </div>
        <BookNow />
      </section>
    </div>
  );
}
