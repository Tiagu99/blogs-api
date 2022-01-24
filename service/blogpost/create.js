const { BlogPost } = require('../../models');

module.exports = async ({ title, content, categoryIds, userId }) => BlogPost
  .create({ title, content, categoryIds, userId });