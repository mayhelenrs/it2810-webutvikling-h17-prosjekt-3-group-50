import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"


// Component used to represent the tiles on the frontpage. Pretty similar to the one on the website, with some
// changes to elements to make it compatible with react-native
export default class Tile extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity activeOpacity={0.6} style={[{backgroundColor: '' + this.props.color}, styles.tile]}
                              onPress={() => navigate(this.props.tileTitle)}>
                <Image style={styles.image} source={this.props.tileIcon} alt={"Icon for tile"}/>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.props.tileTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

// Styling
const styles = StyleSheet.create({
    tile: {
        width: '90%',
        margin: 10,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'grey',
        shadowOpacity: 0.5,
    },
    image: {
        margin: 15,
        height: 100,
        width: 75
    },
    textWrapper: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'IntroRust'
    }
});
