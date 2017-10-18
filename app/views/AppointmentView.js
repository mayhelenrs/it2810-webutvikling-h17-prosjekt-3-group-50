import React from 'react';
import AppointmentContainer from '../components/appointments/AppointmentContainer.js'
import Categories from "../components/categories/Categories";

export default class AppointmentView extends React.Component {

    static navigationOptions = {
        title: 'AppointmentView'
    };

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
