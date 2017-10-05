import React from "react";
import {Event} from "./Event.jsx";

export class Slot extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.id);
        let color= this.props.color;
        //localStorage.removeItem(this.props.day + this.props.id);
        this.state = {
            color: color,
            interval: this.props.interval
        }
    }

    render() {
        return (
            <div className={"slot"} style={{backgroundColor: '' + this.state.color}} >
                <div>
                    <input className={"slot-interval slot-interval-start"} defaultValue={this.state.interval[0]}/>
                    -
                    <input className={"slot-interval slot-interval-end"} defaultValue={this.state.interval[1]} />
                </div>
                {
                    <Event/>
                }
            </div>
        )
    }

    componentDidMount() {
        let color = this.state.color;
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem(this.props.day + this.props.id, color);
        }
    }

}