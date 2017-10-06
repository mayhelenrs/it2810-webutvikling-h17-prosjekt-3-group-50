import React from 'react';
import '../assets/styles/appointment.css';

export class AppointmentItem extends React.Component {
  render(){
    return(
      <li className="tile-wrapper" key={this.props.index}>
        <div className="color-tile"></div>
        <div className="titleText">
          <p>{this.props.description}</p>
        </div>
        <div className="dateText">
          <p>{this.props.time}</p>
          <p>{this.props.date}</p>
        </div>
      </li>

    );
  }
}
