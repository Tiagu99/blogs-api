const service = require('../../service/user/create');
const jwt = require('../../helper/jwt');

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await service({ displayName, email, password, image });
  if (!newUser) {
    return res.status(409).send({ message: 'User already registered' });
  }
  const token = jwt.createToken(newUser);

  return res.status(201).send({ token });
};