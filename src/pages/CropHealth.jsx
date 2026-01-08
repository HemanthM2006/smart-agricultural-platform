// src/pages/CropHealth.jsx

export default function CropHealth() {
  const checkHealth = () => {
    alert("Analysis complete: Mild nutrient deficiency detected")
  }

  return (
    <>
      <h2>Crop Health Detection</h2>

      <input type="file" />
      <button onClick={checkHealth}>Analyze Crop Image</button>

      <div className="card">
        <p>Status: Needs attention</p>
        <p>Suggestion: Add organic nitrogen fertilizer</p>
      </div>
    </>
  )
}
