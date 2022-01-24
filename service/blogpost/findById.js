const { User, BlogPost, Category } = require('../../models');

module.exports = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },  
    ],
  });

  if (!post) return false;
  return post;
};
