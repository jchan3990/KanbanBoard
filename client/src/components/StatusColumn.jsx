import React, { useState } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import TaskCard from './TaskCard.jsx';
import AddTaskButton from './AddTaskButton.jsx';

const ConnectedTaskCard = connect(mapStateToProps, mapDispatchToProps)(TaskCard);

const StatusColumn = ({ id, tasks }) => {
//   let column = id;

//   const dragOver = e => {
//     e.preventDefault();
//     console.log(e.target.className);
//   }

//   const drop = (e, status) => {
//     let id = e.dataTransfer.getData("id");

//     let taskList = tasks.filter((task) => {
//       if (task.id === id) task.status = cat;
//       return task;
//     });

//     console.log(taskList);
//   }

  return (
    <div className={id}>
      <div className="column-name-container">
        <h1 className="column-name">{id.toUpperCase()}</h1>
      </div>
      <AddTaskButton column={id} />
      {tasks.map(task => (
        <ConnectedTaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          task={task.task}
          status={task.status}
        />
      ))}
    </div>
  )
};

export default StatusColumn;