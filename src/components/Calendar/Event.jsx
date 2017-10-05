import React from "react";
import '../../assets/styles/Component.css';

export class Event extends React.Component {
    render() {
        return (
            <div className={"event"}>
                <input className={"event-title"}/>
                <input className={"event-description"}/>
            </div>
        )
    }
}