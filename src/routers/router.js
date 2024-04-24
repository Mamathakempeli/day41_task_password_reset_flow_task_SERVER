/** @format */

const express = require('express')
const UserRoutes = require('./User.router.js')

const router = express.Router();

router.use("/user", UserRoutes);


module.exports=router