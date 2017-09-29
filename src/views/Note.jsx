import React from 'react';
import '../assets/styles/NoteView.css';
import {NoteHolder} from '../components/NoteHolder.jsx'

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteHolder: <NoteHolder ref={instance => {this.holder = instance}}/>
        }
    }

    render() {
        return (
            <div className="NoteView">
                <div className="Left-Page">
                    <div>
                        Note category
                    </div>
                    <div className="Middle-Page">
                        {this.state.noteHolder}
                    </div>
                    <div className="AddNote">
                        <button onClick={() => this.holder.appendNote()}>Add</button>
                    </div>
                </div>
                <div className="Right-Page">
                    Categories
                </div>
            </div>
        );
    }
}
