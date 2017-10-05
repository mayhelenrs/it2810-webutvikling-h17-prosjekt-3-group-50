import React from 'react';
import '../assets/styles/App.css';
import {Switch, Route} from 'react-router-dom'
import {ToDo, Navbar} from '../components';
import {Frontpage, NoteView} from '../views';


export class App extends React.Component {
  render() {
    return (
    	<div className="body-fullwidth">
    		<Navbar navbarLocation={"DASHBOARD"}/>
    		<div id="content-container">
    			<Switch>
			      <Route exact path='/' component={Frontpage}/>
			      <Route exact path='/note' component={NoteView}/>
			      <Route exact path='/todo' component={ToDo}/>
			    </Switch>
    		</div>
    	</div>
    );
  }
}
