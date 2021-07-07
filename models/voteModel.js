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

async function updateParticipantsVotes(data) {
  try {
    return fs.writeFile(pollFile, JSON.stringify(data));
  } catch (err) {
    return err;
  }
}

module.exports = {
  getParticipantsVotes,
  updateParticipantsVotes,
};
