const express = require("express");
const dotenv = require("dotenv").config()

const app = express();

const PORT = process.env.PORT || 6000;

app.get('', (req, res) => {
    res.send("ddkdkd");
})

app.listen(PORT, () => {
    console.log("H this bardia");
})