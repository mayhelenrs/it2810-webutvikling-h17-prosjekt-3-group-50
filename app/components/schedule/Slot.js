import React from "react";
import {PixelRatio, StyleSheet, Text, View} from 'react-native';
import Event from "./Event.js";

export default class Slot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color,
            interval: this.props.interval
        };
    }

    render() {
        return (
            <View style={[{backgroundColor: '' + this.state.color}, styles.slot]}>
                <View style={[{backgroundColor: '' + this.state.color}, styles.time]}>
                    <Text style={[styles.slotInterval, styles.slotIntervalStart]}>{this.state.interval[0]}</Text>
                    <Text style={styles.slotInterval}>-</Text>
                    <Text style={[styles.slotInterval, styles.slotIntervalEnd]}>{this.state.interval[1]}</Text>
                </View>
                <View style={styles.text}>
                    <Event
                        id={this.props.slotId}
                        day={this.props.day}
                        slotId={this.props.slotId}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slot: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    text: {
        flex: 2

    },
    time: {
        flex: 1,
        alignItems: "center",
    },

    slotInterval: {
        color: "white"
    },
    slotIntervalStart: {},
    slotIntervalEnd: {}
});