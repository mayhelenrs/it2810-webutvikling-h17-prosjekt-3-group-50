import React from 'react';
import '../assets/styles/App.css';
import {ToDo} from '../components/ToDo.jsx';
import {Frontpage} from "./frontpage";


export class App extends React.Component {
  render() {
    return (
    	<ToDo/>
    );
  }
}
