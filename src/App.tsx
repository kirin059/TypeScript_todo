import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Task you have to do ..." />
        <input type="number" placeholder="Deadline (in Days) ..." />
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
