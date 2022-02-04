import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksState, setTasksState] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleTaskDelete(text) { // Task 1. Create delete function in closest parent
    setTasksState(tasksState.filter(task => task.text !== text))
  }
  
  function handleCategoryFilter(newSelectedCategory) { // CF 4. The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed
    setSelectedCategory(newSelectedCategory)
  }

  const filteredTasks = tasksState.filter(task => { // Can't access in a function, need to be outside of scope
    if (selectedCategory === "All") {
      return true
    } else {
      return task.category === selectedCategory
    }
  })

  function handleTaskAdd(newTask) { // Creating a callback for NewTaskForm
    const newTaskArray = [...tasksState, newTask]
    setTasksState(newTaskArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} // CF 1. Pass the list of categories to this component from App 
        selectedCategory={selectedCategory}
        handleCategoryFilter={handleCategoryFilter}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleTaskAdd}
      />
      <TaskList 
        tasks={filteredTasks} 
        handleDelete={handleTaskDelete} // Task 2. Passing delete function to child
      />
    </div>
  );
}

export default App;
