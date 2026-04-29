function FloatingActions({ contact, whatsappMessage, onOpenEmail }) {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        className="primary-button float-whatsapp"
        href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <button className="primary-button float-email" type="button" onClick={onOpenEmail}>
        Email
      </button>
    </div>
  )
}

export default FloatingActions
