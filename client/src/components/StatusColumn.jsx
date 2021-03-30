import React, { useState } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import TaskCard from './TaskCard.jsx';
import AddTaskButton from './AddTaskButton.jsx';

const ConnectedTaskCard = connect(mapStateToProps, mapDispatchToProps)(TaskCard);

const StatusColumn = ({ id, tasks }) => {
  const classname = `${id}-column-container`;
  return (
    <div className={id}>
      <div className="column-name-container">
        <h1 className="column-name">{id.toUpperCase()}</h1>
      </div>
      <AddTaskButton column={id} />
      <div className={classname}>
      {tasks.map(task => (
        <ConnectedTaskCard
          key={task.title}
          id={task.id}
          title={task.title}
          task={task.task}
          status={task.status}
        />
      ))}
      </div>
    </div>
  )
};

export default StatusColumn;