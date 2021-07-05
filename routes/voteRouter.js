const express = require('express');

const voteRouter = express.Router();

voteRouter.post('/', (_req, res) => {
  res.status(200).json('Tudo certo');
});

module.exports = voteRouter;
