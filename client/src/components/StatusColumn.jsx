import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import TaskCard from './TaskCard.jsx';

const ConnectedTaskCard = connect(mapStateToProps, mapDispatchToProps)(TaskCard);

const StatusColumn = ({ className, tasks }) => {
  return (
    <div className={className}>
      {tasks.map(task => (
        <ConnectedTaskCard key={task.id} id={task.id} title={task.title} task={task.task} />
      ))}
    </div>
  )
};

export default StatusColumn;