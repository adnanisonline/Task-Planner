const { validationResult } = require("express-validator");

const validatorResult = async(req,res,next)=>{
  const errors = validationResult(req);
  return !errors.isEmpty() ? res.status(400).json({ errors: errors.array() }) : next()
}

module.exports = validatorResult
