import React from 'react';
import Note from './Note.js';
import {View, StyleSheet} from 'react-native';

export class NoteContainer extends React.Component {

    constructor() {
        super();
        this.noteCount = 0;
        this.handleClick = this.appendNote.bind(this);
        this.handleRemove = this.removeNote.bind(this);
        this.state = {
            notes: [],
            displayedNotes: []
        };
    }

    render() {
        return (
            <View style={styles.NoteFilter}>
                <View style={styles.Notes}>
                    {this.state.displayedNotes}
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
                }, () => this.props.filterNotes());
            }
        });
    }

    appendNote(color) {
        this.setState(prevState => {
            return {
                ...prevState,
                notes: update(prevState.notes, {$push: [this.generateNote(color, "Click me to edit")]})
            };
        }, () => {
            this.props.filterNotes();
        });
    }
}


const styles = StyleSheet.create({
    NoteContainer: {
        width: 140,
        height: 140,
        margin: 10,
        flexDirection: 'column',
    },
    Notes: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
});
