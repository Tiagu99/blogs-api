require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'trybe',
    password: process.env.MYSQL_PASSWORD || '12345678',
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'trybe',
    password: process.env.MYSQL_PASSWORD || '12345678',
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'trybe',
    password: process.env.MYSQL_PASSWORD || '12345678',
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};