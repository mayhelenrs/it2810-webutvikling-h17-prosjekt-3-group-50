import React from "react";
import {StyleSheet, TextInput, View} from 'react-native';

export default class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTitle: "",
            eventDescription: ""
        };
        /*
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        */
    }

    render() {
        return (
            <View style={styles.event}>
                <TextInput style={styles.eventTitle}
                />
                <TextInput style={styles.eventDescription}
                />
            </View>
        )
    }

    /*
    onTitleChange({target}) {
        this.setState({eventTitle: target.value, eventDescription: this.state.eventDescription});
    }

    onDescriptionChange({target}) {
        this.setState({eventTitle: this.state.eventTitle, eventDescription: target.value});
    }

    componentDidUpdate() {
        this.save();
    }

    componentDidMount() {
        const data = this.load();
        if (data !== null) {
            this.setState(() => data);
        } else {
            this.save();
        }
    }


    save() {
        localStorage.setItem(this.getSaveName(), JSON.stringify(this.state))
    }

    load() {
        return this.getSaveName() in localStorage
            ? JSON.parse(localStorage.getItem(this.getSaveName()))
            : null;
    }

    getSaveName() {
        return "" + this.props.day + this.props.slotId + this.props.id;
    }
    */
}

const styles = StyleSheet.create({
    event: {},
    eventTitle: {},
    eventDescription: {}
})