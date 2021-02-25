import React from 'react';
import { connect } from 'react-redux';

import StatusColumn from './StatusColumn.jsx';

const App = ({ todo, wip, finished }) => {
  return (
    <div className="main">
      <StatusColumn className="todo-column" tasks={todo} />
      <StatusColumn className="wip-column" tasks={wip} />
      <StatusColumn className="finished-column" tasks={finished} />
    </div>
  )
};

export default App;
