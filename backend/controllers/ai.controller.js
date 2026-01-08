// backend/controllers/ai.controller.js
exports.recommendCrops = (req, res) => {
  const { ph, moisture } = req.body

  let crops = []

  if (ph >= 6 && ph <= 7.5 && moisture > 40) {
    crops = [
      { name: "Rice", score: 92, carbon: "High" },
      { name: "Sugarcane", score: 88, carbon: "Very High" }
    ]
  } else {
    crops = [
      { name: "Millet", score: 82, carbon: "Low" },
      { name: "Groundnut", score: 76, carbon: "Medium" }
    ]
  }

  res.send(crops)
}

exports.simulateCrop = (req, res) => {
  res.send({
    risk: "Medium",
    fertilizerAdjustment: "Increase nitrogen by 10%",
    expectedYield: "2.8 – 3.4 tons per acre"
  })
}
