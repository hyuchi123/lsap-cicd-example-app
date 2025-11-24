// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the CI/CD Workshop!</h1>");
});


// Part 1: Time API Endpoint
app.get("/api/time", (req, res) => {
    // 返回 ISO 格式日期時間
    const currentTime = new Date().toISOString();
    res.status(200).json({ currentTime });
});


// Part 2: Health Check API Endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
