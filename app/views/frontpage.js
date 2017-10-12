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
                <View style={styles.content}>
                    <TileGrid style={styles.tiles} navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
