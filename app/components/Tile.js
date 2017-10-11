import React from 'react';
import {StyleSheet, Button, Image, Text, View} from "react-native"

export default class Tile extends React.Component {
    render() {
        const{ navigate} = this.props.navigation;
        return(
            <View style={[{backgroundColor: '' + this.props.color},styles.tile]}>
                <Text><Image  source ={this.props.tileIcon} alt={"Icon for tile"}/></Text>
                <Text>{this.props.tileTitle}</Text>
                {
                    <Button onPress={() => navigate('Schedule')}>Trykk her</Button>
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
