import React from 'react';
import '../assets/styles/NoteView.css';
import {AppointmentContainer} from '../components/appointments/AppointmentContainer.jsx'
import {Categories} from "../components/categories/Categories";
import {Navbar} from "../components/Navbar";

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
            <div>
                <Navbar navbarLocation={"APPOINTMENTS"} navbarImage={require("../assets/images/navbar_leftarrow.png")}/>
                <Categories id={3} title={"appointments"} filter={() => this.appointmentContainer.filter()}>
                    {this.state.appointmentContainer}
                </Categories>
            </div>
        );
    }

}
