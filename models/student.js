const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  school: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  parameter1: {
    type: Number,
  },
  parameter2: {
    type: Number,
  },
  parameter3: {
    type: Number,
  },
  parameter4: {
    type: Number,
  },
  parameter5: {
    type: Number,
  },
  parameter6: {
    type: Number,
  },
  parameter7: {
    type: Number,
  },
  parameter8: {
    type: Number,
  },
  happinessIndex: {
    type: Number,
  },
  strugglingIndex: {
    type: Number,
  },
  sufferingIndex: {
    type: Number,
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
