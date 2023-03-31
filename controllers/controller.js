const Student = require('../models/student-model');
const jsonFile = require('jsonfile');

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
    password:req.body.password,
    status:req.body.status
   }
   jsonFile.writeFile('public/js/student.json', [
    {
      "name":studentData.name,
      "surname":studentData.surname,
      "class":studentData.class,
      "age":studentData.age,
      "password":studentData.password,
      "status":studentData.status,
      "subjects":{
        "math": [],
        "ukrainian": [],
        "english":[],
        "physics":[],
      }
    }
   ])
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
   let studentValidate = await Student.findOne(studentData)
   console.log(studentValidate)
   jsonFile.writeFile('public/js/student.json', [
    {
      "name":studentValidate.name,
      "surname":studentValidate.surname,
      "class":studentValidate.class,
      "age":studentValidate.age,
      "password":studentValidate.password,
      "status":studentValidate.status,
      "subjects":studentValidate.subjects,
    }
   ])
   if (studentValidate) {
    res
    .status(200)
    .send('ok')
  } else {
    res.status(404)
    send('error')
  }
}



module.exports = {
    getStudent,
    signUp,
    logIn
};