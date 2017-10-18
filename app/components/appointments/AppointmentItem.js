import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export class AppointmentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            color: this.props.color,
            time: this.props.time,
            date: this.props.date,
            checked: false
        }
    }

    handleClick() {
        this.setState({checked: !this.state.checked})
    }

    removeAppointment() {
        this.props.handleRemove(this);
    }

    render() {
        const text = this.state.checked;
        return (
            <View style={[{
                backgroundColor: '' + this.state.color,
                borderColor: '' + this.state.color
            }, styles.wrapper]}>
                <View style={styles.textWrap}>
                    <Text style={styles.textStyling}>{this.state.description}</Text>
                    <Text style={[styles.border, styles.textStyling]}>{this.state.time}</Text>
                    <Text style={styles.textStyling}>{this.state.date}</Text>
                </View>
                <View>
                    <Button
                        onPress={() => this.removeAppointment()}
                        title='remove'
                        style={styles.Button}
                        fontFamily={'IntroRust'}
                        backgroundColor="#4CAF50"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: '90%',
        marginBottom: 10
    },
    Button: {
        width: '90%'
    },
    border: {
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderStyle: 'dashed'
    },
    textStyling: {
        fontFamily: 'IntroRust',
        textAlign: 'center',
        alignItems: 'center'
    },
    textWrap: {
        alignItems: 'center',
    }
});
