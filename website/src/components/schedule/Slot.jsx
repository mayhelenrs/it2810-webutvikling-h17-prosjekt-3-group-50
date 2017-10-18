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


    }

    render() {
        return (
            <div className={"slot"} style={{backgroundColor: '' + this.state.color}}>
                <div>
                     <span className={"slot-interval"}>
                        {this.state.interval[0]} - {this.state.interval[1]}
                    </span>
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
     * Runs each time the component is updated, saving the state to local storage using our LocalStorage-function if
     * the interval values are valid
     */
    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), {color: this.state.color});
    }


    /**
     * Runs when the component mounts for the first time. The functions calls LocalStorage.loadToState which checks
     * if these is data saved in local storage realted to it. if not, then it is the first time the component is
     * mounted and we save the state for later
     */
    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            this.setState((prevState) => {
                return {...prevState, color: data.color};
            });
        }, {color: this.state.color});
    }

    // returns the key that will be searched for/saved to in local storage
    getSaveName() {
        return "" + this.props.day + this.props.id;
    }

}