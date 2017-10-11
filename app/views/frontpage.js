import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from '../components/Navbar';
import TileGrid from "../components/TileGrid";

export default class Frontpage extends React.Component {
    static navigationOptions = {
        title: 'DASHBOARD'
    };

    render() {
        return (

            <View style={styles.container}>
                <Navbar navbarLocation={"DASHBOARD"}/>
                <TileGrid navigation={this.props.navigation}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
    },
});