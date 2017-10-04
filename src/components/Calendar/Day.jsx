import React from 'react';
import {EventGrid} from "./SlotGrid.jsx";

export class Date extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={"date"}>
                <p>{this.props.day}</p>
                <EventGrid/>
            </div>
        )
    }
}