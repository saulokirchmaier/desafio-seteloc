const express = require('express');

const { postVote } = require('../controllers/voteController');

const voteRouter = express.Router();

voteRouter.post('/', postVote);

module.exports = voteRouter;
