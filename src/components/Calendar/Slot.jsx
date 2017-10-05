import React from "react";
import {Event} from "./Event.jsx";
import '../../assets/styles/Component.css';

export class Slot extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className={"slot"} style={{backgroundColor: '' + this.props.color}} >
                <input className={"slot-interval"} defaultValue={this.props.interval[0] + " - " + this.props.interval[1]}/>
                {
                    <Event/>
                }
            </div>
        )
    }
}