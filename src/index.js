import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {Frontpage} from './views';
import registerServiceWorker from './service/registerServiceWorker';
import {NoteView} from './views';

ReactDOM.render(<NoteView />, document.getElementById('root'));
registerServiceWorker();
