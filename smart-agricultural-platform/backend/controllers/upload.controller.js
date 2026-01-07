// backend/controllers/upload.controller.js
const multer = require("multer")

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname)
})

const upload = multer({ storage }).single("image")

exports.uploadImage = (req, res) => {
  upload(req, res, () => {
    const name = req.file.originalname.toLowerCase()
    let result = "Healthy crop detected"

    if (name.includes("yellow")) result = "Nitrogen deficiency detected"
    if (name.includes("spot")) result = "Fungal disease detected"

    res.send({ diagnosis: result })
  })
}
