import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {Appointment} from './views';
import registerServiceWorker from './service/registerServiceWorker';
import {NoteView} from './views';

ReactDOM.render(<Appointment />, document.getElementById('root'));
registerServiceWorker();
