import React from "react";

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