import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) { // Task 3. Child takes the delete function as a prop
  const tasksArray = tasks.map(task => {
    return <Task 
      key={task.text} // Text is the unique id
      text={task.text} 
      category={task.category}
      onDeleteTask={handleDelete} // Task 4. Passes delete function to sibling
    />
  })
  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
