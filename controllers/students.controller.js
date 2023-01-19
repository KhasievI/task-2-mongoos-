const Student = require("../models/Student.model");
const express = require("../index");

module.exports.studentsController = {
  getStudent: (req, res) => {
    Student.find().then((students) => {
      res.json(students);
    });
  },
  postStudent: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age, // возраст
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },

  deleteStudent: (req, res) => {
    Student.findByIdAndDelete(req.params.id).then((student) => {
      res.json(student);
    });
  },
  patchStudent: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, { name: req.body.name })
    .then((studen) => {
      res.json(studen)
    })
  }
};

// postStudent2: async (req, res) => {
//     try {
//         // todo
//     } catch (error) {
//       return res.json(error);
//     }
//   },

// postStudent: async (req, res) => {
//     try {
//       const student = await Student.create({
//         name: req.body.name,
//         phone: req.body.phone,
//         age: req.body.age, // возраст
//       });

//       return res.json(student);
//     } catch (error) {
//       return res.json(error.message);
//     }
//   }
