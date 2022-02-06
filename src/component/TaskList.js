import React from "react";

import style from "./TaskList.module.css";
export const TaskList = (props) => {
  const changeStatus = (e) => {
    props.updateStatus(props.taskId, e.currentTarget.checked);
  };
  const deleteTask = (e) => {
    props.removeTask(props.taskId);
  };

  return (
    <div className={style.container}>
      <input type="Checkbox" onChange={changeStatus} />
      <div className={!props.taskStatus ? style.taskNotDone : style.taskDone}>
        {props.taskName}
      </div>
      <button className={style.btn} onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};
