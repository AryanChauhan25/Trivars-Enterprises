function SiteFooter({
  contact,
  footerLinks,
  whatsappMessage,
  selectedProduct,
  onOpenEmail,
  onOpenWhatsapp,
}) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <section className="footer-brand">
            <p className="eyebrow">Trivars Enterprises</p>
            <h2>Business stationery, printing, and office supply support in one place.</h2>
            <p>
              We provide high-quality stationery, printing services, and bulk office supplies for businesses. Contact us for pricing, bulk orders, or customized solutions.
            </p>
            <p className="footer-copyright">© 2026 Trivars Enterprises. All rights reserved.</p>
          </section>

          <section className="footer-block" id="footer-contact">
            <h3>Contact</h3>
            <a href={`tel:${contact.whatsappLabel.replace(/\s+/g, '')}`}>{contact.whatsappLabel}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <button type="button" onClick={onOpenEmail}>
              Request a quote
            </button>
          </section>

          <section className="footer-block">
            <h3>Quick Links</h3>
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </section>

          <section className="footer-block">
            <h3>Customer Actions</h3>
            <a
              href={`https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp enquiry
            </a>
            <button type="button" onClick={onOpenWhatsapp}>
              Product support
            </button>
            <button type="button" onClick={onOpenEmail}>
              Email pricing request
            </button>
          </section>
        </div>

        <div className="footer-bottom">
          <div className="footer-meta">
            <h3>Need help with bulk orders?</h3>
            <p>Share quantities, branding needs, and delivery expectations. Trivars can guide the best-fit mix.</p>
          </div>
          <div className="footer-cta-group">
            <a className="ghost-button" href="#catalog">
              Browse products
            </a>
            <button className="primary-button" type="button" onClick={onOpenEmail}>
              Start enquiry
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
