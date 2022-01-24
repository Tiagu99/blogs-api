const service = require('../../service/category/create');

module.exports = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({ message: '"name" is required' });
  }

  const newCategory = await service(name);

  return res.status(201).send(newCategory);
};