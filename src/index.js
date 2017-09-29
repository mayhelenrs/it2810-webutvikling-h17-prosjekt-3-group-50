import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {NoteView} from './views';
import registerServiceWorker from './service/registerServiceWorker';

ReactDOM.render(<NoteView/>, document.getElementById('root'));
registerServiceWorker();
