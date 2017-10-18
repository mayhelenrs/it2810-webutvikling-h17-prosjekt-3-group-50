import React from 'react';
import {DayGrid} from "../components/schedule/DayGrid";
import {Pagetext} from "../components/common/Pagetext";
import {Navbar} from "../components/common/Navbar";
import "../assets/styles/App.css"
import "../assets/styles/Schedule.css"


export class Schedule extends React.Component {

    // Rendering the view, for the under page Schedule.
    render() {
        return (
            <div className={"body-fullwidth"}>
                <Navbar navbarLocation={"SCHEDULE"} navbarImage={require("../assets/images/navbar_leftarrow.png")}/>
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