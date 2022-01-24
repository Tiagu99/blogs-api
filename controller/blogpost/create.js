const service = require('../../service/blogpost/create');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  
  const newPost = await service(title, content, categoryIds, id);

  return res.status(201).send(newPost);
};