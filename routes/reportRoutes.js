const express = require('express');
require('dotenv').config();
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {});

module.exports = router;
