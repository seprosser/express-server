const mongoose = require('mongoose');

const credentials = `${process.env.DB_USER}:${process.env.DB_PASS}`;
const uri = `mongodb+srv://${credentials}@test-cluster.lnhnt.mongodb.net/test?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

const db = mongoose.connect(uri, options).catch((error) => {
  console.log('Something went wrong connecting to the database');
  console.error(error);
});

module.exports = db;
