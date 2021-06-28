import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const {addTask, clearTasks, editTask, editItem} = useContext(TaskListContext);
  const [title, setTitle]=useState('');
  const [btnEdit, setBtnEdit]=useState(false);

  const handleChange=(e)=>{
    setTitle(e.target.value)
    console.log(title)
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(editItem)
      if(editItem===null){
        addTask(title)
        setTitle("")
      }else {
        editTask(title, editItem.id);
      }
      
      setBtnEdit(false)

}

useEffect(()=>{
if(editItem !==null){
  setTitle(editItem.title)
  setBtnEdit(true);
  //console.log(editItem)
}else{
  setTitle("");
}
},[editItem])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
        onChange={handleChange}
        value={title}
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {btnEdit ? "Edit" : "Add"} Task
        </button>
        <button className="btn clear-btn" onClick={clearTasks}>Clear Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
