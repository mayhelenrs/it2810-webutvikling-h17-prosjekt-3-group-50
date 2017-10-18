import React from 'react';
import update from 'react-addons-update';
import {AppointmentItem} from './AppointmentItem.jsx';
import '../../assets/styles/appointment.css';
import {LocalStorage} from "../../service/LocalStorage";

export class AppointmentContainer extends React.Component {
    //initiating states and binds functions to this
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

    //changes a state when given a target, is used on inputfields
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
    //retruns selectedColor or a predefined color in none is chosen
    getColor() {
        const color = this.props.selectedColor()
        return color === undefined
            ? '#016D91'
            : color
    }

    //checks if all inputfields have content, then makes a new list so we doesnt directly manipulate state
    //next a new appointment is made and pushed to the new list, then the state gets updated to the new list
    //and inputfields are clear by setting state to nothing
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

    //way to generate and appointment when you dont have any id
    generateAppointment(desc, time, date, color) {
        const id = this.appointmentCount++;
        return this.generateAppointmentWithId(desc, time, date, color, id);
    }

    //simple way to create a new appointment
    generateAppointmentWithId(desc, time, date, color, id) {
        return <AppointmentItem description={desc} time={time} date={date} key={id} color={color} id={id} handleRemove={this.handleRemove}/>
    }

    //when a component is updated its state will be saved
    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state.list.map(appointment => {
            return {desc: appointment.props.description, time: appointment.props.time, date: appointment.props.date, color: appointment.props.color, id: appointment.props.id};
        }));
    }


    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            let appointments = [];
            data.forEach((appointment) => {
                appointments.push(this.generateAppointmentWithId(appointment.desc, appointment.time, appointment.date, appointment.color, appointment.id));
            });
            this.setState((prevState) => {
                return {...prevState, list: appointments};
            }, () => this.filter());
        });
    }

    //used for deleting one specified appointment by checking if the specified appointment is in the list.
    //if it is, it is remeved and the list is updated to the new list without the specified appointment
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

    getSaveName() {
        return "AppointmentIds";
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
