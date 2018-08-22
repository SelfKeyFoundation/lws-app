import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./state/store";

const reduxStore = configureStore( window.REDUX_INITIAL_DATA );


const RootHtml = ( ) => (
  <ReduxProvider store={ reduxStore }>
      <Router>
          <App />
      </Router>
  </ReduxProvider>
);

ReactDOM.render(<RootHtml />, document.getElementById('root'));
registerServiceWorker();
