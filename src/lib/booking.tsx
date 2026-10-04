import { Link } from "@tanstack/react-router";

/** Square Appointments. Their booking link, inlaid on /book. */
export const SQUARE_EMBED_URL = "https://squareup.com/appointments/book/LE4C4SBFCTD7H";

export function BookNow({ big = false }: { big?: boolean }) {
  return (
    <Link to="/book" className={big ? "rt-book solid big" : "rt-book solid"}>
      Book now
    </Link>
  );
}

export function SquareBooking() {
  if (!SQUARE_EMBED_URL) {
    return (
      <div className="rt-square" data-square-booking="placeholder">
        <p className="rt-kicker">Square</p>
        <p>The booking app will open in this frame.</p>
      </div>
    );
  }

  return (
    <iframe
      className="rt-square-frame"
      src={SQUARE_EMBED_URL}
      title="Book an appointment at Rising Tide"
    />
  );
}
