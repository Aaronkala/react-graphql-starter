const coursesData = require('../data/coursesData');

const courseTopicUpdate = ({ id, topic }) => {
  coursesData.map(course => {
    if (course.id === id) {
      const newCourse = course;
      newCourse.topic = topic;
      return newCourse;
    }
    return false;
  });
  return coursesData.filter(course => course.id === id)[0];
};

module.exports = courseTopicUpdate;
