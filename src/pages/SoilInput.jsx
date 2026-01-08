// src/pages/SoilInput.jsx

import { useState } from "react"

export default function SoilInput() {
  const [soil, setSoil] = useState({
    ph: "",
    moisture: "",
    temperature: "",
    nitrogen: "",
    phosphorus: "",
    potassium: ""
  })

  const update = e => {
    setSoil({ ...soil, [e.target.name]: e.target.value })
  }

  const submit = () => {
    alert("Soil data saved successfully")
  }

  return (
    <>
      <h2>Soil Data Input</h2>

      <input name="ph" placeholder="Soil pH" onChange={update} />
      <input name="moisture" placeholder="Moisture (%)" onChange={update} />
      <input name="temperature" placeholder="Temperature (°C)" onChange={update} />
      <input name="nitrogen" placeholder="Nitrogen (N)" onChange={update} />
      <input name="phosphorus" placeholder="Phosphorus (P)" onChange={update} />
      <input name="potassium" placeholder="Potassium (K)" onChange={update} />

      <button onClick={submit}>Save Soil Data</button>
    </>
  )
}
