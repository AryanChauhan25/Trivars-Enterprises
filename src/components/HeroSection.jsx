import { highlights } from '../data/siteData.js'

function HeroSection({ onOpenEmail, onOpenWhatsapp }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Complete stationery solutions for businesses</p>
        <h2>Search products and connect instantly through WhatsApp or email.</h2>
        <p className="lead">
          This version follows the lighter Aryan Clinic interaction style: no full login flow, just a polished
          catalog, floating contact actions, and fast enquiry popups for customers who want product details, pricing,
          or bulk-order guidance.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#catalog">
            Browse catalog
          </a>
          <button className="ghost-button" type="button" onClick={onOpenWhatsapp}>
            Quick WhatsApp enquiry
          </button>
        </div>

        <div className="hero-secondary-cta">
          <button type="button" onClick={onOpenEmail}>
            Request pricing by email
          </button>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-card panel-feature">
          <p className="panel-label">Why teams choose Trivars</p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel-grid">
          <article className="panel-card accent-card">
            <p className="panel-label">Enquiry-first</p>
            <strong>WhatsApp and email without signup friction</strong>
            <span>Customers can view products freely and contact you only when they are ready.</span>
          </article>

          <article className="panel-card">
            <p className="panel-label">Search-ready</p>
            <strong>Find products by name, category, or use</strong>
            <span>Live filtering helps visitors move from browsing to enquiry much faster.</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
