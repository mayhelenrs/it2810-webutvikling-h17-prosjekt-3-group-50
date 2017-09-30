import React from 'react';
import update from 'react-addons-update';
import '../assets/styles/Component.css';
import {Note} from '../components/Note.jsx';

export class NoteHolder extends React.Component {

    constructor() {
        super();
        this.noteCount = 0;
        this.handleClick = this.appendNote.bind(this);
        this.handleRemove = this.removeNote.bind(this);
        this.state = {
            notes: [this.generateNote("#016D91", "Example note")],
            displayedNotes: [this.generateNote("#016D91", "Example note")]
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
        if (color === undefined)
            return <Note text={text} handleClick={this.handleClick} handleRemove={this.handleRemove} id={this.noteCount++}/>;
        return <Note text={text} handleClick={this.handleClick} handleRemove={this.handleRemove} id={this.noteCount++} color={color}/>;
    }

    removeNote(element) {
        for (let i = 0; i < this.state.notes.length; i++) {
            if (this.state.notes[i].props.id === element.props.id) {
                this.setState({notes: update(this.state.notes, {$splice: [[i, 1]]})},
                    () => this.props.filterNotes());
            }
        }
    }

    appendNote(color) {
        this.setState({notes: update(this.state.notes, {$push: [this.generateNote(color, "Note")]})},
            () => this.props.filterNotes());
    }
}
