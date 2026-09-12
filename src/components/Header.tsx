import { useEffect, useState } from 'react'
import { resume } from '../data/resume'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="site-header">
      <div className="inner header-inner">
        <a className="logo" href="#top">
          SN
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={resume.resumePdf}
            download="Sakthivel_Nathan_Automation_Tester.pdf"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
