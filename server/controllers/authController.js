const User = require("../models/user");
const jwt = require('jsonwebtoken');

const jwtConfig = { expiresIn: 360000 };

const signUp =  async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'User Already Exists' });
    }
    user = await User.create({ name, email, password });
    
    jwt.sign({}, process.env.JWT_SECRET, jwtConfig, (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = req.user;
    const payload = { user: { id: user.id } };

    jwt.sign(payload, process.env.JWT_SECRET, jwtConfig, (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    next(error)
  }
}


module.exports = {
  signUp,
  login
}
