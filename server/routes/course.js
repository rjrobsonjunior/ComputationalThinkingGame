const express = require('express');
const router = express.Router();
const { prathical } = require('../controllers/course');

router.get('/prathicalcourses/:id', prathical);

module.exports = router;