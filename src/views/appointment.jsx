import React from 'react';
import { AppointmentItem } from '../components/appointmentItem.jsx';

export class Appointment extends React.Component {
  render(){
    let appointmentList = [
      <AppointmentItem title="Test" location="here" time="now" description="yep, this is enough" />,
      <AppointmentItem title="Test" location="here" time="now" description="yep, this is enough" />,
      <AppointmentItem title="Test" location="here" time="now" description="yep, this is enough" />
    ]

    return(
      <div>
        {appointmentList}
      </div>
    );
  }
}
