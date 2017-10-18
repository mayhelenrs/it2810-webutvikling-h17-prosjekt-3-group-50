import React from "react";
import {Event} from "./Event.jsx";
import {LocalStorage} from "../../service/LocalStorage";

export class Slot extends React.Component {
    constructor(props) {
        super(props);

        this.i = 0;

        this.state = {
            color: this.props.color,
            interval: this.props.interval
        };


        this.onIntervalChange = this.onIntervalChange.bind(this);
        this.generateNewEvent = this.generateNewEvent.bind(this);
    }

    render() {
        return (
            <div className={"slot"} style={{backgroundColor: '' + this.state.color}}>
                <div>
                    <input className={"slot-interval slot-interval-start"} value={this.state.interval[0]} onChange={this.onIntervalChange} />
                    -
                    <input className={"slot-interval slot-interval-end"} value={this.state.interval[1]} onChange={this.onIntervalChange}/>
                </div>
                {
                    this.generateNewEvent()
                }
            </div>
        )
    }

    generateNewEvent() {
        return <Event day={this.props.day} slotId={this.props.id} id={this.i}/>
    }

    onIntervalChange({target}) {

        let classNames = target.className.split(" ");
        let tempInterval = [];
        if (classNames[1] === "slot-interval-start") {
            tempInterval.push(target.value);
            tempInterval.push(this.state.interval[1]);
        } else {
            tempInterval.push(this.state.interval[0]);
            tempInterval.push(target.value);
        }
        this.setState({color: this.state.color, interval: tempInterval});

    }


    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), {color: this.state.color, interval: this.state.interval});
    }

    /*
    When the component mounts we check to see if there is data saved in localStorage related to it.
    If not, then this is the first time the component is mounted and we save the state for later
    */
    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            this.setState((prevState) => {
                return {...prevState, color: data.color, interval: data.interval};
            });
        }, {color: this.state.color, interval: this.state.interval});
        //LocalStorage.loadToState(this.getSaveName(), this);
    }

    getSaveName() {
        return "" + this.props.day + this.props.id;
    }

}