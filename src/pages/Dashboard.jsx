// src/pages/Dashboard.jsx

import SoilCard from "../components/SoilCard"
import CarbonInsight from "../components/CarbonInsight"
import CropRecommendation from "../components/CropRecommendation"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Farmer Dashboard</h1>
        <p className="page-subtitle">
          Live soil conditions, sustainability insights, and smart crop suggestions
        </p>
      </header>

      <section className="dashboard-section">
        <div className="grid">
          <SoilCard />
          <CarbonInsight />
        </div>
      </section>

      <section className="dashboard-section">
        <h2>AI Crop Recommendations</h2>
        <CropRecommendation />
      </section>
    </div>
  )
}
