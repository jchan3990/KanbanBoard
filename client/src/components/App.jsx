import React from 'react';
import { connect } from 'react-redux';

import StatusColumn from './StatusColumn.jsx';

const App = ({ todo, wip, finished }) => {
  return (
    <div className="main">
      <StatusColumn id="todo" className="status-column" tasks={todo} />
      <StatusColumn id="wip" className="status-column" tasks={wip} />
      <StatusColumn id="finished" className="status-column" tasks={finished} />
    </div>
  )
};

export default App;
