import React from "react";
import {Event} from "./Event.jsx";
import '../../assets/styles/Component.css';

export class Slot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event: ""
        };

        this.appendEvent = this.appendEvent.bind(this);

    }
    render() {
        return(
            <div className={"slot"} onClick={this.appendEvent}>
                <p>{this.props.hour}</p>
                {
                    this.state.event
                }
            </div>
        )
    }
    appendEvent() {
        this.setState({event:<Event/>})
    }
}