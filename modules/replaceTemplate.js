module.exports = (temp, ques) => {
  let output = temp.replace(/{%TITLE%}/, ques.title);
  output = output.replace(/{%PREVIOUSID%}/, ques.previousId);
  output = output.replace(/{%NEXTID%}/g, ques.nextId);
  output = output.replace(/{%DESCRIPTION%}/, ques.description);

  return output;
};
