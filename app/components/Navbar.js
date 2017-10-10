import React from 'react';
import {StyleSheet, View, Text} from "react-native"


export default class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.navbar}>
                {/*navbarLocation: Name of the page the user is on. */}
                <Text>{this.props.navbarLocation}</Text>

                {/* navbarLinks: Send in a <ul> with <li> child-elements containing <a> and <h2> tags.
                    This way we have all the pages, one click away,
                    instead of having to go back to the main page.
                 */}
                {this.props.navbarLinks}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        height:50,
        backgroundColor: '#00ACCE'
    }

});
