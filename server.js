const express = require('express');
const errorHnadler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use('/contacts', require('./routes/contactRoutes'));
app.use(errorHnadler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});