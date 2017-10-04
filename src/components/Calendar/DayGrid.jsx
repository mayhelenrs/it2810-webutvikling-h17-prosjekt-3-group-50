import React from 'react';
import {Date} from "./Date.jsx";


export class DateGrid extends React.Component {
    constructor(props) {
        super(props);


        const days = [
            ["Monday"],
            ["Tuesday"],
            ["Wednesday"],
            ["Thursday"],
            ["Friday"],
            ["Saturday"],
            ["Sunday"]
        ];

        this.state = {
            days: days
        }
    }

    render() {

        return(
            <div className={"dategrid"}>
                {
                    //Map days to Date component
                    this.state.days.map((info) =>
                        <Date day={info[0]}/>
                    )
                }
            </div>
        );
    }
}