import React from 'react';

const Todo = () => {
  return (
    <div className="todo-item">
      <input className="toggle" type="checkbox"></input>
      <div className="move-right"><i className="fas fa-times"></i></div>
    </div>
  );
}

export default Todo
