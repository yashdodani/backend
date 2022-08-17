const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const studentRouter = require("./routes/studentRoutes");
const schoolRouter = require("./routes/schoolRoutes");

app.use(express.json());

// app.use(express.static("templates"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/student", studentRouter);
app.use("/api/v1/college", schoolRouter);

module.exports = app;
