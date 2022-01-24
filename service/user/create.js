const { User } = require('../../models');

module.exports = async ({ displayName, email, password, image }) => {
  const exist = await User.findOne(({ where: { email } }));
  if (exist) {
    return false;
  }
  const newUser = await User.create({ displayName, email, password, image });
  delete newUser.dataValues.password;

  return newUser;
};