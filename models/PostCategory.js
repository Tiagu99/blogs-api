const PostCategories = (sequelize, _DataTypes) => { // codigo retirado de https://github.com/tryber/sd-012-project-blogs-api/blob/ygor-saturnino-project-blogs-api/models/PostCategories.js
  const postCategories = sequelize.define('PostsCategories', 
    {}, { timestamps: false });
  postCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: postCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return postCategories;
};

module.exports = PostCategories;