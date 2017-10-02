import React from 'react';
import '../assets/styles/App.css';
import {ToDo} from '../components/ToDo.jsx';

export class App extends React.Component {
  render() {
    return (
        <div>
            <ToDo/>
        </div>
    );
  }
}
