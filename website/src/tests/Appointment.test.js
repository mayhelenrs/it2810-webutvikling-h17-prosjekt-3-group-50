//localStorage is not imported to be used as a class, but to be initiated with jest.
import localStorage from './localStorageMock';

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {shallow, mount, render} from 'enzyme';
import {AppointmentView} from "../views/AppointmentView";
import {AppointmentContainer} from "../components/appointments/AppointmentContainer";
import {AppointmentItem} from "../components/appointments/appointmentItem";

Enzyme.configure({ adapter: new Adapter() });




/* Main function for testing the: */
/* Appointment application */
describe('Appointment Overview', () => {
    it('renders the whole Appointment application', () => {
        const instance = renderer.create(<AppointmentView />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

/* Test function for testing the rendering of: */
/* appointment components */
describe('Appointment Component Renders', () => {
    it('renders the Appointment Component', () => {
        const instance = renderer.create(<AppointmentContainer />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the AppointmentItem Component', () => {
        const instance = renderer.create(<AppointmentItem/>);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

// Test instatiation of AppointmentItem and its properties/State.
// Shallow makes sure we only go one level deep and do not care about potential child component behaviour
describe('AppointmentItem', () => {
    const appointment = shallow(<AppointmentContainer/>);
    const wrapper = shallow(
        <AppointmentItem className="items"
                         value={appointment}
                         color={"rgb(43, 186, 178)"}
                         description={"FFS"}
                         date={"24.04.2017"}
                         time={"00:24"}
                         onClick={() => this.handleClicks(index)}/>
    );

    it('instantiates properties and state properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    //Tests if the handleClick function changes the state from false to true and receives the correct state
    it('handleClick changes state', () => {
        const instance = wrapper.instance();
        expect(instance.state).toEqual({
            "checked": false,
            "color": "rgb(43, 186, 178)",
            "description": "FFS",
            "time": "00:24",
            "date": "24.04.2017"
        });
        instance.handleClick();
        expect(instance.state).toEqual({
            "checked": true,
            "color": "rgb(43, 186, 178)",
            "description": "FFS",
            "time": "00:24",
            "date": "24.04.2017"
        });
    });
    //Creates list for putting in several elements
    it('renderAppointmentItems by data', () => {
        const liste = [
            ["test1", "00:24", "24.04.2017",],
            ["test2", "0:25", "25.04.2017",],
            ["test3", "00:26", "26.04.2017"]
        ];
        const colors = ["rgb(43, 186, 178)", "rgb(43, 186, 178)", "rgb(43, 186, 178)"];

        const instance = appointment.instance();

        instance.setState({list: liste});
        instance.setState({displayList: liste[0]});
        let items = instance.list;
        expect(items).toEqual(instance.displayList);
    });

    it('handleSubmit handles new input from onClick', () => {
        const instance = appointment.instance();
        const liste =[
            ["test1", "00:24", "24.04.2017",],
            ["test2", "0:25", "25.04.2017",],
            ["test3", "00:26", "26.04.2017"]];

        expect(appointment.find('input').length).toEqual(3);
        expect(appointment.find('input').at(1).length).toEqual(1);
        instance.setState({
            list: liste,
            desc: "test4",
            time: "00:30",
            date: "19.11.1999",

        });
        //Checking if state is set
        expect(instance.state.list[0]).toEqual(liste[0]);
        expect(instance.state.desc).toEqual("test4");
        expect(instance.state.time).toEqual("00:30");
        expect(instance.state.date).toEqual("19.11.1999");

    });
});