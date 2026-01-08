// frontend/src/pages/SoilInput.jsx
import { useState } from "react"

export default function SoilInput() {
  const [form, setForm] = useState({})

  const submit = () => {
    alert("Soil data submitted successfully")
  }

  return (
    <>
      <h2>Soil Data Input</h2>

      <p style={{ color: "#607d8b", marginBottom: "16px" }}>
        Enter the current soil parameters of your field to get accurate crop recommendations.
      </p>

      <div className="card form-card">
        <input
          placeholder="Soil pH (eg: 6.5)"
          onChange={e => setForm({ ...form, ph: e.target.value })}
        />

        <input
          placeholder="Moisture (%)"
          onChange={e => setForm({ ...form, moisture: e.target.value })}
        />

        <input
          placeholder="Temperature (°C)"
          onChange={e => setForm({ ...form, temperature: e.target.value })}
        />

        <input
          placeholder="Nitrogen (N)"
          onChange={e => setForm({ ...form, nitrogen: e.target.value })}
        />

        <input
          placeholder="Phosphorus (P)"
          onChange={e => setForm({ ...form, phosphorus: e.target.value })}
        />

        <input
          placeholder="Potassium (K)"
          onChange={e => setForm({ ...form, potassium: e.target.value })}
        />

        <button onClick={submit}>Save Soil Data</button>
      </div>
    </>
  )
}
