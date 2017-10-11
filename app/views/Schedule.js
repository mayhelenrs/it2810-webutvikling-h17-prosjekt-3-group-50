import React from 'react';
import {View} from 'react-native';
import {DayGrid} from "../components/Schedule/DayGrid";

export class Schedule extends React.Component {

    render() {
        return(
            <View>
                <View>
                    <br/>
                    <br/><br/>
                    <DayGrid/>
                </View>
            </View>

        )
    }
}
