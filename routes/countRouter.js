const express = require('express');

const countRouter = express.Router();

countRouter.get('/', (req, res) => {
  res.status(200).json('total');
});

module.exports = countRouter;
