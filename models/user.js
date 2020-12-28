// User data model

const mongoose = require('mongoose');

const UserModel = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      username: String,
      password: String,
      loginAttempts: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  )
);

module.exports = UserModel;
