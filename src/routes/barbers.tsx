import { createFileRoute } from "@tanstack/react-router";
import { BookNow, TideNav, tideFonts } from "@/lib/booking";
import "../tide.css";

export const Route = createFileRoute("/barbers")({
  head: () => ({
    meta: [
      { title: "Darren and Dan — Rising Tide Barbers" },
      {
        name: "description",
        content: "Darren Lundquist and Dan the Barber at Rising Tide in Parksville.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: tideFonts },
    ],
  }),
  component: BarbersPage,
});

function BarbersPage() {
  return (
    <div className="rt">
      <div className="rt-cove" aria-hidden="true" />
      <TideNav />
      <main className="rt-book-page">
        <p className="rt-kicker">The chairs</p>
        <h1>Darren and Dan.</h1>
        <div className="rt-team">
          <figure>
            <img src="/tide/d1.jpg" alt="Darren Lundquist, owner of Rising Tide Barbers." />
            <figcaption>
              <strong>Darren Lundquist</strong>
              <p>
                Owner. A lifelong surfer who spent half his life teaching people to ride waves, then found the same precision in a haircut. He opened Tofino Barber at the end of 2018, the only shop in a town of about 2,500, ran it for years, and later brought Rising Tide to Parksville.
              </p>
              <p>
                The cut matters. So does the person in the chair. He is patient with everyone who sits down, including neurodivergent clients, and he would rather you leave confident than merely trimmed.
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src="/tide/d3.jpg" alt="Dan the Barber, at Rising Tide." />
            <figcaption>
              <strong>Dan the Barber</strong>
              <p>
                Born in England, raised in Parksville. Before the chair he managed nightclubs and liquor stores, worked in corrections, and spent his younger years on the road as a drummer.
              </p>
              <p>
                He trained at Rising Tide Barber School and stayed on part-time. A sharp eye, a calm hand, and a real conversation while the cut gets done. Old cars are a favourite subject. The clients keep coming back.
              </p>
            </figcaption>
          </figure>
        </div>
        <BookNow />
      </main>
    </div>
  );
}
