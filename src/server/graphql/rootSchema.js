const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
      course(id: Int!): Course
      courses(topic: String): [Course]
      todos: [Todo]
    }

    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }

    type Todo {
      id: Int
      value: String
    }

    type Mutation {
      courseTopicUpdate(id: Int!, topic: String!): Course
      todoAdd(id: Int, value: String) : Todo
      todoEdit(id: Int, value: String) : Todo
    }
`);

module.exports = schema;
