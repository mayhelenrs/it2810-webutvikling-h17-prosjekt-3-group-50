import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import SlotGrid from "./SlotGrid.js";

export default class Day extends React.Component {

    render() {
        return(
            <View style={styles.day}>
                <SlotGrid day={this.props.day}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    day: {

    },
    dayText:{

    }
});
