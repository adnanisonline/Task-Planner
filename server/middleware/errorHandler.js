const errorHandler = (errors, req, res, next) => {
  return res.status(422).json(errors)
}

module.exports = errorHandler
