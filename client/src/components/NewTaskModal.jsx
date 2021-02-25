import React, { useState } from 'react';

const NewTaskModal = ({ column, setToggleModal, addTask }) => {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');

  const cancelCreate = e => {
    e.preventDefault();
    setToggleModal(false);
  }

  const saveTask = e => {
    e.preventDefault();
    addTask(
      {
        status: column,
        title: title,
        task: task,
      }
    )

    setTitle('');
    setTask('');

    setToggleModal(false);
  }

  return (
    <div className="modal-container">
      <form>
        <div className="modal-title-container">
          <label>Title:
            <br/>
            <input
              type="text"
              name="title"
              minLength="1"
              maxLength="50"
              size="50"
              placeholder="Max 50 characters"
              value={title}
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
              name="task"
              rows="5"
              cols="43"
              value={task}
              onChange={e => setTask(e.target.value)}
            >
            </textarea>
          </label>
        </div>
        <div className="modal-buttons-container">
          <button onClick={cancelCreate}>Cancel</button>
          <button onClick={saveTask}>Save</button>
        </div>
      </form>
    </div>
  )
};

export default NewTaskModal;