import React from 'react';
import update from 'react-addons-update';
import './Notes.css';
import {Note} from './Note.jsx';

export class NoteContainer extends React.Component {

    constructor() {
        super();
        this.noteCount = 0;
        this.handleClick = this.appendNote.bind(this);
        this.handleRemove = this.removeNote.bind(this);
        this.state = {
            notes: [this.generateNote("#016D91", "Example note")],
            displayedNotes: []
        };
    }

    render() {
        return (
            <div className="NoteHolder">
                <div className="Notes">
                    {this.state.displayedNotes}
                </div>
            </div>
        );
    }

    generateNote(color, text) {
        const id = this.noteCount++;
        return <Note text={text} handleClick={this.handleClick} handleRemove={this.handleRemove} key={id} id={id} color={color}/>;
    }

    removeNote(element) {
        this.state.notes.forEach((note, index) => {
            if (note.props.id === element.props.id) {
                this.setState((prevState) => {
                    return {notes: update(prevState.notes, {$splice: [[index, 1]]})};
                }, () => this.props.filterNotes());
            }
        });
    }

    appendNote(color) {
        this.setState((prevState) => console.log(update(prevState.notes, {$push: [this.generateNote(color, "Note")]})));
        this.setState((prevState) => {
                return {notes: update(prevState.notes, {$push: [this.generateNote(color, "Note")]})};
        }, () => this.props.filterNotes());
    }
}
