const express = require('express');
const tokenValidade = require('../../middleware/user/tokenValidade');

const router = express.Router({ mergeParams: true });

router.post('/', tokenValidade, require('./create'));
router.get('/', tokenValidade, require('./getAll'));

module.exports = router;