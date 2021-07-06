const { getParticipantsVotes } = require('../models/countModel');

const notFound = 'notFound';

async function getVotesById(id) {
  const participants = await getParticipantsVotes(id);
  const participant = participants.find((part) => part.id === id);

  if (!participant) return { status: 404, message: { id, message: notFound } };

  return { status: 200, message: participant };
}

module.exports = {
  getVotesById,
};
