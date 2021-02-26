import React, { useState } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import TaskModal from './TaskModal.jsx';

const ConnectedTaskModal = connect(mapStateToProps, mapDispatchToProps)(TaskModal);

const TaskCard = ({ id, status, title, task, removeTask }) => {
  const [toggleModal, setToggleModal] = useState(false);

  let style;
  if (status === 'todo') style = {background: `palegoldenrod`};
  else if (status === 'wip') style = {background: `lightblue`};
  else if (status === 'finished') style = {background: `lightgreen`};

  return (
    <>
      <div className="card-container" style={style}>
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
          <button className="card-edit-button" onClick={() => setToggleModal(true)}>Edit</button>
          <button className="card-delete-button" onClick={() =>{removeTask(id)}}>Remove</button>
        </div>
      </div>
      {toggleModal &&
        <ConnectedTaskModal id={id} status={status} title={title} task={task} setToggleModal={setToggleModal} exist={true} />
      }
    </>
  )
};

export default TaskCard;