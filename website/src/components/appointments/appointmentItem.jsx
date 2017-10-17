import React from 'react';
import '../../assets/styles/appointment.css';

export class AppointmentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            color: this.props.color,
            time: this.props.time,
            date: this.props.date
        }
    }
    componentDidUpdate() {
        this.save();
    }

    componentDidMount() {
        const data = this.load();
        if (data !== null) {
            this.setState(prevState => {
                return {...prevState, data}
            });
        }
        this.save();
    }

    save() {
        localStorage.setItem("Appointment" + this.props.id, JSON.stringify(this.state));
    }

    load() {
        return JSON.parse(localStorage.getItem("Appointment" + this.props.id));
    }

    removeAppointment() {
        this.props.handleRemove(this);
        localStorage.removeItem("Appointment" + this.props.id)
    }
    render() {
        return (
            <div className="tile-wrapper" key={this.props.index}>
                <div className="color-tile" style={{
                    backgroundColor: '' + this.state.color,
                    borderColor: '' + this.state.color
                }}></div>
                <div className="titleText">
                    <p>{this.state.description}</p>
                </div>
                <div className="dateText">
                    <p>{this.state.time}</p>
                    <p>{this.state.date}</p>
                </div>
                <div className="deleteButtonWrap">
                    <img src={require("../../assets/images/close_red.png")} alt={"Delete button"} id="deleteButton"/>
                </div>
            </div>
        );
    }
}
