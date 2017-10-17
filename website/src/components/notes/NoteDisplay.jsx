import React from 'react';
import './Notes.css';

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
           return {...prevState, color: prevState.color, title: target.value, text: prevState.text};
        }, () => this.props.updateTitle(this.state.title));
    }

    onTextAreaChange({target}) {
        this.setState(prevState => {
            return {...prevState, color: prevState.color, text: target.value};
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

    componentDidMount() {
        const data = this.load();
        if (data !== null) {
            this.setState(prevState => {
                return {...prevState, color: data.color, text: data.text, title: data.title};
            }, () => this.props.updateTitle(this.state.title));
        }
        this.save();
    }

    componentDidUpdate() {
        this.save();
    }

    save() {
        localStorage.setItem("NoteDisplay" + this.props.id, JSON.stringify(this.state));
    }

    load() {
        return JSON.parse(localStorage.getItem("NoteDisplay" + this.props.id));
    }
}