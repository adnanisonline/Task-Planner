const express = require('express');
const { signUp, login } = require('../controllers/authController');
const validatorResult = require('../middleware/validations/validatorResult');
const { signupValidation, loginValidation } = require('../middleware/validations/authValidation');
const passport = require('passport');

const authRouter = express.Router();
  
authRouter
  .route('/signup')
  .post(signupValidation, validatorResult, signUp)

authRouter
  .route('/login')
  .post(loginValidation, validatorResult, passport.authenticate('login', { session: false, failWithError: true }), login)

module.exports = authRouter;
