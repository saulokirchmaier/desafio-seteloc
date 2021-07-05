const findParticipant = require('../util/findParticipant');

const notFound = 'notFound';

async function getTotalVotesByParticipantId(id) {
  const participant = await findParticipant(id);
  if (!participant) return { status: 404, message: { id, message: notFound } };

  return { status: 200, message: participant };
}

module.exports = {
  getTotalVotesByParticipantId,
};
