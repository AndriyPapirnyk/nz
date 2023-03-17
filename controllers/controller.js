const Student = require('../models/student-model');

const getStudent = (req, res) => {
    Student
    .find()
    .then((students) => {
      res.json(students)
    })
}

module.exports = {
    getStudent,
};