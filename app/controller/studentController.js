const Student = require("../model/students");
const studentCltr = {};

studentCltr.create = (req, res) => {
  //const body = req.body;
  Student.create(req.genderData)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports = studentCltr;
