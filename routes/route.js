const express = require('express');
const Student = require('../models/student-model');

const {
    getStudent,
} = require('../controllers/controller')

const router = express.Router();

router.get('/students', getStudent);

module.exports = router;