import React from 'react';
import update from 'react-addons-update';
import {AppointmentItem} from './appointmentItem.jsx';
import '../../assets/styles/appointment.css';

export class AppointmentContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            displayList: [],
            desc: '',
            time: '',
            date: ''
        }
        this.appointmentCount = 0;
        this.handleRemove = this.removeAppointment.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.filter = this.filter.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    filter() {
        const appointList = this.props.selectedColor() === undefined
            ? this.state.list.map((item) => item)
            : this.state.list.filter((item) => item.props.color === this.props.selectedColor());
        this.setState((prevState) => {
            return {
                ...prevState,
                displayList: appointList
            }
        })
    }

    getColor() {
        const color = this.props.selectedColor()
        return color === undefined
            ? '#016D91'
            : color
    }

    formSubmit(e) {
        if (this.state.desc.length > 0 && this.state.time.length > 0 && this.state.date.length > 0) {
            const newList = this.state.list.slice()
            const index = newList.length
            const newAppointment = this.generateAppointmentWithId(this.state.desc, this.state.time, this.state.date, this.getColor(), index);
            newList.push(newAppointment)
            this.setState({
                list: newList,
                desc:'',
                time:'',
                date:''
            }, () => this.filter())

        }
        e.preventDefault()
    }

    generateAppointment(desc, time, date, color) {
        const id = this.appointmentCount++;
        return this.generateAppointmentWithId(desc, time, date, color, id);
    }

    generateAppointmentWithId(desc, time, date, color, id) {
        return <AppointmentItem description={desc} time={time} date={date} key={id} color={color} id={id} handleRemove={this.handleRemove}/>
    }

    componentDidUpdate() {
        this.save();
    }

    componentDidMount() {
        const appointments = [];
        const appointmentIds = this.load();
        if (appointmentIds !== null) {
            appointmentIds.forEach(id => {
                const appointment = JSON.parse(localStorage.getItem("Appointment" + id));
                appointments.push(this.generateAppointmentWithId(appointment.description, appointment.time, appointment.date, appointment.color, id));

            });
            this.setState(prevState => {
                return {
                    ...prevState,
                    list: appointments,
                    displayList: appointments
                };
            }, () => this.filter());
        }
    }

    save() {
        if (this.state.list.length === 0)
            localStorage.removeItem("AppointmentIds");
        else
            localStorage.setItem("AppointmentIds", this.state.list.map(appointment => {
                return appointment.props.id
            }));
        }

    load() {
        if ("AppointmentIds" in localStorage)
            return localStorage.getItem("AppointmentIds").split(",").map((id) => {
                return parseInt(id, 10)
            });
        return null;
    }

    removeAppointment(element) {
        this.state.list.forEach((appointment, index) => {
            if (appointment.props.id === element.props.id) {
                this.setState(prevState => {
                    return {
                        list: update(prevState.list, {
                            $splice: [
                                [index, 1]
                            ]
                        })
                    };
                }, () => this.filter());
            }
        });
    }

    render() {
        return (
            <div>
                <div className="appointmentCards">
                    {this.state.displayList}
                </div>
                <form onSubmit={this.formSubmit} className="formAppointment">
                    <input type="text" className="appointmentInput" name="desc" value={this.state.desc} onChange={this.handleChange.bind(this)} placeholder="Insert description"/>
                    <input type="text" className="appointmentInput" name="time" value={this.state.time} onChange={this.handleChange.bind(this)} placeholder="Insert time"/>
                    <input type="text" className="appointmentInput" name="date" value={this.state.date} onChange={this.handleChange.bind(this)} placeholder="Insert date"/>
                    <button onSubmit={this.formSubmit} id="formButton">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}
