const express = require('express');
const Student = require('../models/student-model');

const {
    getStudent,
    signUp
} = require('../controllers/controller')

const router = express.Router();

router.get('/students', getStudent);

router.post('/signUp', signUp);



module.exports = router;