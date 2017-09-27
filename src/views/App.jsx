import React from 'react';
import '../assets/styles/App.css';
import {NoteHolder} from '../components/NoteHolder.jsx'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="HeaderText">Welcome to iPIM</h2>

          <NoteHolder />

      </div>
    );
  }
}
