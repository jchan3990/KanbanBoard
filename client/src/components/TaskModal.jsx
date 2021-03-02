import React, { useState } from 'react';

const TaskModal = ({ id, status, title, task, column, setToggleModal, addTask, editTask, exist }) => {
  const [currTitle, setTitle] = useState(title !== undefined ? title : '');
  const [currTask, setTask] = useState(task !== undefined ? task : '');
  const [currStatus, setStatus] = useState(status !== undefined ? status : column);

  const cancelCreate = e => {
    e.preventDefault();
    setToggleModal(false);
  }

  const saveTask = e => {
    e.preventDefault();
    addTask(
      {
        status: column,
        title: currTitle,
        task: currTask,
      }
    )
    setToggleModal(false);
  }

  const handleEditTask = e => {
    e.preventDefault();
    editTask(id,
      {
        title: currTitle,
        task: currTask,
      }
    )

    setToggleModal(false);
  }

  let handleSave;
  exist === undefined ? handleSave = saveTask : handleSave = handleEditTask;

  return (
    <>
    <div className="modal-background"></div>
    <div className="modal-container">
      <form>
        <div className="modal-title-container">
          <label>Title:
            <br/>
            <input
              type="text"
              name="currTitle"
              minLength="1"
              maxLength="50"
              size="50"
              placeholder="Max 50 characters"
              value={currTitle}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <br/>
        <div className="modal-task-container">
          <label>Task:
            <br/>
            <textarea
              name="currTask"
              rows="5"
              cols="43"
              value={currTask}
              onChange={e => setTask(e.target.value)}
            >
            </textarea>
          </label>
        </div>
        <div className="modal-buttons-container">
          <button onClick={cancelCreate}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
    </>
  )
};

export default TaskModal;