import React from 'react';
import '../../assets/styles/appointment.css';
import {LocalStorage} from "../../service/LocalStorage";

export class AppointmentItem extends React.Component {

    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state);
    }

    componentDidMount() {
        LocalStorage.loadToState(this.getSaveName(), this);
    }

    removeAppointment() {
        this.props.handleRemove(this);
    }

    getSaveName() {
        return "Appointment" + this.props.id;
    }
    render() {
        return (
            <div className="tile-wrapper" key={this.props.index}>
                <div className="color-tile" style={{
                    backgroundColor: '' + this.props.color,
                    borderColor: '' + this.props.color
                }}></div>
                <div className="textComponents">
                    <div className="titleText">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="timeText">
                        <p>{this.props.time}</p>
                    </div>
                    <div className="dateText">
                        <p>{this.props.date}</p>
                    </div>
                </div>
                <div className="deleteButtonWrap">
                    <input type="button" className="deleteButton"
                        onClick={() => {this.removeAppointment()}} />
                </div>
            </div>
        );
    }
}
