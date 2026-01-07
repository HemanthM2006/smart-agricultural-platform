// frontend/src/pages/Marketplace.jsx
import ListingCard from "../components/ListingCard"

export default function Marketplace() {
  return (
    <>
      <h2>Direct Farmer Marketplace</h2>

      <p style={{ color: "#607d8b", marginBottom: "16px" }}>
        Farmers can list harvested crops here and directly connect with buyers.
      </p>

      <div className="card form-card">
        <input placeholder="Crop Name" />
        <input placeholder="Quantity Available (eg: 20 Quintals)" />
        <input placeholder="Price per Unit (eg: ₹2200 / Quintal)" />
        <input placeholder="Contact Number" />
        <button>List Crop</button>
      </div>

      <h2 style={{ marginTop: "32px" }}>
        Available Listings
      </h2>

      <div className="grid">
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </>
  )
}
