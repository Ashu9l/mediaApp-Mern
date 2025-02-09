const express = require("express");
const { uploadMedia, getMedia, deleteMedia } = require("../controllers/mediaController");
// const protect = require("../middleware/authMiddleware");
const { isAuthenticated } = require("../middleware/authMiddleware");


const router = express.Router();
router.post("/upload", isAuthenticated, uploadMedia);
router.get("/", isAuthenticated, getMedia);
router.delete("/:id", isAuthenticated, deleteMedia);

module.exports = router;
