const courseTopicUpdate = require('./mutations/courseTopicUpdate');
const todoAdd = require('./mutations/todoAdd');
const todoEdit = require('./mutations/todoEdit');

const mutations = {
  courseTopicUpdate,
  todoAdd,
  todoEdit,
};

module.exports = mutations;
