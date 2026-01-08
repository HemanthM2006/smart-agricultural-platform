// src/components/CarbonInsight.jsx

export default function CarbonInsight() {
  return (
    <div className="card carbon-card">
      <div className="card-header">
        <h3>Carbon Capture Insight</h3>
        <span className="badge green">Eco</span>
      </div>

      <div className="carbon-list">
        <div className="carbon-item">
          <span className="carbon-crop">Millet</span>
          <span className="carbon-desc">Moderate CO₂ absorption, low water use</span>
        </div>

        <div className="carbon-item">
          <span className="carbon-crop">Paddy</span>
          <span className="carbon-desc">High CO₂ absorption, high water use</span>
        </div>

        <div className="carbon-item">
          <span className="carbon-crop">Maize</span>
          <span className="carbon-desc">Balanced carbon impact</span>
        </div>
      </div>

      <p className="carbon-note">
        Choosing climate-resilient crops helps reduce long-term environmental impact.
      </p>
    </div>
  )
}
