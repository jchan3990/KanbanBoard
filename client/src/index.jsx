import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './container/store.js';
import { mapStateToProps, mapDispatchToProps } from './redux/mapProps.js';
import App from './components/App.jsx';

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>, document.getElementById("app")
);
