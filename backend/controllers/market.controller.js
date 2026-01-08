// backend/controllers/market.controller.js
const db = require("../db")

exports.addListing = (req, res) => {
  const { crop, quantity, price, contact } = req.body

  db.query(
    "INSERT INTO marketplace (crop, quantity, price, contact) VALUES (?, ?, ?, ?)",
    [crop, quantity, price, contact],
    () => res.send({ success: true })
  )
}

exports.getListings = (req, res) => {
  db.query(
    "SELECT * FROM marketplace ORDER BY id DESC",
    (err, result) => res.send(result)
  )
}
