const readFile = require('./readFile');

async function findParticipant(id) {
  const participants = await readFile();
  return participants.find((participant) => participant.id === id);
}

module.exports = findParticipant;
