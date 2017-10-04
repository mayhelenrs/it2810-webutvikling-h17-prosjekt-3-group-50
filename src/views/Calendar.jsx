import React from 'react';
import {DayGrid} from "../components/Calendar/DayGrid";


export class Calendar extends React.Component {

    render() {
        return(
            <div className={"body-fullwidth"}>
                <DayGrid/>
            </div>

        )
    }

}