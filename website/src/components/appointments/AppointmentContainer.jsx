import React from 'react';
import {AppointmentItem} from './appointmentItem.jsx';
import '../../assets/styles/appointment.css';

export class AppointmentContainer extends React.Component {
    constructor(props) {
        super(props)
        let appointmentList = []
        this.state = {
            list: appointmentList,
            displayList: appointmentList,
            desc: '',
            time: '',
            date: ''
        }
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
            const newAppointment = <AppointmentItem description={this.state.desc} time={this.state.time} date={this.state.date} key={index} color={this.getColor()}/>
            newList.push(newAppointment)
            this.setState({
                list: newList
            }, () => this.filter())

        }
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <div className="appointmentCards">
                    {this.state.displayList}
                </div>
                <form onSubmit={this.formSubmit} className="formAppointment">
                    <div className="formList">
                        <div>
                            <input type="text" className="appointmentInput" name="desc" value={this.state.desc} onChange={this.handleChange.bind(this)} placeholder="Insert description"/>
                        </div>
                        <div>
                            <input type="text" className="appointmentInput" name="time" value={this.state.time} onChange={this.handleChange.bind(this)} placeholder="Insert time"/>
                        </div>
                        <div>
                            <input type="text" className="appointmentInput" name="date" value={this.state.date} onChange={this.handleChange.bind(this)} placeholder="Insert date"/>
                        </div>
                        <div>
                            <button onSubmit={this.formSubmit} id="formButton">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
