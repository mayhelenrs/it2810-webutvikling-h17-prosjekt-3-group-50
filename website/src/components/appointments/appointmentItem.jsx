import React from 'react';
import '../../assets/styles/appointment.css';

export class AppointmentItem extends React.Component {
    render() {
        return (
            <li className="tile-wrapper" key={this.props.index}>
                <div className="color-tile" style={{
                    backgroundColor: '' + this.props.color,
                    borderColor: '' + this.props.color
                }}></div>
                <div className="titleText">
                    <p>{this.props.description}</p>
                </div>
                <div className="dateText">
                    <p>{this.props.time}</p>
                    <p>{this.props.date}</p>
                </div>
                <div className="deleteButton">
                    <img src={require("../../assets/images/close_red.png")} alt={"Delete button"}/>
                </div>
            </li>
        );
    }
}
