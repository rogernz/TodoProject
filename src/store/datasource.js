const todos = [];
const todoListeners = [];

export default {
  addTodoListener(listener) {
    todoListeners.push(listener);
  },

  removeTodoListener(listener) {
    const idx = todoListeners.indexOf(listener);
    todoListeners.slice(idx, 1);
  },
  getTodos() {
    return todos;
  },
};
