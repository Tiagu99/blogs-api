const service = require('../../service/blogpost/findById');

module.exports = async (req, res) => {
  const { id } = req.params;

  const post = await service(id);

  if (!post) {
    return res.status(404).send({ message: 'Post does not exist' });
   }
   
  return res.status(200).send(post);
};