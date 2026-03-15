const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes");
const { default: connectToMongoDB } = require("./db/connectToMongoDB");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5050;
app.get("/", (req, res) => {
  console.log("GET / route was hit");
  res.status(200).send("Welcome to EchoSphere API");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, "127.0.0.1", () => {
  connectToMongoDB();  
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});