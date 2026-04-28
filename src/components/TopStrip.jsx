function TopStrip({ contact, onOpenEmail }) {
  return (
    <div className="top-strip">
      <span>Bulk stationery enquiries welcome</span>
      <a href={`mailto:${contact.email}`}>Email</a>
      <button type="button" onClick={onOpenEmail}>
        Request a quote
      </button>
    </div>
  )
}

export default TopStrip
