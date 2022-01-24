const { BlogPost } = require('../../models');

module.exports = async (id, userId) => {
  const postFound = await BlogPost.findByPk(id);

  if (!postFound) return undefined;

  if (userId !== postFound.userId) return false;

  await BlogPost.destroy({ where: { id } });

  return true;
};
