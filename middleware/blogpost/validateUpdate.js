module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (categoryIds) {
    return res.status({ message: 'Categories cannot be edited' });
  }
  if (!title) {
    return res.status({ message: '"title" is required' });
  }
  if (!content) {
    return res.status({ message: '"content" is required' });
  }
  
  return next();
};