const coursesData = require('../data/coursesData');

const coursesGet = args => {
  if (args.topic) {
    const { topic } = args;
    return coursesData.filter(course => course.topic === topic);
  }
  return coursesData;
};

module.exports = coursesGet;
