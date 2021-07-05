const { addNewVote } = require('../models/voteModel');

const readFile = require('../util/readFile');

const notFound = 'notFound';

async function findParticipant(id) {
  const participants = await readFile();
  return participants.find((participant) => participant.id === id);
}

async function addVote(id) {
  const participant = await findParticipant(id);
  if (!participant) return { status: 404, message: { id, message: notFound } };
  addNewVote(id);
  return { status: 200, message: { id, count: participant.count + 1 } };
}

module.exports = {
  addVote,
};
