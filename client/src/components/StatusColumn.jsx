import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import TaskCard from './TaskCard.jsx';
import AddTaskButton from './AddTaskButton.jsx';

const ConnectedTaskCard = connect(mapStateToProps, mapDispatchToProps)(TaskCard);

const StatusColumn = ({ className, tasks }) => {
  let column = className.split('-')[0];

  return (
    <div className={className}>
      <AddTaskButton column={column} />
      {tasks.map(task => (
        <ConnectedTaskCard key={task.id} id={task.id} title={task.title} task={task.task} status={task.status} />
      ))}
    </div>
  )
};

export default StatusColumn;