// frontend/src/components/CropRecommendation.jsx
export default function CropRecommendation() {
  return (
    <div className="grid">
      <div className="card">
        <h3>Rice 🌾</h3>

        <p>
          <strong>Suitability Score:</strong> 92 / 100
        </p>

        <p>
          Requires high water availability and fertile soil.
        </p>

        <p style={{ color: "#2e7d32", fontWeight: "bold", marginTop: "8px" }}>
          High market demand and stable income
        </p>
      </div>

      <div className="card">
        <h3>Maize 🌽</h3>

        <p>
          <strong>Suitability Score:</strong> 85 / 100
        </p>

        <p>
          Grows well in moderate climate with balanced nutrients.
        </p>

        <p style={{ color: "#2e7d32", fontWeight: "bold", marginTop: "8px" }}>
          Good yield with moderate input cost
        </p>
      </div>

      <div className="card">
        <h3>Millet 🌾</h3>

        <p>
          <strong>Suitability Score:</strong> 78 / 100
        </p>

        <p>
          Highly climate resilient and low water requirement crop.
        </p>

        <p style={{ color: "#2e7d32", fontWeight: "bold", marginTop: "8px" }}>
          Eco-friendly and suitable for dry regions
        </p>
      </div>
    </div>
  )
}
