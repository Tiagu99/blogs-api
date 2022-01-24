const service = require('../../service/login/login');
const jwt = require('../../helper/jwt');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await service(email, password);
  console.log(user);

  if (!user) {
    return res.status(400).send({ message: 'Invalid fields' });
  }

  const token = jwt.createToken(user);

  return res.status(200).send({ token });
};