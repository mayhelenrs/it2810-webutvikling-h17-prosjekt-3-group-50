import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {App} from './views';
import {ToDoView} from './views/ToDoView.jsx';
import registerServiceWorker from './service/registerServiceWorker';


ReactDOM.render(<ToDoView />, document.getElementById('root'));
registerServiceWorker();
