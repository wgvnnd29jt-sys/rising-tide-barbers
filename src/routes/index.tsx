import { createFileRoute } from "@tanstack/react-router";
import { BookNow, TideNav, tideFonts } from "@/lib/booking";
import "../tide.css";

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
      { rel: "stylesheet", href: tideFonts },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="rt">
      <div className="rt-cove" aria-hidden="true" />
      <TideNav />

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
          <p className="rt-kicker">Parksville</p>
          <h1>
            Rising Tide
            <span>Barbers</span>
          </h1>
          <p className="rt-lead">An ode to our ancient craft.</p>
          <BookNow big />
        </div>
      </section>

      <section className="rt-section" id="room">
        <div className="rt-film">
          {Array.from({ length: 12 }, (_, i) => {
            const n = String(i + 1).padStart(2, "0");
            return <img key={n} src={`/tide/site-${n}.jpg`} alt="Work from Rising Tide Barbers." />;
          })}
        </div>
      </section>
    </div>
  );
}
