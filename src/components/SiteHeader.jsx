import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.webp'

function SiteHeader({ contact, whatsappMessage, onOpenEmail }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!isMenuOpen) return
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="topbar" ref={headerRef}>
      <a className="brand-lockup brand-home" href="#top" aria-label="Go to homepage">
        <img className="brand-logo" src={logo} alt="Trivars Enterprises logo" />
        <div>
          <p className="eyebrow">Trivars Enterprises</p>
          <h1>Corporate stationery that keeps business moving.</h1>
        </div>
      </a>

      <div className="topbar-right">
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <a href="#catalog" onClick={closeMenu}>
            Products
          </a>
          <a href="#offerings" onClick={closeMenu}>
            Services
          </a>
          <a href="#workflow" onClick={closeMenu}>
            Workflow
          </a>
          <a href="#footer-contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="topbar-actions">
          <a
            className="primary-button"
            href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <button className="primary-button" type="button" onClick={onOpenEmail}>
            Email enquiry
          </button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
