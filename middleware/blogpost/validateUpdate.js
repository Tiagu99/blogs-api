module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (categoryIds) {
    return res.status(400).send({ message: 'Categories cannot be edited' });
  }
  if (!title) {
    return res.status(400).send({ message: '"title" is required' });
  }
  if (!content) {
    return res.status(400).send({ message: '"content" is required' });
  }

  return next();
};