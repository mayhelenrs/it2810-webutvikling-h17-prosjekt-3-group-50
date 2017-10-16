import React from "react";
import {StyleSheet, Text, TextInput, View, PixelRatio} from 'react-native';
import Event from "./Event.js";

export default class Slot extends React.Component {
    constructor(props) {
        super(props);

        this.i = 0;

        this.state = {
            color: this.props.color,
            interval: this.props.interval
        };

        /*
        this.onIntervalChange = this.onIntervalChange.bind(this);
        this.generateNewEvent = this.generateNewEvent.bind(this);
        */
    }

    render() {
        return (
            <View style={[{backgroundColor: '' + this.state.color}, styles.slot]}>
                <View style={[{backgroundColor: '' + this.state.color}, styles.time]}>
                    <TextInput style={[styles.slotInterval, styles.slotIntervalStart]}
                               value={this.state.interval[0]}/>
                    <Text>-</Text>
                    <TextInput style={[styles.slotInterval, styles.slotIntervalEnd]}
                               value={this.state.interval[1]}/>
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

    /*
        onIntervalChange({target}) {

            let classNames = target.className.split(" ");
            let tempInterval = [];
            if (classNames[1] === "slot-interval-start") {
                tempInterval.push(target.value);
                tempInterval.push(this.state.interval[1]);
            } else {
                tempInterval.push(this.state.interval[0]);
                tempInterval.push(target.value);
            }
            this.setState({color: this.state.color, interval: tempInterval});

        }


        componentDidUpdate() {
            this.save()
        }
        */

    /*
    When the component mounts we check to see if there is data saved in localStorage related to it.
    If not, then this is the first time the component is mounted and we save the state for later
    */
    /*
        componentDidMount() {
            const data = this.load();
            if (data !== null) {
                this.setState(() => data);
            } else {
                this.save();
            }
        }

        save() {
            localStorage.setItem(this.getSaveName(), JSON.stringify(this.state))
        }

        load() {
            return this.getSaveName() in localStorage
                ? JSON.parse(localStorage.getItem(this.getSaveName()))
                : null;
        }

        getSaveName() {
            return "" + this.props.day + this.props.id;
        }
    */
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
        flex: 1
    },

    slotInterval: {},
    slotIntervalStart: {},
    slotIntervalEnd: {}
});