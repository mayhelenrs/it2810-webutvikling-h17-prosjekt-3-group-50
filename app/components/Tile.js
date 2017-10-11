import React from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native"

export default class Tile extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={[{backgroundColor: '' + this.props.color}, styles.tile]}>
                <Text style={styles.tiletext}><Image source={this.props.tileIcon} alt={"Icon for tile"}/></Text>
                <Text style={styles.tiletext}>{this.props.tileTitle}</Text>
                {
                    <Button title={"ENTER"} onPress={() => navigate(this.props.tileTitle)}/>
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tile: {
        width: "40%"

    },
    tiletext: {

    }

});
