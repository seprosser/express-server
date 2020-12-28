// controllers/user.js

const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

const loginError = (res, next) => {
  res.status(401);
  const error = new Error('Unable to login');
  next(error);
};

const generateToken = (user, res, next) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: '4h' },
    (err, token) => {
      if (err) return loginError(res, next);

      res.cookie('jwt', token, {
        secure: true,
        httpOnly: true,
        expiresIn: new Date(Date.now() + 14400),
      });

      return res.json({ message: 'Logged in' });
    }
  );
};

const login = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username }).exec();

  if (!user) return loginError(res, next);

  bcrypt.compare(req.body.password, user.password).then((result) => {
    if (result) {
      return generateToken(user, res, next);
    } else {
      return loginError(res, next);
    }
  });
};

module.exports = {
  signUp,
  login,
};
