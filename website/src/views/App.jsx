import React from 'react';
import {Switch, Route} from 'react-router-dom'
import '../assets/styles/App.css';
import {Navbar} from '../components';
import {Schedule,AppointmentView, Frontpage, NoteView, ToDoView} from '../views';


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
