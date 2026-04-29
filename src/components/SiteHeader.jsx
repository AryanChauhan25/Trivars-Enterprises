import logo from '../assets/logo.webp'

function SiteHeader({ contact, whatsappMessage, onOpenEmail }) {
  return (
    <header className="topbar">
      <a className="brand-lockup brand-home" href="#top" aria-label="Go to homepage">
        <img className="brand-logo" src={logo} alt="Trivars Enterprises logo" />
        <div>
          <p className="eyebrow">Trivars Enterprises</p>
          <h1>Corporate stationery that keeps business moving.</h1>
        </div>
      </a>

      <div className="topbar-right">
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#catalog">Catalog</a>
          <a href="#offerings">Offerings</a>
          <a href="#workflow">Workflow</a>
          <a href="#footer-contact">Contact</a>
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
