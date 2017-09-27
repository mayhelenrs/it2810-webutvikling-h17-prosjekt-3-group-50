import React from 'react';
import '../assets/styles/Component.css';
import {Note} from '../components/Note.jsx'

export class NoteHolder extends React.Component {
    render() {
        return (
            <div className="NoteHolder">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        );
    }
}
