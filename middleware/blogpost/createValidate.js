module.exports = (req, res, next) => {
  const { title, categoryIds, content } = req.body;

  if (!title) {
    return res.status(400).send({ message: '"title" is required' });
  }
  if (!categoryIds) {
    return res.status(400).send({ message: '"categoryIds" is required' });
  }
  if (!content) {
    return res.status(400).send({ message: '"content" is required' });
  }

  return next();
};