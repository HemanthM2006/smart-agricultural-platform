// backend/routes/ai.routes.js
const express = require("express")
const controller = require("../controllers/ai.controller")
const router = express.Router()

router.post("/recommend", controller.recommendCrops)
router.post("/simulate", controller.simulateCrop)

module.exports = router
