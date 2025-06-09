const express = require("express");
const router = express.Router();

const imageController = require("./../controllers/imageController");

const multer = require("./../middlewares/upload");

router.get("/", imageController.getImages);
router.post("/", multer.single("image"), imageController.uploadImage);

module.exports = router;
