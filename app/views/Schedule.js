import React from 'react';
import DayGrid from "../components/schedule/DayGrid.js";

export default class Schedule extends React.Component {
    static navigationOptions = {
        title: 'SCHEDULE',
        headerTitleStyle: {
            color: 'black',
            fontFamily: 'IntroRust'
        },
        headerStyle: {
            backgroundColor: 'white',
        }
    };

    render() {
        return (
            <DayGrid/>
        )
    }
}
