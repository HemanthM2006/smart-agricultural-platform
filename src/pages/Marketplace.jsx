// src/pages/Marketplace.jsx

import ListingCard from "../components/ListingCard"

export default function Marketplace() {
  return (
    <div className="market-page">
      <header className="page-header">
        <h1>Farmer Marketplace</h1>
        <p className="page-subtitle">
          List your harvested crops and connect directly with buyers
        </p>
      </header>

      <div className="card market-form-card">
        <h3>List a New Crop</h3>

        <div className="form-grid">
          <div className="form-group">
            <label>Crop Name</label>
            <input placeholder="Eg: Wheat" />
          </div>

          <div className="form-group">
            <label>Quantity Available</label>
            <input placeholder="Eg: 25 Quintals" />
          </div>

          <div className="form-group">
            <label>Price per Unit</label>
            <input placeholder="Eg: ₹2300 / Quintal" />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input placeholder="Eg: 9XXXXXXXXX" />
          </div>
        </div>

        <button className="primary-btn">List Crop</button>
      </div>

      <section className="market-listings">
        <h2>Available Listings</h2>

        <div className="grid">
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </section>
    </div>
  )
}
