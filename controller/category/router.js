const express = require('express');
const tokenValidade = require('../../middleware/user/tokenValidade');

const router = express.Router({ mergeParams: true });

router.post('/', tokenValidade, require('./create'));

module.exports = router;