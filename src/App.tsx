import React, { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import './App.css';

// React.FC 를 사용 할 때는 props 의 타입을 Generics 로 넣어서 사용할 수 있다
const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  } 

  const addTask = (): void => {
    setTask([...todo, task])
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder="Task you have to do ..." onChange={ handleChange } />
          <input type="number"  name="deadline" placeholder="Deadline (in Days) ..." />
        </div>
        <button onClick={ addTask }>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
