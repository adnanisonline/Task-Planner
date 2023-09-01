const { check } = require('express-validator');

const taskValidation = [
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
];

module.exports = taskValidation;
