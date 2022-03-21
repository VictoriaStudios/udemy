import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestProvider from './components/store/TestProvider';
import {Provider} from 'react-redux'
import reduxStore from './components/store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
    <TestProvider>
    <App />
    </TestProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

