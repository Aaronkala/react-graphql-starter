const courseTopicUpdate = require('./mutations/courseTopicUpdate');
const todoAdd = require('./mutations/todoAdd');
const todoEdit = require('./mutations/todoEdit');

const rootMutation = `
  type Mutation {
    courseTopicUpdate(id: Int!, topic: String!): Course
    todoAdd(id: Int, value: String) : Todo
    todoEdit(id: Int, value: String) : Todo
  }
`;

const mutations = {
  courseTopicUpdate,
  todoAdd,
  todoEdit,
};

module.exports = rootMutation;
module.exports.mutations = mutations;
