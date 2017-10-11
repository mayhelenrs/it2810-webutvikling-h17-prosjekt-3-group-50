import React from 'react';
import {StyleSheet, Image, Text, View} from "react-native"

export default class Tile extends React.Component {
    render() {
        return(
            <View style={[{backgroundColor: '' + this.props.color},styles.tile]}>
                <Image  style={styles.image} source ={this.props.tileIcon} alt={"Icon for tile"}/>
                <View style={styles.text}>
                  <Text style={{color: '' + this.props.color}}>{this.props.tileTitle}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tile: {
        width:'40%',
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
    image:{
        margin: 15,
        height: 75,
        width: 75
    },
    text: {
        width: '100%',
        height: '25%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    }
})
