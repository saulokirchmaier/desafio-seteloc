const { getVotesById } = require('../service/countService');

async function getTotalVotesById(req, res) {
  const { id } = req.query;
  const { status, message } = await getVotesById(id);
  res.status(status).json(message);
}

module.exports = {
  getTotalVotesById,
};
