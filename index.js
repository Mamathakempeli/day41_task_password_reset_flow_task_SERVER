/** @format */

const express = require('express')
const AppRouter = require("./src/routers/router.js");
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config();
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});


// mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')


mongoose
  .connect('mongodb://127.0.0.1:27017/day41TaskPasswordReset')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });