import React from 'react';
import Input from './Input';
import Todo from './Todo';

const App = () => {
  return (
    <div>
      <h1 className="center">Todos</h1>
      <Input />
      <Todo />
    </div>
  );
}

export default App
