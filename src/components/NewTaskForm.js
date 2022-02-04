import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // const optionElements = categories.map(category => {
  //   let element;
  //   category === "All" 
  //   ? element = null 
  //   : element = <option key={category}>{category}</option>
  // }) 

  // Form (controlled components) get values from state, rather than DOM
  const [textState, setTextState] = useState("");
  const [categoryState, setCategoryState] = useState(categories[0]); // Categories is an array

  function handleTextChange(event) {
    setTextState(event.target.value) // Update after each character is typed
  }

  function handleCategoryChange(event) {
    setCategoryState(event.target.value) // Update after each character is typed
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = { text: textState, category: categoryState }
    onTaskFormSubmit(newTask)
  }
    
  const optionElements = categories.map(category => {
    return <option key={category}>{category}</option>
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={textState}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={categoryState}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
