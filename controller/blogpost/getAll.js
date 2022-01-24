const service = require('../../service/blogpost/getAll');

module.exports = async (req, res) => {
  const allPosts = await service();

  return res.status(200).send(allPosts);
};