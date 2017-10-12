import React from 'react';
import {Button, Image, StyleSheet, Text, View, TouchableOpacity} from "react-native"


export default class Tile extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={[{backgroundColor: '' + this.props.color},styles.tile]}>
                <TouchableOpacity onPress={() => navigate(this.props.tileTitle)}>
                    <View style={{}}>
                        <Image  style={styles.image} source ={this.props.tileIcon} alt={"Icon for tile"}/>
                        <View style={styles.textWrapper}>
                          <Text style={styles.text}>{this.props.tileTitle}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tile: {
        width: '40%',
        margin: 3,
        height: 150,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'black'
    },
    image: {
        margin: 15,
        height: 75,
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
})
