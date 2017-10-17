import React from 'react';
import {Text, View, StyleSheet, PixelRatio} from 'react-native'
import SlotGrid from "./SlotGrid.js";

export default class Day extends React.Component {

    render() {
        return(
            <View style={styles.day}>
                <View style={styles.dayText}>
                    <Text style={{color: 'black'}}>{this.props.day}</Text>
                </View>
                <SlotGrid day={this.props.day}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    day: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1

    },
    dayText:{
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: 'black',
        backgroundColor: 'white',
    }
});
