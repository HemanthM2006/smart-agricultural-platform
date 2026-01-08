// src/pages/Dashboard.jsx

import SoilCard from "../components/SoilCard"
import CarbonInsight from "../components/CarbonInsight"
import CropRecommendation from "../components/CropRecommendation"

export default function Dashboard() {
  return (
    <>
      <h2>Farmer Dashboard</h2>

      <div className="grid">
        <SoilCard />
        <CarbonInsight />
      </div>

      <h2>AI Crop Recommendations</h2>
      <CropRecommendation />
    </>
  )
}
