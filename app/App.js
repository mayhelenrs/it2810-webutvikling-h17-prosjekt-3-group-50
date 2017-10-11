import React from 'react';
import Frontpage from "views/frontpage";
import {StackNavigator} from 'react-navigator';

export default class App extends React.Component {

    render() {
        return (
            <Navigator/>
        );
    }
};

const Navigator = StackNavigator({
    Home:{screen: Frontpage},
    Schedule: {screen:Schedule}
});

