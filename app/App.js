import React from 'react';
import {StackNavigator} from 'react-navigation';
import Frontpage from "./views/frontpage";
import Schedule from "./views/Schedule";
import TodoView from "./views/ToDoView";


export default class App extends React.Component {

    render() {
        return (
            <Navigator/>
        );
    }
};

const Navigator = StackNavigator({
    Home: {screen: Frontpage},
    Schedule: {screen: Schedule},
    Todo: {screen: TodoView}
});

