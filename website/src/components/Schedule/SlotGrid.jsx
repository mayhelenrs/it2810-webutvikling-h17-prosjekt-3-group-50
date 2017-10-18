import React from 'react';
import {Slot} from "./Slot.jsx";

export class SlotGrid extends React.Component {

    constructor(props) {
        super(props);

        this.i = -1;

        const hours = [
            ["08:00", "10:00"], ["10:00", "12:00"], ["12:00", "14:00"], ["14:00", "16:00"]
        ];
        const backgroundColors = [
            "#c7b9e5", "#006e8e", " #20c2af", "#f9a7a9"
        ];


        this.state = {
            hours: hours,
            backgroundColors: backgroundColors,
        }
    }

    render() {
        return (
            <div className={"slotgrid"}>
                {
                    this.state.hours.map((interval) => this.generateNewSlot(interval))
                }
            </div>
        );
    }

    /**
     * Generates a new slot
     * @param interval that will be displayed in the schedule
     * @returns {XML} component Slot
     */
    generateNewSlot(interval) {
        this.i++;
        return <Slot day={this.props.day} id={this.i} interval={interval} color={this.nextColor()}/>
    }

    /**
     * Picks a color to be sent down to the child element. If a color is stored in local storage, that element is
     * chosen, if not, a new random color is picked from a pool of colors.
     * @returns {string}
     */
    nextColor() {
        if (localStorage.getItem(this.props.day + this.i)) {
            return localStorage.getItem(this.props.day + this.i);
        } else {
            let j = Math.round(Math.random() * 3);
            return this.state.backgroundColors[j];
        }
    }
}