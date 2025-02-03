import React, { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };
  const addTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
    }
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">TaskQuest</h1>
        <div className="text-center">
          <input 
          type = "text"
          value = {newTaskText}
          onChange={handleInputChange}
          className= 'form-control mb-3'
          placeholder='Enter a new task...' />
          <button
            onClick={addTask}
            type="button"
            className="btn btn-primary btn-success btn-lg mb-4"
          >
            Add Task
          </button>
          <div className="task-list" style={{ maxWidth: "18 rm", margin: "0 auto" }}>
            {tasks.map((task) => (
              <div key={task.id} className="card mb-3 border border-3 border-dark shadow-sm">
                <div className = "card-body d-flex justify-content-between align-items-center">
               <p className ="card-text mb-0"> {task.text}</p>
               <button 
               onClick = {() => deleteTask(task.id)}
               className = "btn btn-danger btn-sm">
                Delete
               </button>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoList;
