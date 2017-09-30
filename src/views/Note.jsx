import React from 'react';
import '../assets/styles/NoteView.css';
import {NoteHolder} from '../components/NoteHolder.jsx'
import {CategoryHolder} from "../components/CategoryHolder";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteHolder: <NoteHolder ref={instance => {this.noteHolder = instance}}/>,
            categoryHolder: <CategoryHolder ref={instance => {this.categoryHolder = instance}}/>
        }
    }

    render() {
        return (
            <div className="NoteView">
                <div className="Left-Page">
                    <div>
                        {this.state.categoryHolder}
                    </div>
                    <div className="Middle-Page">
                        {this.state.noteHolder}
                    </div>
                    <div className="AddNote">
                        <button onClick={() => this.appendNote()}>Add</button>
                    </div>
                </div>
                <div className="Right-Page">
                    Categories
                </div>
            </div>
        );
    }

    appendNote() {
        if (this.categoryHolder.state.selectedCategory !== undefined) {
            this.noteHolder.appendNote(this.categoryHolder.state.selectedCategory.props.color);
        } else {
            alert("No category has been selected!");
        }
    }
}
