// src/pages/Marketplace.jsx

import ListingCard from "../components/ListingCard"

export default function Marketplace() {
  return (
    <>
      <h2>Farmer Marketplace</h2>

      <input placeholder="Crop Name" />
      <input placeholder="Quantity Available" />
      <input placeholder="Price per Unit" />
      <input placeholder="Contact Number" />
      <button>List Crop</button>

      <h2>Available Listings</h2>

      <div className="grid">
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </>
  )
}
