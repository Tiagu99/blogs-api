const { BlogPost, Category } = require('../../models');

module.exports = async ({ title, content, categoryIds, userId }) => {
  // Validaçao de categorias retirada de https://github.com/tryber/sd-012-project-blogs-api/blob/ygor-saturnino-project-blogs-api/models/BlogPost.js
  const categoriesPromises = await Promise.all(categoryIds
    .map((category) => Category.findByPk(category)));

  const validCategories = categoriesPromises.every((category) => category !== null);
  if (!validCategories) return false;

  const newPost = BlogPost.create({ title, content, categoryIds, userId });
  return newPost;
};