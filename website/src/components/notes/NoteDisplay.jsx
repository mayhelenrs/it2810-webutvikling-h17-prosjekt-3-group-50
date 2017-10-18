import React from 'react';

import './Notes.css';
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

    onInputChange({target}) {
        this.setState(prevState => {
           return {...prevState, color: prevState.color, title: target.value};
        }, () => this.props.updateTitle(this.state.title));
    }

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

                    <input onChange={this.onInputChange}
                           value={this.state.title}/>
                    <textarea style={{display: this.state.width === 0 ? 'none' : 'block'}}
                              onChange={this.onTextAreaChange} spellCheck={"false"} value={this.state.text} />
                </div>
            </div>
        );
    }

    getStyle() {
        return {
            width: window.innerWidth <= 525 ? this.state.width > 0 ? "100%" : this.state.width + "px" : this.state.width + "px",
            height: window.innerWidth <= 525 ? this.state.height > 0 ? "300px" : this.state.height + "px" : this.state.height + "px",
            backgroundColor: '' + this.state.color,
            opacity: '0.95'
        }
    }

    componentWillMount() {
        LocalStorage.loadToState(this.getSaveName(), this, () => {
            console.log(this.state.text);
            this.props.updateTitle(this.state.title);
        });
    }

    componentDidUpdate() {
        console.log("State");
        LocalStorage.save(this.getSaveName(), {color: this.state.color, text: this.state.text, title: this.state.title, width: this.state.width, height: this.state.height});
    }

    getSaveName() {
        return "NoteDisplay" + this.props.id;
    }
}
