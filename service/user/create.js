const { User } = require('../../models');

module.exports = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  delete newUser.dataValues.password;

  const exist = await User.findOne({ email });

  if (exist) {
    return false;
  }

  return newUser;
};