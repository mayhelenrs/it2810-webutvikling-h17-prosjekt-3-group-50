import React from 'react';
import '../assets/styles/appointment.css';

export class AppointmentItem extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          title: props.title,
          text: props.text,
          color: props.color,
          width: 0,
          height: 0
      }
  }
  render(){
    return(
      <li className="tile-wrapper" key={this.props.index}>
        <div className="color-tile" style={{backgroundColor: ''+this.state.color, bordercolor: ''+this.state.color}}></div>
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
