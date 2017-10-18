import React from 'react';
import {NoteDisplay} from "./NoteDisplay";
import {LocalStorage} from "../../service/LocalStorage";

export class Note extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNote = this.toggleNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.state = {
            title: props.text,
            color: this.props.color,
            noteDisplay: <NoteDisplay ref={instance => {this.noteDisplay = instance}}
                                      toggleNote={this.toggleNote}
                                      color={props.color}
                                      title={props.text}
                                      text={"Change your note text by typing it here!"}
                                      updateTitle={this.updateTitle}
                                      id={props.id}
            />
        }
    }

    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), {color: this.state.color, title: this.state.title});
    }

    componentWillMount() {
        console.log(localStorage.getItem(this.getSaveName()));
        LocalStorage.loadToState(this.getSaveName(), this);
    }

    render() {
        return (
            <div className="Note" style={{backgroundColor: this.state.color}}>
                <div className="RemoveNote">
                    <img className="RemoveButton" onClick={() => {this.removeNote()}} alt={'Remove'}
                         src={require('../../assets/images/close.png')}/>
                </div>
                <div className="NoteContent" onClick={() => this.toggleNote()}>
                    <div className="NoteIcon">
                        <img className="NoteImage" alt={'Remove'} src={require('../../assets/images/notes.png')}/>
                    </div>
                    <div className="NoteName">
                        <p>{this.state.title}</p>
                    </div>
                </div>
                {this.state.noteDisplay}
            </div>
        );
    }

    removeNote() {
        this.props.handleRemove(this);
        localStorage.removeItem("Note" + this.props.id);
        localStorage.removeItem("NoteDisplay" + this.props.id);
    }

    updateTitle(title) {
        this.setState(prevState => {
            return {...prevState, title: title};
        });
    }

    toggleNote() {
        this.noteDisplay.setState(prevState => {
            return {...prevState, color: prevState.color, width: prevState.width === 400 ? 0 : 400, height: prevState.height === 400 ? 0 : 400};
        });
    }

    getSaveName() {
        return "Note" + this.props.id;
    }
}
