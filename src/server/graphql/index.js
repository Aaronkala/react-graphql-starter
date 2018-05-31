const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
        todos: [TODO]
    }

    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }

    type TODO {
      id: Int
      value: String
    }

    type Mutation {
      updateCourseTopic(id: Int!, topic: String!): Course
      addTodo(id: Int, value: String) : TODO
      editTodo(id: Int, value: String) : [TODO]
    }
`);

const coursesData = [
  {
    id: 1,
    title: 'The Complete Node.js Developer Course',
    author: 'Andrew Mead, Rob Percival',
    description:
      'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/courses/nodejs/',
  },
  {
    id: 2,
    title: 'Node.js, Express & MongoDB Dev to Deployment',
    author: 'Brad Traversy',
    description:
      'Learn by example building & deploying real-world Node.js applications from absolute scratch',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/',
  },
  {
    id: 3,
    title: 'JavaScript : Understanding The Weird Parts',
    author: 'Anthony Alicea',
    description:
      'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
    topic: 'JavaScript',
    url: 'https://codingthesmartway.com/courses/understand-javascript/',
  },
];

const Todos = [
  {
    id: 1,
    value: 'do something',
  },
];

const getCourse = args => {
  const { id } = args;
  return coursesData.filter(course => course.id === id)[0];
};

const getCourses = args => {
  if (args.topic) {
    const { topic } = args;
    return coursesData.filter(course => course.topic === topic);
  }
  return coursesData;
};

const updateCourseTopic = ({ id, topic }) => {
  coursesData.map(course => {
    const newCourse = course;
    if (course.id === id) {
      newCourse.topic = topic;
      return newCourse;
    }
    return false;
  });
  return coursesData.filter(course => course.id === id)[0];
};

const getTodos = () => Todos;

const editTodo = ({ id, value }) => {
  const selected = Todos.find(todo => todo.id === id);
  selected.value = value;
  return selected;
};

const addTodo = ({ id, value }) => ({ id, value });

const root = {
  course: getCourse,
  courses: getCourses,
  todos: getTodos,
  updateCourseTopic,
  addTodo,
  editTodo,
};

module.exports.schema = schema;
module.exports.root = root;
