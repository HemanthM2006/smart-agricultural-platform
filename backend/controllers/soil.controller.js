// backend/controllers/soil.controller.js
const db = require("../db")

exports.saveSoil = (req, res) => {
  const { ph, moisture, temperature, nitrogen, phosphorus, potassium } = req.body

  db.query(
    "INSERT INTO soil_data (ph, moisture, temperature, nitrogen, phosphorus, potassium) VALUES (?, ?, ?, ?, ?, ?)",
    [ph, moisture, temperature, nitrogen, phosphorus, potassium],
    () => res.send({ success: true })
  )
}

exports.getLatestSoil = (req, res) => {
  db.query(
    "SELECT * FROM soil_data ORDER BY id DESC LIMIT 1",
    (err, result) => res.send(result[0] || {})
  )
}
