import React, { useState } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import TaskCard from './TaskCard.jsx';
import AddTaskButton from './AddTaskButton.jsx';

const ConnectedTaskCard = connect(mapStateToProps, mapDispatchToProps)(TaskCard);

const StatusColumn = ({ id, tasks }) => {
  let column = id;

  return (
    <div className={id}>
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