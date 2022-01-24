const express = require('express');
const validateLogin = require('../../middleware/login/validateLogin');

const router = express.Router({ mergeParams: true });

router.post('/', validateLogin, require('./login'));

module.exports = router;