import React from 'react';
import '../assets/styles/NoteView.css';
import {AppointmentContainer} from '../components/appointments/AppointmentContainer.jsx'
import {Categories} from "../components/categories/Categories";

export class AppointmentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appointmentContainer: <AppointmentContainer ref={instance => {
                this.appointmentContainer = instance
            }}/>
        }
    }

    render() {
        return (
            <Categories id={3} filter={() => this.appointmentContainer.filter()}>
                {this.state.appointmentContainer}
            </Categories>
        );
    }

}
