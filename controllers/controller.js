const Student = require('../models/student-model');

const getStudent = (req, res) => {
    Student
    .find()
    .then((students) => {
      res.json(students)
    })
}

const Static = (req, res) => {
  // res.sendFile('/Users/zenoxx/Desktop/nz/nz/index.html');
}

module.exports = {
    getStudent,
    Static
};