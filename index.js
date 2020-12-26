const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

require('dotenv').config();
require('./database/connection');

app.use(morgan('tiny'));
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    user: req.user,
  });
});

// All other routes
require('./routes')(app);

const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});
