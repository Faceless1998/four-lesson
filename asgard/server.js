const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(` Server is running on localhost:${process.env.PORT}`);
    });
  });
