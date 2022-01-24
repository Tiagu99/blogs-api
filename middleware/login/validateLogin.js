module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (email === '') {
    return res.status(400).send({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).send({ message: '"email" is required' });
  }
  if (password === '') {
    return res.status(400).send({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }

  return next();
};