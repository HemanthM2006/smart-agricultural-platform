// src/components/CropRecommendation.jsx

export default function CropRecommendation() {
  return (
    <div className="grid crop-grid">
      <div className="card crop-card">
        <h3>Rice</h3>
        <div className="score">90 / 100</div>
        <p className="crop-desc">High market demand, suitable soil moisture</p>
        <p className="crop-note">Best for irrigated fields</p>
      </div>

      <div className="card crop-card">
        <h3>Maize</h3>
        <div className="score">82 / 100</div>
        <p className="crop-desc">Balanced yield with moderate water usage</p>
        <p className="crop-note">Good for mixed farming</p>
      </div>

      <div className="card crop-card">
        <h3>Millet</h3>
        <div className="score">76 / 100</div>
        <p className="crop-desc">Climate resilient and low input crop</p>
        <p className="crop-note">Ideal for dry regions</p>
      </div>
    </div>
  )
}
