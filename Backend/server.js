//const express = require("express");
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
//const { default: connectToMongoDB } = require("./db/connectToMongoDB");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5050;
app.get("/", (req, res) => {
  console.log("GET / route was hit");
  res.status(200).send("Welcome to EchoSphere API");
});

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/auth", authRoutes);
app.listen(PORT, "127.0.0.1", () => {
  connectToMongoDB();  
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});