import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Day from "./Day.js";


export default class DayGrid extends React.Component {
    constructor(props) {
        super(props);


        const days = [
            ["Mo"],
            ["Tu"],
            ["We"],
            ["Th"],
            ["Fr"],
            ["Sa"],
            ["Su"]
        ];

        this.state = {
            days: days
        }
    }

    render() {

        return (
            <View style={styles.dayGrid}>
                {
                    //Map days to Date component
                    this.state.days.map((info, index) => <Day day={info[0]} key={index}/>

                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayGrid: {}
});