const fs = require('fs').promises;

const pollFile = './poll.json';

async function getParticipantsVotes() {
  try {
    const data = await fs.readFile(pollFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return err;
  }
}

module.exports = {
  getParticipantsVotes,
};
