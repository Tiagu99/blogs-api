const service = require('../../service/user/getAll');

module.exports = async (req, res) => {
  const users = await service();

  res.status(200).send(users);
};