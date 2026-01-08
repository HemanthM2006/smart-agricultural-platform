// src/components/SoilCard.jsx

export default function SoilCard() {
  return (
    <div className="card soil-card">
      <div className="card-header">
        <h3>Soil Summary</h3>
        <span className="badge">Latest</span>
      </div>

      <div className="soil-metrics">
        <div className="soil-row">
          <span className="label">pH Level</span>
          <span className="value">6.8</span>
        </div>

        <div className="soil-row">
          <span className="label">Moisture</span>
          <span className="value">45%</span>
        </div>

        <div className="soil-row">
          <span className="label">Temperature</span>
          <span className="value">28°C</span>
        </div>
      </div>

      <p className="soil-note">
        Soil conditions are suitable for most seasonal crops.
      </p>
    </div>
  )
}
