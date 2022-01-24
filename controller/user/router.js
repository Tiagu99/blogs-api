const express = require('express');
const emailValidade = require('../../middleware/user/validateEmail');
const createValidate = require('../../middleware/user/validateCreate');
const validateToken = require('../../middleware/user/tokenValidade');

const router = express.Router({ mergeParams: true });

router.post('/', emailValidade, createValidate, require('./create'));
router.get('/', validateToken, require('./getAll'));

module.exports = router;