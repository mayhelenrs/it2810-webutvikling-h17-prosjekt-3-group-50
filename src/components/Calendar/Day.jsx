import React from 'react';
import {SlotGrid} from "./SlotGrid.jsx";

export class Day extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={"day"}>
                <p className={"day-text"}>{this.props.day}</p>
                <SlotGrid/>
            </div>
        )
    }
}