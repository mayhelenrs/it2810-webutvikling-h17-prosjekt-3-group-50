import React from 'react';

import '../../assets/styles/Notes.css';
import {LocalStorage} from "../../service/LocalStorage";

export class NoteDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.state = {
            title: props.title,
            text: props.text,
            color: props.color,
            width: 0,
            height: 0
        }
    }

    //Handler that updates the title
    onInputChange({target}) {
        this.setState(prevState => {
           return {...prevState, title: target.value};
        }, () => this.props.updateTitle(this.state.title));
    }

    //Handler that updates the text
    onTextAreaChange({target}) {
        this.setState(prevState => {
            return {...prevState, text: target.value};
        });
    }

    render() {
        return(
            <div>
                <div onClick={() => this.props.toggleNote()} className={"NoteFiller"}
                     style={{width: this.state.width/4 + "%", height: this.state.height/4 + "%", backgroundColor: "rgba(0, 0, 0, " + ((this.state.width/100) * 0.075) + ""}}>
                </div>
                <div className={"NoteDisplay"}
                     style={this.getStyle()}>
                    <input style={{display: this.state.width === 0 ? 'none' : 'block'}}
                           onChange={this.onInputChange} className={"NoteFont"}
                           value={this.state.title}/>
                    <textarea style={{display: this.state.width === 0 ? 'none' : 'block'}} className={"NoteFont"}
                              onChange={this.onTextAreaChange} spellCheck={"false"} value={this.state.text} />
                </div>
            </div>
        );
    }

    //Returns a style given by its current state
    getStyle() {
        return {
            width: window.innerWidth <= 525 ? this.state.width > 0 ? "100%" : this.state.width + "px" : this.state.width + "px",
            height: window.innerWidth <= 525 ? this.state.height > 0 ? "300px" : this.state.height + "px" : this.state.height + "px",
            opacity: this.state.width > 0 ? 0.95 : 0,
            backgroundColor: '' + this.state.color,
        }
    }

    //
    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            this.setState((prevState) => {
                return {...prevState, color: data.color, text: data.text, title: data.title};
            }, () => this.props.updateTitle(this.state.title));
        }, {color: this.state.color, text: this.state.text, title: this.state.title});
    }

    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), {color: this.state.color, text: this.state.text, title: this.state.title});
    }

    getSaveName() {
        return "NoteDisplay" + this.props.id;
    }
}
