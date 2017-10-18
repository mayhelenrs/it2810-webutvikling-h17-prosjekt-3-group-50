import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../assets/styles/App.css';
import {AppointmentView, Frontpage, NoteView, Schedule, ToDoView} from '../views';


export class App extends React.Component {
    render() {
        return (
            <div className="body-fullwidth">
                <div id="content-container">
                    <Switch>
                        <Route exact path='/' component={Frontpage}/>
                        <Route exact path='/todo' component={ToDoView}/>
                        <Route exact path='/schedule' component={Schedule}/>
                        <Route exact path='/appointments' component={AppointmentView}/>
                        <Route exact path='/note' component={NoteView}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
