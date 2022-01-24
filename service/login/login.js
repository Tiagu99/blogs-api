const { User } = require('../../models');

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) return false;
  
  const { password: userPass } = user;

  if (password !== userPass) return false;

  return user;
};