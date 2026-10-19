import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="not-found page-shell">
      <span className="eyebrow">Page not found</span>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>This address doesn’t lead to a page on our website.</p>
      <div className="action-row">
        <Link className="gmc-button" to="/">
          Back to home
        </Link>
        <Link className="gmc-button secondary" to="/contact">
          Contact GMC
        </Link>
      </div>
    </section>
  );
}
