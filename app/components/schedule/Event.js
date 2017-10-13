import React from "react";
import {StyleSheet, TextInput, View, PixelRatio} from 'react-native';

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
                <TextInput style={styles.eventTitle} placeholder={'Event title'}
                />
                <TextInput style={styles.eventDescription} placeholder={'Event description'}
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