const service = require('../../service/blogpost/delete');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const deletedPost = await service(id, userId);

  if (deletedPost === false) {
    return res.status(401).send({ message: 'Unauthorized user' });
  }
  if (deletedPost === undefined) {
    return res.status(404).send({ message: 'Post does not exist' });
  }

  return res.status(204).end();
};