const { BlogPost, Category } = require('../../models');

module.exports = async ({ id, content, title }, userId) => {
  const post = await BlogPost.findByPk(id);

  if (!post) {
    return undefined;
  }

  if (post.userId !== userId) {
    return false;
  }

  await BlogPost.update({
    title,
    content,
  }, {
    where: { id },
  });

  const editedPost = await BlogPost.findByPk(
    id,
    { include: { model: Category, as: 'categories', through: { attributes: [] } } },
  );
  return editedPost;
 };