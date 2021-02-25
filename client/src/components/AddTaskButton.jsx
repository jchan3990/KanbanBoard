import React from 'react';

const AddTaskButton = ({ column }) => {
  return (
    <div className="add-task-button-container" onClick={() => {console.log(column)}}>
      <div className="add-task-button-image-container">
        <img className="add-task-button" src="../dist/images/add-50.png" />
      </div>
    </div>
  )
};

export default AddTaskButton;