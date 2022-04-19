const express = require('express');
const path = require('path');
require('dotenv').config();

// Init express
const app = express();

if (process.env.NODE_ENV === 'production') {
  console.log('Mode Production is runnig...');
  app.use(express.static(path.resolve(__dirname, 'build')));
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('API IS RUNNING...'));
}

module.exports = app;
