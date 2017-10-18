import React from 'react';
import Tile from './Tile';
import {ScrollView, StyleSheet} from 'react-native';

// Component used to contain all the tiles on the front page. Pretty similar to the code on the website with some
// adjustments to make it compatible with react-native
export default class TileGrid extends React.Component {

    constructor(props) {
        super(props);

        //define tiles
        const standardTiles = [
            ["Schedule", require("../../assets/images/calendar.png"), "#c7b9e5", "schedule"],
            ["Appointments", require("../../assets/images/notifications.png"), "#006e8e", "appointments"],
            ["Todo", require("../../assets/images/todo.png"), "#20c2af", "todo"],
            ["Notes", require("../../assets/images/notes.png"), "#f9a7a9", "note"]

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
                            view={info[3]}
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
