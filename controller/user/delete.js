const service = require('../../service/user/delete');

module.exports = async (req, res) => {
  const { id } = req.user;

  await service(id);

  return res.status(204).end();
};