const fs = require('fs').promises;

const pollFile = './poll.json';

async function writeFile(data) {
  try {
    return fs.writeFile(pollFile, JSON.stringify(data));
  } catch (err) {
    return err;
  }
}

module.exports = writeFile;
