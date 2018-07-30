import React from 'react';
import ReactDOM from  'react-DOM';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions.js';
import App from './components/app.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const rootElement = document.getElementById('rootElement');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<h1>Todos App</h1>, root);
  ReactDOM.render(<App />, rootElement);

});
