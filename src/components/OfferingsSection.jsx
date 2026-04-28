import { offerings } from '../data/siteData.js'

function OfferingsSection() {
  return (
    <section className="section" id="offerings">
      <div className="section-heading">
        <p className="eyebrow">Offerings</p>
        <h3>Built for procurement teams, founders, and growing offices.</h3>
      </div>

      <div className="offering-grid">
        {offerings.map((offering) => (
          <article className="offering-card" key={offering.title}>
            <div className="card-index" aria-hidden="true">
              {offering.title.slice(0, 1)}
            </div>
            <h4>{offering.title}</h4>
            <p>{offering.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OfferingsSection
