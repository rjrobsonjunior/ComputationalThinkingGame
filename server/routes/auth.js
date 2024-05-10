const express = require('express');
const router = express.Router();
const { signup, login, checkAuth } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/checkauth', checkAuth);

module.exports = router;