const express = require('express');
const createValidate = require('../../middleware/blogpost/createValidate');
const tokenValidade = require('../../middleware/user/tokenValidade');
const updateValidate = require('../../middleware/blogpost/validateUpdate');

const router = express.Router({ mergeParams: true });

router.post('/', createValidate, tokenValidade, require('./create'));
router.get('/', tokenValidade, require('./getAll'));
router.get('/:id', tokenValidade, require('./findById'));
router.put('/:id', tokenValidade, updateValidate, require('./update'));

module.exports = router;