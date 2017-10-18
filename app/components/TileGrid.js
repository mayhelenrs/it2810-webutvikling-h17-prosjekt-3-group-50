import React from 'react';
import Tile from './Tile';
import {StyleSheet, View, ScrollView} from 'react-native';


export default class TileGrid extends React.Component {

    constructor(props) {
        super(props);

        //define tiles
        const standardTiles = [
            ["Schedule", require("../assets/images/calendar.png"), "#f9a7a9", "red", "schedule"],
            ["Appointments", require("../assets/images/notifications.png"), "#20c2af", "green", "appointments"],
            ["Todo", require("../assets/images/todo.png"), "#006e8e", "yellow", "todo"],
            ["Notes", require("../assets/images/notes.png"), "#c7b9e5", "red", "note"]
        ];
        //set state values
        this.state = {
            tiles: standardTiles,
        };
    }

    render() {
        return (
                <ScrollView 
                    contentContainerStyle={styles.scrollContainer}
                    pagingEnabled={false} 
                >
                    {
                        //map tileInfo to Tile-components and render
                        this.state.tiles.map((info, index) =>
                            <Tile
                                key={index}
                                tileTitle={info[0]}
                                tileIcon={info[1]}
                                color={info[2]}
                                view={info[4]}
                                navigation={this.props.navigation}
                            />
                        )

                    }
                </ScrollView>
        );
    }
}
const styles = StyleSheet.create({

    scrollContainer: {
        width: "100%",
        paddingTop: 10,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: "center"
    }
});
