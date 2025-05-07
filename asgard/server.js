const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes")

const app = express()

dotenv.config();

connectDB();

app.use("/api/movie", movieRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`${PORT}`)
})