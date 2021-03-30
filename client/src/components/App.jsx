import React from 'react';
import { connect } from 'react-redux';

import StatusColumn from './StatusColumn.jsx';

const App = ({ allTasks, todo, wip, finished, moveTask }) => {
  let status = '';

  const dragOver = e => {
    e.preventDefault();
    if (e.target.className === "todo-column-container" || e.target.className === "wip-column-container" || e.target.className === "finished-column-container") status = e.target.className;
  }

  const drop = (e, status) => {
    let id = e.dataTransfer.getData("task_id");
    status = status.split('-')[0];
    console.log(status)
    moveTask(parseInt(id), status);
  }

  return (
    <div className="main" onDragOver={dragOver} onDrop={e => drop(e, status)}>
      <StatusColumn id="todo" className="status-column" tasks={todo} />
      <StatusColumn id="wip" className="status-column" tasks={wip} />
      <StatusColumn id="finished" className="status-column" tasks={finished} />
    </div>
  )
};

export default App;
