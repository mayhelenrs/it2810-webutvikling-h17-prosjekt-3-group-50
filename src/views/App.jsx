import React from 'react';
import {Switch, Route} from 'react-router-dom'
import '../assets/styles/App.css';
import {ToDo, Navbar} from '../components';
import {Calendar, Frontpage, NoteView} from '../views';


export class App extends React.Component {
    render() {
        return (
            <div className="body-fullwidth">
                <Navbar navbarLocation={"DASHBOARD"}/>
                <div id="content-container">
                    <Switch>
                        <Route exact path='/' component={Frontpage}/>
                        <Route exact path='/todo' component={ToDo}/>
                        <Route exact path='/calendar' component={Calendar}/>
                        <Route exact path='/note' component={NoteView}/>
                        <Route exact path='/todo' component={ToDo}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
