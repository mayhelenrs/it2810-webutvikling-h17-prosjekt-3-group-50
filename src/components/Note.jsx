import React from 'react';
import '../assets/styles/Component.css';
import {NoteDisplay} from "./NoteDisplay";

export class Note extends React.Component {

    constructor(props) {
        super(props);
        this.hideNote = this.hideNote.bind(this);
        this.state = {
            noteDisplay: <NoteDisplay ref={instance => {
                this.noteDisplay = instance
            }} hideNote={this.hideNote}/>
        }
    }

    render() {
        return (
            <div className="Note" style={{backgroundColor: this.props.color}}>
                <div className="RemoveNote">
                    <img className="RemoveButton" onClick={() => this.props.handleRemove(this)} alt={'Remove'}
                         src={require('../assets/img/close.png')}/>
                </div>
                <div className="NoteContent" onClick={() => this.displayNote()}>
                    <div className="NoteIcon">
                        <img className="RemoveButton" alt={'Remove'} src={require('../assets/img/note_icon.png')}/>
                    </div>
                    <div className="NoteName">
                        <p>{this.props.text}</p>
                    </div>
                </div>
                {this.state.noteDisplay}
            </div>
        );
    }

    displayNote() {
        this.noteDisplay.setState({
            visible: true,
            width: 400,
            height: 400
        });
    }

    hideNote() {
        this.noteDisplay.setState({
            visible: true,
            width: 0,
            height: 0
        });
    }
}