const encrypt = require('../utils/encrypt');
const Todos = require('../data/todoData');

const todoAdd = ({ value }) => {
  const id = encrypt(Date.now());
  Todos.push({ id, value });
  return { id, value };
};

module.exports = todoAdd;
