import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';

export const Root = () => (
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
