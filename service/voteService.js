const { addNewVote } = require('../models/voteModel');
const findParticipant = require('../util/findParticipant');

const notFound = 'notFound';

async function addVote(id) {
  const participant = await findParticipant(id);
  if (!participant) return { status: 404, message: { id, message: notFound } };
  addNewVote(id);
  return { status: 200, message: { id, count: participant.count + 1 } };
}

module.exports = {
  addVote,
};
