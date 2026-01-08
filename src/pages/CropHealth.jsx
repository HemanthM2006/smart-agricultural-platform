// src/pages/CropHealth.jsx

export default function CropHealth() {
  const checkHealth = () => {
    alert("Analysis complete: Mild nutrient deficiency detected")
  }

  return (
    <div className="health-page">
      <header className="page-header">
        <h1>Crop Health Detection</h1>
        <p className="page-subtitle">
          Upload a crop image to identify possible diseases or nutrient deficiencies
        </p>
      </header>

      <div className="card health-card">
        <div className="upload-section">
          <label className="upload-label">Upload Crop Image</label>
          <input type="file" />
          <button onClick={checkHealth} className="primary-btn">
            Analyze Crop
          </button>
        </div>

        <div className="health-result">
          <h3>Analysis Result</h3>
          <p className="status warning">Status: Needs Attention</p>
          <p className="suggestion">
            Suggestion: Apply organic nitrogen-rich fertilizer and monitor leaf color for 7 days
          </p>
        </div>
      </div>
    </div>
  )
}
