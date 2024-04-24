
const express = require('express')
const UserController = require('../controllers/User.controller.js')
const validators = require('../common/validators.js')


const router = express.Router();

router.post("/signup", validators.validate("signup"), validators.validationMiddleware, UserController.signupController);
router.post("/signin", validators.validate("signin"), validators.validationMiddleware, UserController.signinController);
router.post("/forgot-password", validators.validate("forgotPassWord"), validators.validationMiddleware, UserController.forgotPassword);
router.post("/reset-password", validators.validate("resetPassWord"), validators.validationMiddleware, UserController.resetPassword);


module.exports=router;