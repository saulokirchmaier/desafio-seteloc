const { addVote } = require('../service/voteService');

async function postVote(req, res) {
  const { id } = req.body;
  const { status, message } = await addVote(id);
  res.status(status).json({ message });
}

module.exports = {
  postVote,
};
