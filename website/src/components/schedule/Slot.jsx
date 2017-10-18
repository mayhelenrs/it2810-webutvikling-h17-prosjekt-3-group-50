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
                    <input className={"slot-interval slot-interval-start"} value={this.state.interval[0]}
                           onChange={this.onIntervalChange}/>
                    -
                    <input className={"slot-interval slot-interval-end"} value={this.state.interval[1]}
                           onChange={this.onIntervalChange}/>
                </div>
                {
                    this.generateNewEvent()
                }
            </div>
        )
    }

    /**
     * Generates a new Event component
     * @returns {XML}
     */
    generateNewEvent() {
        return <Event day={this.props.day} slotId={this.props.id} id={this.i}/>
    }

    /**
     * updates the itnerval in the Slot. This is done by updating the current state with the new itnerval values.
     * @param target the input field that is changed (targeted)
     */
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

    /**
     * Runs each time the component is updated, saving the state to local storage using our LocalStorage-function if
     * the interval values are valid
     */
    componentDidUpdate() {
        if (new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/).test(this.state.interval[0])
            && new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/).test(this.state.interval[1])) {
            LocalStorage.save(this.getSaveName(), {color: this.state.color, interval: this.state.interval});
        }
    }


    /**
     * Runs when the component mounts for the first time. The functions calls LocalStorage.loadToState which checks
     * if these is data saved in local storage realted to it. if not, then it is the first time the component is
     * mounted and we save the state for later
     */
    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            this.setState((prevState) => {
                return {...prevState, color: data.color, interval: data.interval};
            });
        }, {color: this.state.color, interval: this.state.interval});
    }

    // returns the key that will be searched for/saved to in local storage
    getSaveName() {
        return "" + this.props.day + this.props.id;
    }

}