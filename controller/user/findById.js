const service = require('../../service/user/findById');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await service(id);

  if (!user) {
    return res.status(404).send({ message: 'User does not exist' });
  }

  return res.status(200).send(user);
};