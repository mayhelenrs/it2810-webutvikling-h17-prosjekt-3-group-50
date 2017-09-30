import React from 'react';
import '../assets/styles/Component.css';

export class NoteDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return(
            <div onClick={() => this.props.hideNote()} className={"NoteFiller"} style={{width: this.state.width/4 + "%", height: this.state.height/4 + "%"}}>
                <div className={"NoteDisplay"} style={{width: this.state.width + "px", height: this.state.height + "px"}}>

                </div>
            </div>
        );
    }
}