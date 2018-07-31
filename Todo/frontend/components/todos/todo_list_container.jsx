import { connect } from 'react-redux';
import ToDoList from './todo_list.jsx';


import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
