const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDB = async () => {
  try {
    // process.env.URI_DB URI_DB_TEST
    await mongoose.connect(process.env.URI_DB, {
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
