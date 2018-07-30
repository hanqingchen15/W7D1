import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';

// reducers/todos_reducer.js
const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      for (var i = 0; i < action.todos.length; i++) {
         newState[action.todos[i].id] = action.todos[i];
      }
      return newState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newTodo);
    default:
      return state;
  }
};

export default todosReducer;
