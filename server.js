const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 6000;

app.use('/contacts', require('./routes/contactRoutes'))

app.listen(PORT, () => {
    console.log("H this hshs");
})