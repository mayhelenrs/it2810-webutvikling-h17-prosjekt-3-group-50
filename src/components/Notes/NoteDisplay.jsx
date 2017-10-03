import React from 'react';
import './Notes.css';

export class NoteDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    render() {
        return(
            <div>
                <div onClick={() => this.props.toggleNote()} className={"NoteFiller"} style={{width: this.state.width/4 + "%", height: this.state.height/4 + "%", backgroundColor: "rgba(0, 0, 0, " + ((this.state.width/100) * 0.075) + ""}}>
                </div>
                <div className={"NoteDisplay"} style={{width: this.state.width + "px", height: this.state.height + "px"}}>
                </div>
            </div>
        );
    }
}