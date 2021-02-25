import React, { useState } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../redux/mapProps.js';
import NewTaskModal from './NewTaskModal.jsx';

const ConnectedNewTaskModal = connect(mapStateToProps, mapDispatchToProps)(NewTaskModal);

const AddTaskButton = ({ column }) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
    <div className="add-task-button-container" onClick={() => setToggleModal(true)}>
      <div className="add-task-button-image-container">
        <img className="add-task-button" src="../dist/images/add-50.png" />
      </div>
    </div>
      {toggleModal &&
        <ConnectedNewTaskModal column={column} setToggleModal={setToggleModal} />
      }
    </>
  )
};

export default AddTaskButton;