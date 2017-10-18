import React from 'react';
import '../../assets/styles/Component.css';
import {Day} from "./Day.jsx";


export class DayGrid extends React.Component {

    constructor(props) {
        super(props);

        const days = [
            ["Mo"],
            ["Tu"],
            ["We"],
            ["Th"],
            ["Fr"],
            ["Sa"],
            ["Su"]
        ];

        this.state = {
            days: days
        }
    }

    render() {

        return (
            <div className={"daygrid"}>
                {
                    //Map days to Date component
                    this.state.days.map((info) =>
                        <Day day={info[0]}/>
                    )
                }
            </div>
        );
    }
}