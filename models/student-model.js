const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    age: Number
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
