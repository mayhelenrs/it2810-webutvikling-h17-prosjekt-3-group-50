import React from 'react';
import {Slot} from "./Slot.jsx";

export class SlotGrid extends React.Component {

    constructor(props) {
        super(props);


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
                    this.state.hours.map((interval) =>
                        <Slot interval={interval} color={this.nextColor()}/>
                    )
                }
            </div>
        );
    }

    nextColor() {
        let i = Math.round(Math.random() * 3);
        console.log(i);
        return this.state.backgroundColors[i];
    }
}