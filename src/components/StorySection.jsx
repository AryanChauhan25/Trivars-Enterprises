function StorySection({ descriptionText }) {
  return (
    <section className="section story-band">
      <div className="story-copy">
        <p className="eyebrow">Positioning</p>
        <h3>A lighter, cleaner Trivars enquiry journey.</h3>
        <p>{descriptionText}</p>
      </div>

      <div className="quote-card">
        <p>
          "We provide complete corporate stationery and office supply solutions designed to meet the needs of
          businesses of all sizes."
        </p>
        <span>Core message adapted from trivarsenterprises.com</span>
      </div>
    </section>
  )
}

export default StorySection
