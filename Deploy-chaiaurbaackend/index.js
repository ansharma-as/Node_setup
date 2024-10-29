require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;  // Use .env port, or 3000 if not defined

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/Strontium", (req, res) => {
  res.send("StrontiumdotCom");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login to Strontium dot com </h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port `);
});
