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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const t = event.target
    const name = t.name
    if(name === "desc"){
      this.setState({desc: t.desc})
    }else if (name === "time"){
      this.setState({time: t.time})
    }else if (name === "date"){
      this.setState({date: t.date})
    }
  }


  formSubmit(e){
    if(this.state.desc.length > 0 &&
      this.state.time.length > 0 &&
      this.state.date.length > 0){
      const newList = this.state.list.slice()
      const newAppointment = <AppointmentItem
        description={this.state.desc}
        time={this.state.time}
        date={this.state.date}
        />
      newList.push(newAppointment)
      this.setState({
        list: newList
      })
      e.preventDefault()
    }

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
                onChange={this.handleChange}
                placeholder="Insert description"
              />
            </li>
            <li>
              <input type="text"
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
                placeholder="Insert time"
              />
            </li>
            <li>
              <input type="text"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                placeholder="Insert date"
              />
            </li>
            <li>
              <button onClick={this.formSubmit}>
                Add
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
