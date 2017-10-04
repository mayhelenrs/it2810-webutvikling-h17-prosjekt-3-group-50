import React from 'react';
import {Event} from "./Event.jsx";

export class EventGrid extends React.Component {

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
            <div className={"eventgrid"}>
                {
                    this.state.hours.map((hour) =>
                        <Event hour={hour}/>
                    )
                }
            </div>

        );
    }
}