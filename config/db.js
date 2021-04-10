const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async () => {
  console.log('process: ', process.env.NODE_ENV);
  let urlDb;
  try {
    if (process.env.NODE_ENV === 'production') {
      urlDb = process.env.URI_DB;
    } else {
      urlDb = process.env.URI_DB_TEST;
    }
    console.log(urlDb);
    await mongoose.connect(urlDb, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('%s MongoDB is running.', chalk.green('✗'));
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectDB;
