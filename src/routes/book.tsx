import { createFileRoute } from "@tanstack/react-router";
import { SquareBooking, TideNav, tideFonts } from "@/lib/booking";
import "../tide.css";

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
      { rel: "stylesheet", href: tideFonts },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="rt">
      <div className="rt-cove" aria-hidden="true" />
      <TideNav />
      <main className="rt-book-page">
        <p className="rt-kicker">Parksville</p>
        <h1>Book now.</h1>
        <SquareBooking />
      </main>
    </div>
  );
}
