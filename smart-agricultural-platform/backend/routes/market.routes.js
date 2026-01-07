// backend/routes/market.routes.js
const express = require("express")
const controller = require("../controllers/market.controller")
const router = express.Router()

router.post("/", controller.addListing)
router.get("/", controller.getListings)

module.exports = router
