import React from 'react';
import update from 'react-addons-update';
import {Note} from './Note.jsx';
import {LocalStorage} from "../../service/LocalStorage";

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
        LocalStorage.save(this.getSaveName(), this.state.notes.map(note => {
            return note.props.id;
        }));
    }

    //Since we can't keep all the data of the notes in the container we have to
    //Use a custom loading function to parse the data in
    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            let ids = data.map((id) => {
                return parseInt(id, 10);
            });
            let notes = [];
            ids.forEach(id => {
                const note = JSON.parse(localStorage.getItem("Note" + id));
                notes.push(this.generateNoteWithId(note.color, note.title, id));
                this.noteCount = id + 1;
            });
            this.setState(prevState => {
                return {...prevState, notes: notes, displayNotes: notes}
            }, () => this.filter());
        });
    }

    render() {
        return (
            <div>
                <div className="FlexContainer">
                    <div className="FlexContent">
                        {this.state.displayedNotes}
                    </div>
                </div>
                <div className="AddNote">
                    <button className="add-button" onClick={() => this.appendNote(this.props.selectedColor())}>Add
                        note
                    </button>
                </div>
            </div>
        );
    }

    /**
     * Generates a new note with the given parameters
     * @param color
     * @param text
     * @param index
     * @returns {XML}
     */
    generateNoteWithId(color, text, index) {
        return <Note text={text} handleClick={this.handleClick} handleRemove={this.handleRemove} key={index}
                     color={color} id={index}/>;
    }

    /**
     * Generates a new note with the parameters
     * @param color
     * @param text
     * @returns {XML}
     */
    generateNote(color, text) {
        const id = this.noteCount++;
        return this.generateNoteWithId(color, text, id);
    }

    /**
     * Removes the provided note from the container
     * @param element
     */
    removeNote(element) {
        this.state.notes.forEach((note, index) => {
            if (note.props.id === element.props.id) {
                this.setState(prevState => {
                    return {notes: update(prevState.notes, {$splice: [[index, 1]]})};
                }, () => this.filter());
            }
        });
    }

    /**
     * Appends a new note with the given color to the container
     * @param color
     */
    appendNote(color) {
        this.setState(prevState => {
            return {
                ...prevState,
                notes: update(prevState.notes, {$push: [this.generateNote(color === undefined ? "#016D91" : color, "Click me to edit ")]})
            };
        }, () => {
            this.filter();
        });
    }

    filter() {
        this.setState(prevState => {
            return {...prevState, displayedNotes: this.getFilteredNotes(this.props.selectedColor())}
        });
    }

    /**
     * Finds all notes with the given color. If no color is specified it will return
     * every note
     * @param color
     * @returns {Array.<*>}
     */
    getFilteredNotes(color) {
        if (color !== undefined)
            return this.state.notes.filter((note) => note.props.color === color);
        return this.state.notes;
    }

    getSaveName() {
        return "NoteIds";
    }

}
