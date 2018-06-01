const Todos = require('../data/todoData');

const todoAdd = ({ id, value }) => {
  Todos.push({ id, value });
  return { id, value };
};

module.exports = todoAdd;
