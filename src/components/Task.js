import React from "react";

function Task({ text, category, onDeleteTask }) { // Task 5. Sibling takes delete function

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete" 
        onClick={() => onDeleteTask(text)} // Task 6. Calling the function to identify
      >X</button>
    </div>
  );
}

export default Task;


// [X] Add event listener to button
// [X] Have event listener identify key
// [X] Get key(text) from child to parent (create a function to pass as a callback)
// [X] Use the filter method to filter the TaskList in parent component