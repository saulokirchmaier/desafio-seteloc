const express = require('express');

const { getTotalVotesById } = require('../controllers/countController');

const countRouter = express.Router();

countRouter.get('/', getTotalVotesById);

module.exports = countRouter;
