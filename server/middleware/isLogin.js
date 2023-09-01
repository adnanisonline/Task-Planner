const passport = require('passport');

module.exports = function (req, res, next) {
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    if (err || !user) {
      return next(info)
    } else {
      return next()
    }
  })(req, res, next)
};
