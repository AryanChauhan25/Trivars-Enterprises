function FloatingActions({ contact, whatsappMessage, onOpenEmail }) {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        className="float-whatsapp"
        href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <button className="float-email" type="button" onClick={onOpenEmail}>
        Email
      </button>
    </div>
  )
}

export default FloatingActions
