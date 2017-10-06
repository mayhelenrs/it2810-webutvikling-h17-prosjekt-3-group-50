import React from 'react';
import { AppointmentItem } from '../components/appointmentItem.jsx';
import '../assets/styles/appointment.css';

export class Appointment extends React.Component {
  constructor(props) {
    super(props)
    let appointmentList = [
      <AppointmentItem description="hei" time="now" date="then" key="32423" />
    ]
    this.state = {
      list: appointmentList,
      desc: '',
      time:'',
      date:''
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  formSubmit(e){
    if(this.state.desc.length > 0 &&
      this.state.time.length > 0 &&
      this.state.date.length > 0){
      const newList = this.state.list.slice()
      const index = newList.length
      const newAppointment = <AppointmentItem
        description={this.state.desc}
        time={this.state.time}
        date={this.state.date}
        key={index}
        />
      newList.push(newAppointment)
      this.setState({
        list: newList
      })
    }
    e.preventDefault()
  }

  render() {
    const appointList = this.state.list.map(
      (item) => item
    )
    return (
      <div>
        <ul>
          {appointList}
        </ul>
        <form onSubmit= {this.formSubmit}>
          <ul className="formList">
            <li>
              <input type="text"
                name="desc"
                value={this.state.desc}
                onChange={this.handleChange.bind(this)}
                placeholder="Insert description"
              />
            </li>
            <li>
              <input type="text"
                name="time"
                value={this.state.time}
                onChange={this.handleChange.bind(this)}
                placeholder="Insert time"
              />
            </li>
            <li>
              <input type="text"
                name="date"
                value={this.state.date}
                onChange={this.handleChange.bind(this)}
                placeholder="Insert date"
              />
            </li>
            <li>
              <button onSubmit={this.formSubmit}>
                Add
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
