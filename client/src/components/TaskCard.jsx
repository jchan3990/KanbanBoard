import React from 'react';

const TaskCard = ({ id, title, task, removeTask }) => {
  return (
    <div className="card-container">
      <div className="card-title-container">
        <div className="card-title-content">
          <b>{title}</b>
        </div>
      </div>
      <div className="card-task-container">
        <div className="card-task-content">
          {task}
        </div>
      </div>
      <div className="card-button-container">
        <button className="card-edit-button">Edit</button>
        <button className="card-delete-button" onClick={() =>{removeTask(id)}}>Remove</button>
      </div>
    </div>
  )
};

export default TaskCard;