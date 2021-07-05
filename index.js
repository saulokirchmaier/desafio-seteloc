const express = require('express');
const bodyParser = require('body-parser');

const voteRouter = require('./routes/voteRouter');
const countRouter = require('./routes/countRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/vote', voteRouter);

app.use('/count', countRouter);

app.listen(PORT, () => console.log(`Server online on PORT localhost:${PORT}`));
