import React from 'react';
import '../../assets/styles/appointment.css';

export class AppointmentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            color: this.props.color,
            time: this.props.time,
            date: this.props.date,
            checked: false
        }
    }

    handleClick() {
        this.setState({checked: !this.state.checked})
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
        const text = this.state.checked;
        return (
            <div className="tile-wrapper" key={this.props.index}>
                <div className="color-tile" style={{
                    backgroundColor: '' + this.state.color,
                    borderColor: '' + this.state.color
                }}></div>
                <div className="textComponents">
                    <div className="titleText">
                        <p>{this.state.description}</p>
                    </div>
                    <div className="timeText">
                        <p>{this.state.time}</p>
                    </div>
                    <div className="dateText">
                        <p>{this.state.date}</p>
                    </div>
                </div>
                <div className="deleteButtonWrap">
                    <input type="checkbox" className="deleteButton" label={text}
                        onClick={() => {this.removeAppointment()}} onChange={() => this.handleClick()}/>
                </div>
            </div>
        );
    }
}
