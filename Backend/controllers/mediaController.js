const Media = require("../models/Media");
const multer = require("multer");
const path = require("path");

// Multer Storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    const actualFilename = file.originalname;
    cb(null, actualFilename);
    req.body.actualFilename = actualFilename;
  },
});

const upload = multer({ storage }).single("file");

exports.uploadMedia = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const media = await Media.create({
      filename: req.body.actualFilename,
      fileUrl: `/uploads/${req.body.actualFilename}`,
      fileType: req.file.mimetype.startsWith("image") ? "image" : "video",
      user: req.user.id,
    
    });

    res.json(media);
  });
};

exports.getMedia = async (req, res) => {
  const media = await Media.find({ user: req.user.id });
  res.json(media);
};

exports.deleteMedia = async (req, res) => {
  await Media.findByIdAndDelete(req.params.id);
  res.json({ message: "Media deleted" });
};
