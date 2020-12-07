// controllers/user.js

const signUp = (req, res) => {
  console.log('sign up!');
  res.json({
    message: 'sign up method',
  });
};

const login = (req, res) => {
  res.json({
    message: 'login method',
  });
};

module.exports = {
  signUp,
  login,
};
