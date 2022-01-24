const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return blogPost;
};

module.exports = BlogPost;