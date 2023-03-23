const Student = require('../models/student-model');

const getStudent = (req, res) => {
    Student
    .find()
    .then((students) => {
      res.json(students)
    })
}

const signUp = (req, res) => {
  let studentData = {
    name:req.body.name,
    surname:req.body.surname,
    class:req.body.class,
    age:req.body.age,
    password:req.body.password
   }
   console.log(studentData)
   const newstudent = new Student(studentData);
   newstudent
   .save()
   .then((result) => {
    console.log(result)
  })
}


const logIn = async (req, res) => {
  let studentData = {
    name:req.body.name,
    surname:req.body.surname,
    password:req.body.password
   }
   console.log(studentData)
   let studentValidate = await Student.findOne(studentData)
   console.log(studentValidate)
   if (studentValidate) {
    res
    .status(200)
    .json(studentValidate)
  } else {
    res.sendStatus(404);
  }
}



module.exports = {
    getStudent,
    signUp,
    logIn
};