import SafeImage from './components/SafeImage';
import { profile, about, facts, skills, projects } from './data';

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume" className="nav-cta">
            Resume
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="tag">{profile.stack}</p>
            <h1>
              Hi, I am {profile.name}.
              <br />
              <span>{profile.role}.</span>
            </h1>
            <p className="value">{profile.value}</p>
            <div className="actions">
              <a className="btn primary" href="#projects">
                View projects
              </a>
              <a className="btn ghost" href={profile.resume} download>
                Download resume
              </a>
            </div>
          </div>
          <div className="avatar">
            <SafeImage
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="avatar-img"
              fallback={profile.name.charAt(0)}
            />
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="about">
            <div className="about-text">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="inner">
            <h2>Skills</h2>
            <div className="skill-grid">
              {skills.map((s) => (
                <div className="skill-card" key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    {s.learning &&
                      s.learning.map((item) => (
                        <li key={item} className="learning">
                          {item} <small>learning</small>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <SafeImage
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  className="shot"
                  fallback={p.title}
                />
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p className="why">{p.why}</p>
                  <ul className="feats">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <ul className="chips">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {(p.live || p.code) && (
                    <div className="actions">
                      {p.live && (
                        <a
                          className="btn primary small"
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live demo
                        </a>
                      )}
                      {p.code && (
                        <a
                          className="btn ghost small"
                          href={p.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="inner">
            <h2>Contact</h2>
            <p className="lead">
              Want to talk about a project or an opportunity? Reach out on any of these.
            </p>
            <div className="contact-grid">
              <a className="contact-card" href={`mailto:${profile.email}`}>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>
              <a
                className="contact-card"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </a>
              <a
                className="contact-card"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <strong>See my code</strong>
              </a>
            </div>
          </div>
        </section>

        <section id="resume" className="section resume">
          <h2>Resume</h2>
          <p className="lead">One page, always up to date.</p>
          <a className="btn primary" href={profile.resume} download>
            Download resume (PDF)
          </a>
        </section>
      </main>

      <footer className="footer">
        © 2026 {profile.name} · {profile.location}
      </footer>
    </>
  );
}
