import React from 'react';
import {StyleSheet, Image, Text, View} from "react-native"

export default class Tile extends React.Component {
    render() {
        return(
            <View style={[{backgroundColor: '' + this.props.color},styles.tile]}>
                <Text><Image  source ={this.props.tileIcon} alt={"Icon for tile"}/></Text>
                <Text>{this.props.tileTitle}</Text>
                {
                    // Missing button to subpage here
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tile: {
        width:"40%"
    }

})
