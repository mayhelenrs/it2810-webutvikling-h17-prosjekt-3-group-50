import React from "react";
import {StyleSheet, TextInput, View, PixelRatio, AsyncStorage} from 'react-native';

export default class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTitle: "",
            eventDescription: ""
        };
        this.getKey = this.getKey.bind(this);
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
    }

    render() {
        return (
            <View style={styles.event}>
                <TextInput style={styles.eventTitle} placeholder={'Title'} value={this.state.eventTitle} onChangeText={(text) => this.setState({eventTitle: text})} />
                <TextInput style={styles.eventDescription} placeholder={'Description'} value={this.state.eventDescription} onChangeText={(text) => this.setState({eventDescription: text})} /> 
            </View>
        )
    }
    componentDidUpdate() {
        this.save();
    }
    componentDidMount() {
        this.load();
    }
    save() {
        let eventData_obj = [this.state.eventTitle, this.state.eventDescription];
        try {
            AsyncStorage.setItem(this.getKey(), JSON.stringify(eventData_obj));
        } catch (error) {
            console.log(error);
        }
    }
    async load() {
        try {
            let eData = await AsyncStorage.getItem(this.getKey());
            if (eData !== null){
                // We have data!!
                eData = JSON.parse(eData);
                this.setState({
                    eventTitle: eData[0],
                    eventDescription: eData[1]
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    getKey() {
        //return unique key for the event
        return "" + this.props.day + this.props.slotId;
    }
}

const styles = StyleSheet.create({
    event: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    eventTitle: {
        flex: 1,
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    eventDescription: {
        flex: 1
    }
})