const service = require('../../service/blogpost/create');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  
  const newPost = await service({ title, content, categoryIds, userId });

  if (!newPost) {
  return res.status(400).send({ message: '"categoryIds" not found' });
  }

  return res.status(201).send(newPost);
};