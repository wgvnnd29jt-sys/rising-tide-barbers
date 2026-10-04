import { Link } from "@tanstack/react-router";

/** Square Appointments. Their booking link, inlaid on /book. */
export const SQUARE_EMBED_URL = "https://squareup.com/appointments/book/LE4C4SBFCTD7H";

export const tideFonts =
  "https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:ital,wght@0,500;1,500&family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap";

export function BookNow({ big = false }: { big?: boolean }) {
  return (
    <Link to="/book" className={big ? "rt-book solid big" : "rt-book solid"}>
      Book now
    </Link>
  );
}

export function TideNav() {
  return (
    <header className="rt-nav">
      <Link to="/" className="rt-mark">
        Rising Tide
      </Link>
      <nav>
        <Link to="/services">Services</Link>
        <Link to="/barbers">Barbers</Link>
      </nav>
      <BookNow />
    </header>
  );
}

export function SquareBooking() {
  return (
    <iframe
      className="rt-square-frame"
      src={SQUARE_EMBED_URL}
      title="Book an appointment at Rising Tide"
    />
  );
}
