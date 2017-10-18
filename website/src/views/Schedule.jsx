import React from 'react';
import {DayGrid} from "../components/schedule/DayGrid";
import {Pagetext} from "../components/Pagetext";
import "../assets/styles/App.css"
import "../assets/styles/Schedule.css"


export class Schedule extends React.Component {

    // Rendering the view, for the under page Schedule.
    render() {
        return(
            <div className={"body-fullwidth"}>
                <div className={"calendar-body"}>
                    <br/>
                    <Pagetext text={"Here is your week schedule!"}/>
                    <br/><br/>
                    <DayGrid/>
                </div>
            </div>

        )
    }

}