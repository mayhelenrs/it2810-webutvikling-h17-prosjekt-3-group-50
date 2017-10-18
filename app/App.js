import React from 'react';

import {AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Frontpage from "./views/frontpage";
import Schedule from "./views/Schedule";
import NoteView from "./views/NoteView";
import TodoView from "./views/ToDoView";
import AppointmentView from "./views/AppointmentView";
import {Font} from 'expo';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
        AsyncStorage.clear();
    }
    async componentDidMount() {
        await Font.loadAsync({'IntroRust': require('./assets/fonts/IntroRust.otf')});
        this.setState({
            fontLoaded: true
        })
    }
    render() {
        let app = this.state.fontLoaded ? <Navigator/> : null
        return(
            app
        );
    }
};
const Navigator = StackNavigator({
    Home: {screen: Frontpage},
    Schedule: {screen: Schedule},
    Todo: {screen: TodoView},
    Notes: {screen: NoteView},
    Appointments: {screen: AppointmentView},
});
