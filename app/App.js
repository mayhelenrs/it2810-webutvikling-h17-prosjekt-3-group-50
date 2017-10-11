import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navbar from './components/Navbar'
import TileGrid from "./components/TileGrid"

export default class App extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <Navbar navbarLocation={"DASHBOARD"}/>
                <TileGrid/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop:"auto",
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
