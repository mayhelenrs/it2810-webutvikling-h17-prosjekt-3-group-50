import React from 'react';
import '../assets/styles/NoteView.css';
import {NoteContainer} from '../components/notes/NoteContainer.jsx'
import {Categories} from "../components/categories/Categories";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteContainer: <NoteContainer ref={instance => {
                this.noteContainer = instance
            }}/>
        }
    }

    render() {
        return (
            <Categories id={1} filter={() => this.noteContainer.filter()}>
                {this.state.noteContainer}
            </Categories>
        );
    }

}
