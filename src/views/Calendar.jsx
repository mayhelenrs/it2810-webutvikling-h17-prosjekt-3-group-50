import React from 'react';
import {DayGrid} from "../components/Calendar/DayGrid";
import {Pagetext} from "../components/Pagetext";


export class Calendar extends React.Component {

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