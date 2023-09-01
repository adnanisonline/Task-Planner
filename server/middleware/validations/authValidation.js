const { check } = require('express-validator');

const signupValidation = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email address').isEmail(),
  check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
];

const loginValidation = [
  check('email', 'Please include a valid email address').isEmail(),
  check('password', 'Password is required').exists(),
];

module.exports = {
  signupValidation,
  loginValidation,
};
