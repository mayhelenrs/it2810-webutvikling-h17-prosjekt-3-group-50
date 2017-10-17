import React from 'react';
import Note from './Note.js';
import {View, StyleSheet, Button, AsyncStorage} from 'react-native';
import update from 'react-addons-update';

export default class NoteContainer extends React.Component {

    constructor() {
        super();
        this.noteCount = 0;
        this.handleClick = this.appendNote.bind(this);
        this.handleRemove = this.removeNote.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            notes: [],
            displayedNotes: []
        };
    }

    componentDidMount() {
        //this.load();
    }

    componentDidUpdate() {
        //this.save();
    }

    render() {
        return (
            <View style={styles.NoteContainer}>
                <View style={styles.Notes}>
                    {this.state.displayedNotes}
                </View>
                <View>
                    <Button style={styles.AddButton} title={"Add"} onPress={() => this.appendNote(this.props.selectedColor())} />
                </View>
            </View>
        );
    }

    generateNoteWithId(color, text, index) {
        return <Note text={text} handleClick={this.handleClick} handleRemove={this.handleRemove} key={index}
                     color={color} id={index}/>;
    }

    generateNote(color, text) {
        const id = this.noteCount++;
        return this.generateNoteWithId(color, text, id);
    }

    removeNote(element) {
        this.state.notes.forEach((note, index) => {
            if (note.props.id === element.props.id) {
                this.setState(prevState => {
                    return {notes: update(prevState.notes, {$splice: [[index, 1]]})};
                }, () => this.filter());
            }
        });
    }

    appendNote(color) {
        this.setState(prevState => {
            return {...prevState, notes: update(prevState.notes, {$push: [this.generateNote(color === undefined ? "#016D91" : color, "Click me to edit ")]})};
        }, () => {
            this.filter();
        });
    }

    filter() {
        this.setState(prevState => {
            return {...prevState, displayedNotes: this.getFilteredNotes(this.props.selectedColor())}
        });
    }

    getFilteredNotes(color) {
        if (color !== undefined)
            return this.state.notes.filter((note) => note.props.color === color);
        return this.state.notes;
    }

    save() {
        try {
            AsyncStorage.setItem("Notes", JSON.stringify(this.state.notes.map((note) => note.props.id)));
        } catch(error) {

        }
    }

    async load() {
        try {
            console.log("Loading note container");
            let data = await AsyncStorage.getItem("Notes");
            if (data !== null && data !== undefined) {
                data = JSON.parse(data).map((index) => "Note" + index);
            }
        } catch (error) {
        }
    }

}


const styles = StyleSheet.create({
    NoteContainer: {
    },
    AddButton: {
        backgroundColor: '#3Cb54C',
        color: 'white',
        fontSize: 18,
    },
    Notes: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
