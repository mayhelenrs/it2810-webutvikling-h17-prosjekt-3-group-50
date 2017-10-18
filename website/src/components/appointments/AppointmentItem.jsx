import React from 'react';
import '../../assets/styles/Appointment.css';
import {LocalStorage} from "../../service/LocalStorage";

export class AppointmentItem extends React.Component {

    //because of the way new appointments are created in AppointmentContainer I
    //do not need a constructor og states in this class

    //when a component is updated it is saved to LocalStorage
    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state);
    }

    //way to bring back saved appointment from LocalStorage
    componentDidMount() {
        LocalStorage.loadToState(this.getSaveName(), this);
    }

    //binds this removeAppointment to handleRemove
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
                           onClick={() => {
                               this.removeAppointment()
                           }}/>
                </div>
            </div>
        );
    }
}
