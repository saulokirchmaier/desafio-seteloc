const { getTotalVotesByParticipantId } = require('../service/countService');

async function getTotalVotesById(req, res) {
  const { id } = req.query;
  const { status, message } = await getTotalVotesByParticipantId(id);
  res.status(status).json(message);
}

module.exports = {
  getTotalVotesById,
};
