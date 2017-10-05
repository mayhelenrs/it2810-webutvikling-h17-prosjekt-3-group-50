import React from "react";
import {Event} from "./Event.jsx";

export class Slot extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className={"slot"} style={{backgroundColor: '' + this.props.color}} >
                <div>
                    <input className={"slot-interval slot-interval-start"} defaultValue={this.props.interval[0]}/>
                    -
                    <input className={"slot-interval slot-interval-end"} defaultValue={this.props.interval[1]} />
                </div>
                {
                    <Event/>
                }
            </div>
        )
    }
}