import React from 'react';
import '../assets/styles/appointmentItem.css';

export class AppointmentItem extends React.Component {
  render(){
    return(
      <div  className="wrapper-center">
        <h1 className="title">{this.props.title}</h1>
        <div className="fillText">
          <p>Sted: {this.props.location}</p>
          <p>Klokkeslett: {this.props.time}</p>
          <p>Beskrivelse: {this.props.description}</p>
        </div>
      </div>
    );
  }
}
