/** @format */

const express = require('express')
const AppRouter = require("./src/routers/router.js");
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});

mongoose
  .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });