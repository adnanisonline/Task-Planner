const passportLocal = require('passport-local')
const User = require('../../models/user');

const LocalStrategy = passportLocal.Strategy

const localStrategyLogin = new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (email, password, done) => {
    const user = await User.findOne({ email })
    
    if (!user) {
      return done({ message: 'Incorrect Email - No User Exists' })
    }
    
    try {
      const isPasswordValid = await user.isValidPassword(password)
      if (!isPasswordValid) {
        return done({ message: "Incorrect Password" })
      } else {
        console.log('login successful')
        return done(null, { id: user.id, name: user.name, email: user.email }, { message: 'Login Successful' })
      }
    } catch (error) {
      done(error)
    }
  }
)

module.exports = localStrategyLogin
