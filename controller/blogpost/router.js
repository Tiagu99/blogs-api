const express = require('express');
const createValidate = require('../../middleware/blogpost/createValidate');
const tokenValidade = require('../../middleware/user/tokenValidade');

const router = express.Router({ mergeParams: true });

router.post('/', createValidate, tokenValidade, require('./create'));

module.exports = router;