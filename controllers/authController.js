const Student = require("./../models/student");

exports.signUpCollege = async (req, res, next) => {
  const user = await Student.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    code: req.body.code,
    state: req.body.state,
    district: req.body.district,
    principal: req.body.principal,
  });

  res.status(200).json({
    status: "success",
    message: "student created",
  });
};

exports.signUpStudent = async (req, res, next) => {
  const user = await Student.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    rollNo: req.body.rollNo,
    dateOfBirth: req.body.dateOfBirth,
    school: req.body.school,
  });

  res.status(200).json({
    status: "success",
    message: "student created",
  });
};
