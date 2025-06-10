const express = require('express');
const router = express.Router();
const { executeCode, saveCode, getCode, getTemplate } = require('../controllers/codeController');

router.post('/execute', executeCode);
router.post('/save', saveCode);
router.get('/:id', getCode);
router.get('/template/:language', getTemplate);

module.exports = router;