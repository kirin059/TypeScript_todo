import React, { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { ITask } from './interface';
import TodoTask from './Component/TodoTask';
import './App.css';
import { ConsoleWriter } from 'istanbul-lib-report';

// React.FC 를 사용 할 때는 props 의 타입을 Generics 로 넣어서 사용할 수 있다
const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  } 
 
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodo([...todo, newTask])
    setTask("");
    setDeadline(0);
    console.log(todo)
  }

  // delete items
  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {return task.taskName != taskNameToDelete}))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task you have to do ..."
            onChange={handleChange} />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline (in Days) ..."
            onChange={handleChange}/>
        </div>
        <button onClick={ addTask }>Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
