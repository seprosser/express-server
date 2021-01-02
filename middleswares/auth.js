// Authentication middlewares

const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  if (req.cookies.jwt) {
    jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET, (error, decoded) => {
      if (error) {
        res.status(401);
        return next(new Error('Unauthorised'));
      }

      req.user = decoded;
      return next();
    });
  } else {
    return next();
  }
};

module.exports = {
  validateToken,
};
