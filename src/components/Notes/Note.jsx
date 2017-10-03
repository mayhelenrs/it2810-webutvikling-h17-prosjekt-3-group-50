import React from 'react';
import './Notes.css';
import {NoteDisplay} from "./NoteDisplay";

export class Note extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNote = this.toggleNote.bind(this);
        this.state = {
            noteDisplay: <NoteDisplay ref={instance => {this.noteDisplay = instance}}
                                      toggleNote={this.toggleNote}/>
        }
    }

    render() {
        return (
            <div className="Note" style={{backgroundColor: this.props.color}}>
                <div className="RemoveNote">
                    <img className="RemoveButton" onClick={() => this.props.handleRemove(this)} alt={'Remove'}
                         src={require('../../assets/img/close.png')}/>
                </div>
                <div className="NoteContent" onClick={() => this.toggleNote()}>
                    <div className="NoteIcon">
                        <img className="NoteImage" alt={'Remove'} src={require('../../assets/img/note_icon.png')}/>
                    </div>
                    <div className="NoteName">
                        <p>{this.props.text}</p>
                    </div>
                </div>
                {this.state.noteDisplay}
            </div>
        );
    }

    toggleNote() {
        this.noteDisplay.setState((prevState) => {
            return {width: prevState.width === 400 ? 0 : 400, height: prevState.height === 400 ? 0 : 400};
        });
    }

}