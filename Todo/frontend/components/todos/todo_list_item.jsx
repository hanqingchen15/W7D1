import React from 'react';

class TodoListItem extends React.Component {
  constructor(prop) {
    super(prop);

  }

  render() {
    return (
      <li className="todo-list-item">
        {title}
      </li>
    );
  }
}
export default TodoListItem;
