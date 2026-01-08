// src/components/ListingCard.jsx

export default function ListingCard() {
  return (
    <div className="card listing-card">
      <div className="listing-header">
        <h3>Wheat</h3>
        <span className="listing-tag">For Sale</span>
      </div>

      <div className="listing-details">
        <div className="listing-row">
          <span className="label">Quantity</span>
          <span className="value">20 Quintals</span>
        </div>

        <div className="listing-row">
          <span className="label">Price</span>
          <span className="value">₹2400 / Quintal</span>
        </div>

        <div className="listing-row">
          <span className="label">Contact</span>
          <span className="value">9XXXXXXXXX</span>
        </div>
      </div>

      <button className="listing-btn">Contact Farmer</button>
    </div>
  )
}
