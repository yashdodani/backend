const fs = require("fs");
const replaceTemplate = require("./../modules/replaceTemplate");

exports.welcomeStudent = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "welcome route is not defined yet",
  });
};
exports.selfAssessmentWelcome = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This route is not defined yet",
  });
};

// Self assessment controller for student
exports.selfAssessmentTest = (req, res) => {
  // read the data from the file
  const tempAssessment = fs.readFileSync(
    `${__dirname}/../templates/assessment.html`,
    "utf-8"
  );
  const assessment = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/assessment.json`)
  );

  // 1) consider "id"
  const parameterId = req.params.id;
  const question = assessment[Number(parameterId)];

  // console.log(question.title);

  // 2) send data according to the id.
  const output = replaceTemplate(tempAssessment, question);

  // res.status(200).json({
  //   status: "success",
  // });
  // 3) store the response in the database

  // 4) send html
  res.status(200).end(output);
};

exports.self = (req, res, next) => {
  const rating = req.body;
  console.log(rating);
  res.status(200).json({
    status: "success",
    rating,
  });
};
