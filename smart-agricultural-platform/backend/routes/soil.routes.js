// backend/routes/soil.routes.js
const express = require("express")
const controller = require("../controllers/soil.controller")
const router = express.Router()

router.post("/", controller.saveSoil)
router.get("/latest", controller.getLatestSoil)

module.exports = router
