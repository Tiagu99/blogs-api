const { Category } = require('../../models');

module.exports = async (name) => Category.create({ name });