import React from 'react';
import '../assets/styles/Component.css';

export class Note extends React.Component {
    render() {
        return (
            <div className="Note">
                <input className="NoteTitle" defaultValue="This is the title"></input>
                <textarea spellCheck="false" className="NoteContent" defaultValue="Note content">
                </textarea>
            </div>
        );
    }
}