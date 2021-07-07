const { getParticipantsVotes } = require('../models/countModel');

const NOT_FOUND = 'not found';
const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

async function getVotesById(id) {
  const participants = await getParticipantsVotes(id);
  const participant = participants.find((part) => part.id === id);

  if (!participant) return { status: HTTP_NOT_FOUND_STATUS, message: { id, message: NOT_FOUND } };

  return { status: HTTP_OK_STATUS, message: participant };
}

module.exports = {
  getVotesById,
};
