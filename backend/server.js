// backend/server.js
const express = require("express")
const cors = require("cors")

const soilRoutes = require("./routes/soil.routes")
const aiRoutes = require("./routes/ai.routes")
const marketRoutes = require("./routes/market.routes")
const uploadRoutes = require("./routes/upload.routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.use("/api/soil", soilRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/market", marketRoutes)
app.use("/api/upload", uploadRoutes)

app.listen(5000)
