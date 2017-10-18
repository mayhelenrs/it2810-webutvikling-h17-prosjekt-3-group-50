import React from 'react';
import {render} from 'react-dom';
//import routing components
import {BrowserRouter} from 'react-router-dom';
//import css
import './assets/styles/index.css';
//import services
import registerServiceWorker from './service/registerServiceWorker';
//import views
import {App} from './views';


render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
