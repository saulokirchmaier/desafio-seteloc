const readFile = require('../util/readFile');
const writeFile = require('../util/wirteFile');

async function addNewVote(id) {
  const participants = await readFile();
  const voted = participants.map((participant) => (
    (participant.id === id)
      ? { ...participant, count: participant.count + 1 }
      : participant));
  await writeFile(voted);
  return null;
}

module.exports = {
  addNewVote,
};
