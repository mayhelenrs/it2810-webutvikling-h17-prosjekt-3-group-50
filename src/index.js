import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {Frontpage} from './views';
import registerServiceWorker from './service/registerServiceWorker';


ReactDOM.render(<Frontpage />, document.getElementById('root'));
registerServiceWorker();
