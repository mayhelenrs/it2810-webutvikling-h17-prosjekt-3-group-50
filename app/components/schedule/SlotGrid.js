import React from 'react';
import {StyleSheet, View} from 'react-native';
import Slot from "./Slot.js";

export default class SlotGrid extends React.Component {

    constructor(props) {
        super(props);

        this.i = -1;

        const hours = [
            ["08:00", "10:00"], ["10:00", "12:00"], ["12:00", "14:00"], ["14:00", "16:00"]
        ];
        const backgroundColors = [
            "#9C624C", "#D28261", "#D56945", "#E6A784"
        ];


        this.state = {
            hours: hours,
            backgroundColors: backgroundColors,
        }
    }

    render() {
        return (
            <View style={styles.slotGrid}>
                {

                    this.state.hours.map((interval, index) =>
                        <Slot
                            key={index}
                            slotId={index}
                            day={this.props.day}
                            interval={interval}
                            color={this.state.backgroundColors[index]}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slotGrid: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }
});