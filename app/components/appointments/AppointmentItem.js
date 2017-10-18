import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';

export class AppointmentItem extends React.Component {
    //initiating states and binds functions to this
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            color: this.props.color,
            time: this.props.time,
            date: this.props.date,
        }
        //checks if appointment exists, if not it will save it
        AsyncStorage.getItem("Appointment" + this.props.id).then((data) => {
            if (data === null) {
                this.save();
                this.load();
            }
        }).catch((ex) => {

        });
    }
    //Loads the component right before its mounted
    componentWillMount() {
        this.load();
    }

    handleClick() {
        this.setState({checked: !this.state.checked})
    }

    //removes appointment from storage
    removeAppointment() {
        this.props.handleRemove(this);
        AsyncStorage.removeItem("Appointment" + this.props.id);
    }

    save() {
        try {
            //We create this object to make sure it saves as unselected
            //This way it won't be open next time we reload the note
            let state = Object.assign({}, this.state);
            AsyncStorage.setItem("Appointment" + this.props.id, JSON.stringify(state));
        } catch (error) {

        }
    }

    //Function for loading the state of the enote
    load() {
        AsyncStorage.getItem("Appointment" + this.props.id).then((data) => {
            if (data !== null) {
                data = JSON.parse(data);
                this.setState(() => {
                    return data;
                }, () => this.filter());
            }
        }).catch((ex) => {

        });
    }

    render() {
        return (
            <View style={[{
                backgroundColor: '' + this.state.color,
                borderColor: '' + this.state.color
            }, styles.wrapper]}>
                <View style={styles.textWrap}>
                    <Text style={styles.textStyling}>{this.state.description}</Text>
                    <Text style={[styles.border, styles.textStyling]}>{this.state.date}</Text>
                    <Text style={styles.textStyling}>{this.state.time}</Text>
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
        alignItems: 'center',
        color:"white"
    },
    textWrap: {
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 5
    }
});
