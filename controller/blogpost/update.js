const service = require('../../service/blogpost/update');

module.exports = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params; 
  const { id: userId } = req.user;

  const updatePost = await service({ id, content, title }, userId);

  if (updatePost === false) {
    return res.status(401).send({ message: 'Unauthorized user' });
  }
  
  return res.status(200).send(updatePost);
};