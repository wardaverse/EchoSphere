const express = require("express");
const dotenv from "dotenv";
import express from "express";
const app = express();
const PORT = process.env.PORT || 5050;
app.get("/", (req, res) => {
  console.log("GET / route was hit");
  res.status(200).send("Welcome to EchoSphere API");
});

app.get("/api/test", (req, res) => {
  console.log("GET /api/test route was hit");
  res.status(200).json({ message: "API is working!" });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});