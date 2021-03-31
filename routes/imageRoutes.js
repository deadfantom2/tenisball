const express = require('express');
const path = require('path');
const fs = require('fs');
const { reverseId } = require('../outils/upload-module');
const app = express();

app.get('/:type/:folder/:image', async (req, res) => {
  const { type, folder, image } = req.params;

  const pathImage = path.resolve(
    __dirname,
    '../uploads/' + type + '/photo/' + reverseId(folder) + '/' + image
  );
  if (fs.existsSync(pathImage)) {
    res.sendFile(pathImage);
  } else {
    /**TODO: ADD PICTURE IN FOLDER FRONT ASSETS */
    const pathNonImage = path.resolve(__dirname, '../assets/no-img.jpg');
    res.sendFile(pathNonImage);
  }
});

module.exports = app;
