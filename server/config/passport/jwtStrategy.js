const passportJWT =  require('passport-jwt')
const User = require('../../models/user');

const ExtractJwt = passportJWT.ExtractJwt
const JWTstrategy = passportJWT.Strategy

const JWTpassport = new JWTstrategy(
  {
    secretOrKey: process.env.JWT_SECRET || 'JWT_SECRET',
    jwtFromRequest: ExtractJwt.fromHeader('x-auth-token'),
    passReqToCallback: true
  },
  async (req, token, done) => {
    try {
      const user = await User.findById(token.user.id)
      if (user) {
        req.userId = token.user.id
        return done(null, user)
      }
      return done(null, false, { message: 'Invalid user token' })
    } catch (err) {
      return done(err)
    }
  }
)

module.exports = JWTpassport
