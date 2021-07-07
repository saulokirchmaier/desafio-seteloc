const { getParticipantsVotes, updateParticipantsVotes } = require('../models/voteModel');

const NOT_FOUND = 'not found';
const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

async function addVote(id) {
  const participants = await getParticipantsVotes();
  const participant = participants.find((part) => part.id === id);

  if (!participant) return { status: HTTP_NOT_FOUND_STATUS, message: { id, message: NOT_FOUND } };

  const voted = participants.map((part) => (
    (part.id === id)
      ? { ...part, count: part.count + 1 }
      : part));

  await updateParticipantsVotes(voted);

  return { status: HTTP_OK_STATUS, message: { id, count: participant.count + 1 } };
}

module.exports = {
  addVote,
};
