import React from 'react';
import { connect } from 'react-redux';

import StatusColumn from './StatusColumn.jsx';

const App = ({ todo, wip, finished, moveTask }) => {
  let status = '';

  const dragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.className === "todo" || e.target.className === "wip" || e.target.className === "finished") status = e.target.className;
  }

  const drop = (e, status) => {
    let id = e.dataTransfer.getData("task_id");
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
