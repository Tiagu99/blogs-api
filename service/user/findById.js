const { User } = require('../../models');

module.exports = async (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });