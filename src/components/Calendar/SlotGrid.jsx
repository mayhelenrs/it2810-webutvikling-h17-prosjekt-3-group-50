import React from 'react';
import '../../assets/styles/Component.css';
import {Slot} from "./Slot.jsx";

export class SlotGrid extends React.Component {

    constructor(props) {
        super(props);


        const hours= [
            ["08:00", "10:00"], ["10:00", "12:00"], ["12:00", "14:00"], ["14:00", "16:00"]
        ];
        const backgroundColors = [
            "#c7b9e5", "#006e8e"," #20c2af", "#f9a7a9"
        ];

        this.i = 0;

        this.state = {
            hours: hours,
            backgroundColors: backgroundColors,
        }
    }
    render() {
        return(
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
        let temp = this.state.backgroundColors[this.i];
        if (this.i >= this.state.backgroundColors.length-1) {
            this.i = 0
        } else {
            this.i ++;
        }
        return temp;
    }
}