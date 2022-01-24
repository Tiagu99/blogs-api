const { BlogPost } = require('../../models');

const getPosts = async () => {
  const posts = await BlogPost.findAll({ include: ['user', 'categories'] });

  return posts;
};

module.exports = getPosts;