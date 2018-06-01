const Todos = require('../data/todoData');

const todoEdit = ({ id, value }) => {
  Todos.map(todo => {
    if (todo.id === id) {
      const editedTodo = todo;
      editedTodo.value = value;
      return editedTodo;
    }
    return false;
  });
  return Todos.find(todo => todo.id === id);
};

module.exports = todoEdit;
