import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/app';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
