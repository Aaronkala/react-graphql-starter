const coursesData = require('../data/coursesData');

const courseGet = args => {
  const { id } = args;
  return coursesData.filter(course => course.id === id)[0];
};

module.exports = courseGet;
