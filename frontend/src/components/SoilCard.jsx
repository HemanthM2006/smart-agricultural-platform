// frontend/src/components/SoilCard.jsx
export default function SoilCard() {
  return (
    <div className="card">
      <h3>Soil Summary</h3>

      <p>
        <strong>pH Level:</strong> 6.7
      </p>

      <p>
        <strong>Moisture:</strong> 44%
      </p>

      <p>
        <strong>Temperature:</strong> 29°C
      </p>

      <p style={{ marginTop: "12px", color: "#2e7d32", fontWeight: "bold" }}>
        Soil condition is suitable for most crops
      </p>
    </div>
  )
}
