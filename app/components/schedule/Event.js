import React from "react";
import {StyleSheet, View, TextInput} from 'react-native';

export class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTitle: "",
            eventDescription: ""
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    render() {
        return (
            <View style={styles.event}>
                <TextInput style={styles.eventTitle}
                       value={this.state.eventTitle}
                       onChange={this.onTitleChange}
                />
                <TextInput style={styles.eventDescription}
                       value={this.state.eventDescription}
                       onChange={this.onDescriptionChange}
                />
            </View>
        )
    }

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
}

const styles= StyleSheet.create({
    event: {

    },
    eventTitle: {

    },
    eventDescription: {

    }
})