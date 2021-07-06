const { getParticipantsVotes, updateParticipantsVotes } = require('../models/voteModel');

const notFound = 'notFound';

async function addVote(id) {
  const participants = await getParticipantsVotes();
  const participant = participants.find((part) => part.id === id);

  if (!participant) return { status: 404, message: { id, message: notFound } };

  const voted = participants.map((part) => (
    (part.id === id)
      ? { ...part, count: part.count + 1 }
      : part));

  await updateParticipantsVotes(voted);

  return { status: 200, message: { id, count: participant.count + 1 } };
}

module.exports = {
  addVote,
};
