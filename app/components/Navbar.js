import React from 'react';
import {StyleSheet, View, Text} from "react-native"


export default class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.navbar}>
                <Text style={styles.navbarText}>{this.props.navbarLocation}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        backgroundColor: '#00ACCE',
        flexDirection: 'row',
        paddingTop: '3%',
        paddingBottom: '1%'
    },
    navbarText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1
    }
});
