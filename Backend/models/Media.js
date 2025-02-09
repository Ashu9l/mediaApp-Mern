const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  filename: String,
  fileUrl: String,
  fileType: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Media", MediaSchema);
