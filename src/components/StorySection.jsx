import storyBackground from '../assets/background.png'

function StorySection({ descriptionText }) {
  return (
    <section
      className="section story-band"
      style={{ '--story-bg-image': `url(${storyBackground})` }}
    >
      <div className="story-copy">
        <p className="eyebrow">About Us</p>
        <h2>Your Reliable Partner for Corporate Stationery Solutions</h2>
        <p>{descriptionText}</p>
      </div>

      <div className="quote-card">
        <p>
          "We provide high-quality corporate stationery and office supplies with a focus on reliability, affordability, and long-term business relationships."
        </p>
        <span>Trivars Enterprises</span>
      </div>
    </section>
  )
}

export default StorySection
