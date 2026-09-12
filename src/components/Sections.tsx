import { resume } from '../data/resume'

export function Summary() {
  return (
    <section className="section" id="about">
      <div className="inner">
        <h2>Professional summary</h2>
        <p className="summary-text">{resume.summary}</p>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="inner">
        <h2>Technical skills</h2>
        <div className="skill-groups">
          {resume.skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="chip">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="inner">
        <h2>Professional experience</h2>
        <ol className="jobs">
          {resume.experience.map((job) => (
            <li className="job-card" key={`${job.company}-${job.period}`}>
              <div className="job-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <p className="job-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </p>
              </div>
              <ul className="bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section alt" id="education">
      <div className="inner">
        <h2>Education</h2>
        <div className="edu-grid">
          {resume.education.map((item) => (
            <article className="edu-card" key={item.school}>
              <h3>{item.degree}</h3>
              <p className="edu-school">{item.school}</p>
              <p>
                {item.details} · {item.graduated}
              </p>
              <p>{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const { contact } = resume

  return (
    <section className="section" id="contact">
      <div className="inner">
        <h2>Contact</h2>
        <p className="contact-lead">
          Reach out for SDET, automation, and quality engineering conversations.
        </p>
        <ul className="contact-list">
          <li>
            <span>Phone</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </li>
          <li>
            <span>Email</span>
            <a href={contact.emailHref}>{contact.email}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedinLabel}
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.githubLabel}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export function Footer() {
  const { name, contact } = resume

  return (
    <footer className="site-footer">
      <div className="inner footer-inner">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <p className="footer-links">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <a
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={contact.githubHref} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
