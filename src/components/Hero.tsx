import { resume } from '../data/resume'

export function Hero() {
  const { name, title, contact, resumePdf } = resume

  return (
    <section className="hero" id="top">
      <div className="inner">
        <p className="eyebrow">Looking for SDET roles</p>
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="hero-contact">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <span aria-hidden="true"> · </span>
          <a href={contact.emailHref}>{contact.email}</a>
        </p>
        <p className="hero-contact">
          <a
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.linkedinLabel}
          </a>
          <span aria-hidden="true"> · </span>
          <a href={contact.githubHref} target="_blank" rel="noopener noreferrer">
            {contact.githubLabel}
          </a>
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            View work
          </a>
          <a
            className="btn btn-secondary"
            href={resumePdf}
            download="Sakthivel_Nathan_Automation_Tester.pdf"
          >
            Download resume
          </a>
          <a className="btn btn-ghost" href={contact.emailHref}>
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
