import React from "react";
import '../../assets/styles/Component.css';

export class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "New event",
            description: "New description"
        }
    }

    render() {
        return (
            <div className={"event"}>
                <input className={"event-title"} defaultValue={this.state.title}/>
                <input className={"event-description"} defaultValue={this.state.description}/>
            </div>
        )
    }
}