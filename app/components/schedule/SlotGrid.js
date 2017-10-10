import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Slot} from "./Slot.js";

export class SlotGrid extends React.Component {

    constructor(props) {
        super(props);

        this.i = -1;

        const hours = [
            ["08:00", "10:00"], ["10:00", "12:00"], ["12:00", "14:00"], ["14:00", "16:00"]
        ];
        const backgroundColors = [
            "#c7b9e5", "#006e8e", " #20c2af", "#f9a7a9"
        ];


        this.state = {
            hours: hours,
            backgroundColors: backgroundColors,
        }
    }

    render() {
        return (
            <div style={styles.slotGrid}>
                {
                    this.state.hours.map((interval) => this.generateNewSlot(interval))
                }
            </div>
        );
    }


    generateNewSlot(interval) {
        this.i++;
        return <Slot day={this.props.day} id={this.i} interval={interval} color={this.nextColor()}/>
    }

    nextColor() {
        if(localStorage.getItem(this.props.day + this.i)) {
            return localStorage.getItem(this.props.day + this.i);
        } else {
            let j = Math.round(Math.random() * 3);
            return this.state.backgroundColors[j];
        }
    }
}

const styles = StyleSheet.create({
    slotGrid:{

    }
});