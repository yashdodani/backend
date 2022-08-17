const mongoose = require("mongoose");
const validator = require("validator");

const schoolSchema = new mongoose.Schema({
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
    validate: validator(function (el) {
      return el === this.password;
    }),
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
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

const School = mongoose.model("College", schoolSchema);

module.exports = School;
