// backend/routes/upload.routes.js
const express = require("express")
const controller = require("../controllers/upload.controller")
const router = express.Router()

router.post("/", controller.uploadImage)

module.exports = router
