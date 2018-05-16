import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Index.css';
import './normalize.css';
import DashboardApp from './dashboard-app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <DashboardApp />,
    document.getElementById('root'));
registerServiceWorker();
