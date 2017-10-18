import React from 'react';
import update from 'react-addons-update';
import {Note} from './Note.jsx';
import '../../assets/styles/Notes.css';

export class NoteContainer extends React.Component {

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

    componentDidUpdate() {
        this.save();
    }

    componentDidMount() {
        const notes = [];
        const noteIds = this.load();
        if (noteIds !== null) {
            noteIds.forEach(id => {
                const note = JSON.parse(localStorage.getItem("Note" + id));
                notes.push(this.generateNoteWithId(note.color, note.title, id));
                this.noteCount = id + 1;
            });
            this.setState(prevState => {
                return {...prevState, notes: notes, displayNotes: notes}
            }, () => this.filter());
        }
    }

    render() {
        return (
            <div>
                <div className="NoteHolder">
                    <div className="Notes">
                        {this.state.displayedNotes}
                    </div>
                </div>
                <div className="AddNote">
                    <button className="add-button" onClick={() => this.appendNote(this.props.selectedColor())}>Add note</button>
                </div>
            </div>
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

    //Saves the IDs for the notes in the container
    save() {
        if (this.state.notes.length === 0)
            localStorage.removeItem("NoteIds");
        else
            localStorage.setItem("NoteIds", this.state.notes.map(note => {
                return note.props.id
            }));
    }

    //Loads the ids for the notes in the container
    load() {
        if ("NoteIds" in localStorage)
            return localStorage.getItem("NoteIds").split(",").map((id) => {
                return parseInt(id, 10);
            });
        return null;
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

}
