// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the CI/CD Workshop!</h1>");
});


// 假設在您的 Node.js 應用程式中
app.get('/api/time', (req, res) => {
    // 使用 toISOString() 返回有效的 ISO 格式
    const currentTime = new Date().toISOString();
    res.status(200).json({ currentTime });
});

module.exports = app;
