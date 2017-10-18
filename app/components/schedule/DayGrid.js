import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Day from "./Day.js";

// Container component used to hold Day-components
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
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    keyboardDismissMode={'on-drag'}
                    pagingEnabled={false}
                >
                    {
                        //Map days to Date component
                        this.state.days.map((info, index) => <Day day={info[0]} key={index}/>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayGrid: {},
    contentContainer: {}
});