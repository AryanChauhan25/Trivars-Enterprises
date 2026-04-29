function TopStrip({ contact, onOpenEmail }) {
  return (
    <div className="top-strip">
      <span>Bulk stationery enquiries welcome</span>
      <button className="primary-button" type="button" onClick={onOpenEmail}>
        Request a quote
      </button>
    </div>
  )
}

export default TopStrip
