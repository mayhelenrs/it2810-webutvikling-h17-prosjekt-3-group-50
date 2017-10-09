import React from 'react';
import {SlotGrid} from "./SlotGrid.jsx";

export class Day extends React.Component {

    render() {
        return(
            <div className={"day"}>
                <p className={"day-text"}>{this.props.day}</p>
                <SlotGrid day={this.props.day}/>
            </div>
        )
    }
}
