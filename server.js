const express = require('express');
const app = express();
const PORT = 8080;
const categories = require('./categories.json');

app.listen(PORT, () => {
    console.log("server running on port 8080");
});

app.get("/", (req, res, next) => {
    res.json(categories);
});