import React, { useState } from "react";
import Input from "./component/Input";
import { TaskList } from "./component/TaskList";
import style from "./App.module.css";
const DUMMY_Array = [];
function App() {
  const [todos, setTodos] = useState(DUMMY_Array);
  const setTaskList = (newTask) => {
    setTodos((prevState) => {
      return [...todos, newTask];
    });
  };
  const updateStatus = (id_, status_) => {
    const index = todos.findIndex((e) => e.id === id_);
    todos[index].status = status_;

    setTodos([...todos]);
  };
  const removeTask = (id_) => {
    const index = todos.findIndex((e) => e.id === id_);
    todos.splice(index, 1);

    setTodos([...todos]);
  };

  return (
    <div className={style.container}>
      <Input setTask={setTaskList} />
      <ul className={style.expensesList}>
        {todos.map((task) => (
          <li key={task.id}>
            <TaskList
              taskName={task.taskName}
              taskId={task.id}
              taskStatus={task.status}
              updateStatus={updateStatus}
              removeTask={removeTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
