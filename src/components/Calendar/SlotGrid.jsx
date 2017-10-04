import React from 'react';
import '../../assets/styles/Component.css';
import {Slot} from "./Slot.jsx";

export class SlotGrid extends React.Component {

    constructor(props) {
        super(props);


        const hours= [
            "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
        ];

        this.state = {
            hours: hours
        }
    }
    render() {
        return(
            <div className={"slotgrid"}>
                {
                    this.state.hours.map((hour) =>
                        <Slot hour={hour}/>
                    )
                }
            </div>

        );
    }
}