// frontend/src/pages/Dashboard.jsx
import SoilCard from "../components/SoilCard"
import CropRecommendation from "../components/CropRecommendation"
import CarbonInsight from "../components/CarbonInsight"

export default function Dashboard() {
  return (
    <>
      <h2>Farmer Dashboard</h2>

      <div className="grid">
        <SoilCard />
        <CarbonInsight />
      </div>

      <h2 style={{ marginTop: "32px" }}>
        AI Crop Recommendations
      </h2>

      <CropRecommendation />
    </>
  )
}
