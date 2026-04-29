import { highlights } from '../data/siteData.js'

function HeroSection({ onOpenEmail, onOpenWhatsapp }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Corporate Stationery & Office Supplies</p>
        <h1>Your Trusted Partner for Corporate Stationery & Bulk Office Supplies</h1>
        <p className="lead">
          Explore a wide range of office essentials, compare products, and connect with us instantly for bulk orders, pricing, or customized requirements.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#catalog">
            View Products
          </a>
          <button className="primary-button" type="button" onClick={onOpenWhatsapp}>
            Enquire on WhatsApp
          </button>
        </div>

        <div className="hero-secondary-cta">
          <button className="primary-button" type="button" onClick={onOpenEmail}>
            Request a Quote
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
            <p className="panel-label">Easy Enquiry</p>
            <strong>Connect instantly via WhatsApp or email</strong>
            <span>Browse products and contact us directly for pricing, bulk orders, or custom requirements.</span>
          </article>

          <article className="panel-card">
            <p className="panel-label">Wide Product Range</p>
            <strong>Stationery for every business need</strong>
            <span>Explore categories and find the right office supplies for your organization.</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
