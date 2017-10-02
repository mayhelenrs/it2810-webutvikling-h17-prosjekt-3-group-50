import React from 'react';
import '../assets/styles/App.css';
import {Frontpage} from "./frontpage";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="HeaderText">Welcome to iPIM</h2>
        <p className="App-intro">
          Middag? yes please h
        </p>
      </div>
    );
  }
}
