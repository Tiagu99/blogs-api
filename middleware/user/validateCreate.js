module.exports = (req, res, next) => {
  const { displayName, password } = req.body;
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).send({ message: '"password" length must be 6 characters long' });
  }
  if (!displayName) {
    return res.status(400).send({ message: '"displayName" is required' });
  }
  if (displayName.length < 8) {
    return res.status(400).send({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
 
  return next();
};