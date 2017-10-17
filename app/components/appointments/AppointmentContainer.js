import React from 'react';
import update from 'react-addons-update';
import {AppointmentItem} from './AppointmentItem.js';
import {View, TextInput, StyleSheet} from 'react-native';

export class AppointmentContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            displayList: [],
            desc: 'Insert desc',
            time: 'Insert time',
            date: 'Insert date'
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
                desc:'Insert dasc',
                time:'Insert time',
                date:'Insert date'
            }, () => this.filter())

        }
        e.preventDefault()
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
            <View>
                <View>
                    {this.state.displayList}
                </View>
                <TextInput name={"desc"} value={this.state.desc} onChangeText={this.handleChange.bind(this)}/>
                <TextInput name={"time"} value={this.state.time} onChange={this.handleChange.bind(this)}/>
                <TextInput name={"date"} value={this.state.date} onChange={this.handleChange.bind(this)}/>
            </View>
        );
    }
}
