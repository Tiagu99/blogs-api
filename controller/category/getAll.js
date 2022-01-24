const service = require('../../service/category/getAll');

module.exports = async (req, res) => {
  const allCategories = await service();

  return res.status(200).send(allCategories);
};