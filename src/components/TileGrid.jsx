import React from 'react';
import {Tile} from '../components/Tile';
import '../assets/styles/Component.css';
import {frontpage, Note, Todo, Calendar, Notification } from '../views';

export class TileGrid extends React.Component {

    constructor(props) {
        super(props);

        //define tiles
        const standardTiles = [
            ["Calendar", require("../assets/images/calendar.png"), "#c7b9e5", "red", <Calendar/>],
            ["Notifications", require("../assets/images/notifications.png"), "#006e8e", "green", <Notification/>],
            ["Todo", require("../assets/images/todo.png"), "#20c2af", "yellow", <Todo/>],
            ["Notes", require("../assets/images/notes.png"), "#f9a7a9", "red", <Note/>]
        ];
        //set state values
        this.state = {
            tiles: standardTiles,
        };

        //this is only nessecarry if you refer to the function without the ending (), for example this.appendTile instead of this.appendTile()
        /* Commented out since the functions are not needed
        this.appendTile = this.appendTile.bind(this);
        this.filterTiles = this.filterTiles.bind(this);
        */
    }

    render() {
        return (
            <div className="tilegrid">
                {
                    //map tileInfo to Tile-components and render
                    this.state.tiles.map((info) =>
                        <Tile
                            tileTitle={info[0]}
                            tileIcon={info[1]}
                            color={info[2]}
                            view={info[4]}
                        />
                    )

                }
            </div>
        );
    }

    /*
    appendTile(title, icon, color, category, view) {
        //use a function within the setState function to append new tile to prevState and update new state
        this.setState(function (prevState) {
            console.log(prevState);
            let tempTiles = prevState.tiles;
            tempTiles.push([title, icon, color, category, view]);
            return {
                tiles: tempTiles
               };
        });
    }

    //The following code is commented out since it is not necessary for the functionality on the frontpage
    filterTiles(tiles, category) {
        //create temperary array for holding items after filtering
        const filteredItems = [];
        //filter items using the tiles array from state
        tiles.forEach(function (element) {
            if (element[3] === category) {
                filteredItems.push(element)
            }
        });
        return filteredItems;
    }

    //handeling events
    filterHandler(category) {
        if (category !== "") {
            this.setState({filteredTiles: this.filterTiles(this.state.tiles, category), filter: category});
        } else {
            this.setState({filteredTiles: this.state.tiles});
        }
    }
    */
}