function ContactModal({ type, contact, selectedProduct, whatsappMessage, onClose }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <button className="close-button modal-close" type="button" onClick={onClose} aria-label="Close">
          x
        </button>
        <p className="eyebrow">{type === 'email' ? 'Email Us' : 'WhatsApp Us'}</p>
        <h2 id="modal-title">
          {type === 'email' ? 'Send your stationery enquiry' : 'Start a quick WhatsApp conversation'}
        </h2>
        <p>
          Share your requirement and Trivars can guide you on product details, bulk pricing, branded stationery, and
          delivery timelines.
        </p>
        {selectedProduct && <p className="selected-product">Selected product: {selectedProduct}</p>}

        <form className="modal-form">
          <input type="text" placeholder="Full name" />
          <input type="tel" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
          <select defaultValue="">
            <option value="" disabled>
              Select enquiry type
            </option>
            <option>Corporate stationery</option>
            <option>Printing services</option>
            <option>Bulk office supplies</option>
            <option>Executive gifting</option>
          </select>
          <textarea rows="4" placeholder="Tell us what product or quantity you need" />
        </form>

        <div className="modal-actions">
          {type === 'email' ? (
            <a
              className="primary-button"
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry for ${selectedProduct || 'stationery products'}`)}`}
            >
              Continue with email
            </a>
          ) : (
            <a
              className="primary-button"
              href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Continue on WhatsApp
            </a>
          )}
          <span className="contact-hint">
            Replace the contact details in `src/data/siteData.js` with your final stationery business details.
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
