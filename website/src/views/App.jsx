import React from 'react';
import {Switch, Route} from 'react-router-dom'
import '../assets/styles/App.css';
import {Navbar} from '../components';
import {Schedule,Appointment, Frontpage, NoteView, ToDoView} from '../views';


export class App extends React.Component {
    render() {
        return (
            <div className="body-fullwidth">
                <Navbar navbarLocation={"DASHBOARD"}/>
                <div id="content-container">
                    <Switch>
                        <Route exact path='/' component={Frontpage}/>
                        <Route exact path='/todo' component={ToDoView}/>
                        <Route exact path='/schedule' component={Schedule}/>
                        <Route exact path='/appointments' component={Appointment}/>
                        <Route exact path='/note' component={NoteView}/>
                        <Route exact path='/todo' component={ToDoView}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
