import { createFileRoute } from "@tanstack/react-router";
import { BookNow, SquareBooking } from "@/lib/booking";
import "../tide.css";

const fonts =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book now — Rising Tide Barbers" },
      {
        name: "description",
        content: "Book a chair at Rising Tide Barbers in Parksville.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: fonts },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="rt">
      <div className="rt-cove" aria-hidden="true" />
      <header className="rt-nav">
        <a className="rt-mark" href="/">
          Rising Tide
        </a>
        <nav>
          <a href="/#services">Services</a>
          <a href="/#barbers">Barbers</a>
        </nav>
        <BookNow />
      </header>
      <main className="rt-book-page">
        <p className="rt-kicker">Parksville</p>
        <h1>Book now.</h1>
        <SquareBooking />
      </main>
    </div>
  );
}
