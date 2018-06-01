const courseGet = require('./queries/courseGet');
const coursesGet = require('./queries/coursesGet');
const todosGet = require('./queries/todosGet');

const queries = {
  course: courseGet,
  courses: coursesGet,
  todos: todosGet,
};

module.exports = queries;
