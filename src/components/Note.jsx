import React from 'react';
import '../assets/styles/Component.css';

export class Note extends React.Component {

    render() {
        return (
            <div className="Note">
                <div className="RemoveNote">
                    <img className="RemoveButton" onClick={() => this.props.handleRemove(this)} alt={'Remove'} src={require('../assets/img/close.png')}/>
                </div>
                <div className="NoteContent">
                    <div className="NoteIcon">
                        <img className="RemoveButton" alt={'Remove'} src={require('../assets/img/note_icon.png')}/>
                    </div>
                    <div className="NoteName">
                        <p>Name {this.props.id} </p>
                    </div>
                </div>
            </div>
        );
    }
}