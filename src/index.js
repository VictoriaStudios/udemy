import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestProvider from './components/store/TestProvider';

ReactDOM.render(
  <React.StrictMode>
    <TestProvider>
    <App />
    </TestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

