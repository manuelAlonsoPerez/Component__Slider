import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/Index.css';
import './normalize.css';
import DashboardApp from './dashboard-app';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <DashboardApp />
    </Provider>,    
    document.getElementById('root'));
registerServiceWorker();
