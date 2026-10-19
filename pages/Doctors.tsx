import { Link } from "react-router-dom";
import { ArrowUpRight, HeartHandshake, Plus } from "lucide-react";
import { TEAMS } from "../data/teams";

export default function Doctors() {
  return (
    <div className="teams-page page-shell">
      <header className="teams-intro">
        <div>
          <span className="eyebrow">The people behind your care</span>
          <h1>
            Many teams.
            <br />
            One Goodwill.
          </h1>
        </div>
        <div className="teams-intro-aside">
          <HeartHandshake size={40} strokeWidth={1.3} />
          <p>
            From your first hello to the work behind the scenes, every team has
            a part in caring for you.
          </p>
        </div>
      </header>
      <div className="teams-section-label">
        <span>Meet our teams</span>
        <p>Staff and spaces from across GMC.</p>
      </div>
      <div className="teams-grid">
        {TEAMS.map((team) => (
          <article key={team.id} className={`team-card ${team.tone}`}>
            <figure className="team-photo">
              <img
                src={team.image}
                alt={team.alt}
                loading="lazy"
                width="1000"
                height="750"
              />
              <figcaption>{team.caption}</figcaption>
            </figure>
            <div className="team-copy">
              <h2>{team.name}</h2>
              <p>{team.description}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="teams-closing">
        <Plus size={43} strokeWidth={1.3} />
        <div>
          <h2>Different roles. Shared care.</h2>
          <p>
            Not sure where to start? Our desk will help you find the right team.
          </p>
        </div>
        <Link to="/contact" className="gmc-button">
          Talk to our desk <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
