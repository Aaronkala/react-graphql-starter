const courseGet = require('./queries/courseGet');
const coursesGet = require('./queries/coursesGet');
const todosGet = require('./queries/todosGet');

/* const rootQuery = `
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
    todos: [TODO]
  }
`; */

const queries = {
  course: courseGet,
  courses: coursesGet,
  todos: todosGet,
};

// module.exports = rootQuery;
module.exports.queries = queries;
