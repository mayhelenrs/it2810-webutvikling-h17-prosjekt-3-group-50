import React from 'react';
import './Notes.css';

export class NoteDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.state = {
            title: props.title,
            text: "Change your note text by typing it here!",
            width: 0,
            height: 0
        }
    }

    onInputChange({target}) {
        this.setState({
           title: target.value
        }, () => this.props.updateTitle(this.state.title));
    }

    onTextAreaChange({target}) {
        this.setState({
            text: target.value
        });
    }

    render() {
        return(
            <div>
                <div onClick={() => this.props.toggleNote()} className={"NoteFiller"}
                     style={{width: this.state.width/4 + "%", height: this.state.height/4 + "%", backgroundColor: "rgba(0, 0, 0, " + ((this.state.width/100) * 0.075) + ""}}>
                </div>
                <div className={"NoteDisplay"}
                     style={{width: this.state.width + "px", height: this.state.height + "px", backgroundColor: '' + this.props.color, opacity: '0.95'}}>

                    <input onChange={this.onInputChange}
                           defaultValue={this.props.title}/>
                    <textarea style={{display: this.state.width === 0 ? 'none' : 'block'}}
                              onChange={this.onTextAreaChange} spellCheck={"false"} defaultValue={this.state.text} />
                </div>
            </div>
        );
    }
}