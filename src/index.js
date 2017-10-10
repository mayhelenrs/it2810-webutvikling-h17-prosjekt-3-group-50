import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {App} from './views';
import {ToDoView} from '../website/src/views/ToDoView.jsx';
import registerServiceWorker from './service/registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
