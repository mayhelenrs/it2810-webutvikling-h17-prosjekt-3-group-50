import React from "react";
import {StyleSheet, TextInput, View, PixelRatio, AsyncStorage} from 'react-native';

export default class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTitle: "",
            eventDescription: ""
        };
        
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.getKey = this.getKey.bind(this);
    
    }

    render() {
        return (
            <View style={styles.event}>
                <TextInput style={styles.eventTitle} placeholder={'Event title'} value={this.state.eventTitle} onChangeText={(text) => this.onTitleChange(text)} />
                <TextInput style={styles.eventDescription} placeholder={'Event description'} value={this.state.eventDescription} onChangeText={(text) => this.onDescriptionChange(text)} /> 
            </View>
        )
    }

    onTitleChange({text}) {
        this.setState({eventTitle: text});
    }
    onDescriptionChange({text}) {
        this.setState({eventDescription: text});
    }
    componentDidUpdate() {
        this.save();
    }
    componentDidMount() {
        this.load();
    }
    save() {
        let eventData_obj = {
            eventTitle: this.state.eventTitle,
            eventDescription: this.state.eventDescription
        };
        AsyncStorage.setItem(this.getKey(), JSON.stringify(eventData_obj), () => {
            //data is saved
        });
    }
    load() {
        //default value
        let eventData_obj = {
            eventTitle: "heia",
            eventDescription: "hva skjer"
        };
        //check if load is possible
        AsyncStorage.getItem(this.getKey(), (err, result) => {
                eventData_obj = result;
                this.setState({
                    eventTitle: eventData_obj['eventTitle'],
                    eventDescription: eventData_obj['eventDescription']
                })
        });
        //set state to the eventual loaded value

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