const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");
const mediaRoutes=require("./routes/mediaRoutes");
const cors = require("cors");
const path = require('path');

dotenv.config();

connectDB();
const app=express()
app.use(cookieParser());

app.use(cors({ 
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  credentials: true 
}));

app.use(express.json());

app.get("/", (req, res) =>
  res.send('<h1>Welcome to "The DataTalks Ai" Backend </h1>')
);
// app.use("/api/user", userRoute);

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use("/api/auth",authRoute );
app.use("/api/media", mediaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

app.use(express.json());

