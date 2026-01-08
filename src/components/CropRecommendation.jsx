// src/components/CropRecommendation.jsx

export default function CropRecommendation() {
  return (
    <div className="grid">
      <div className="card">
        <h3>Rice</h3>
        <p>Suitability Score: 90</p>
        <p>High demand crop</p>
      </div>

      <div className="card">
        <h3>Maize</h3>
        <p>Suitability Score: 82</p>
        <p>Moderate water requirement</p>
      </div>

      <div className="card">
        <h3>Millet</h3>
        <p>Suitability Score: 76</p>
        <p>Climate resilient</p>
      </div>
    </div>
  )
}
