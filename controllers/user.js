// controllers/user.js

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().trim().min(10).max(50).required(),
});

const signUp = async (req, res, next) => {
  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400);
    return next(result.error);
  }

  const user = await User.findOne({ username: req.body.username }).exec();

  if (user) {
    const error = new Error(
      'Username already in use. Please choose another one.'
    );
    res.status(409);
    return next(error);
  }

  bcrypt.hash(req.body.password.trim(), 12).then((hashedPassword) => {
    const newUser = {
      username: req.body.username,
      password: hashedPassword,
    };

    User.create(newUser, (err, doc) => {
      if (err) return next(err);

      res.json({
        message: 'new user',
        user: doc,
      });
    });
  });
};

const login = (req, res) => {
  console.log('login!');
  res.json({
    message: 'login method',
  });
};

module.exports = {
  signUp,
  login,
};
