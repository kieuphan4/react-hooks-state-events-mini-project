import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, handleCategoryFilter }) {
  // Rendering a list of JSX elements
  const buttonElements = categories.map(category => {
    return (
    <button // CF 2. Update this component to display <button> elements for each category
      key={category}
      className={category === selectedCategory ? "selected" : null} // CF 3. Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned
      onClick={() => handleCategoryFilter(category)}
    >{category}</button>)
  })
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;

// [X] Add event listener to button
// [X] Have event listener identify key
// [X] Get key(text) from child to parent (create a function to pass as a callback)
// [X] Use the filter method to filter the CategoryFilter in parent component