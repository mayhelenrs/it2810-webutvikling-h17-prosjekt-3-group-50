import React from 'react';
import '../assets/styles/Component.css';
import {Note} from '../components/Note.jsx'
import {NoteAdder} from "./NoteAdder";

export class NoteHolder extends React.Component {

    constructor() {
        super();
        this.state = {
            notes: [<Note key={1}/>, <Note key={2}/>, <Note key={3}/>, <Note key={4}/>, <Note key={5}/>,
                <Note key={6}/>, <Note key={7}/>, <Note key={8}/>, <Note key={9}/>]
        };
    }

    render() {
        return (
            <div className="NoteHolder">
                <NoteAdder/>
                {this.state.notes}
            </div>
        );
    }
}
