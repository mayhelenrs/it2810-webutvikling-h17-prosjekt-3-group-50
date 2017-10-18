import React from 'react';
import {Tile} from './Tile';
import '../../assets/styles/Component.css';


// container component for files on the frontpage.
export class TileGrid extends React.Component {

    constructor(props) {
        super(props);

        //define tiles
        const standardTiles = [
            ["Schedule", require("../assets/images/calendar.png"), "#c7b9e5", "schedule"],
            ["Appointments", require("../assets/images/notifications.png"), "#006e8e", "appointments"],
            ["Todo", require("../assets/images/todo.png"), "#20c2af", "todo"],
            ["Notes", require("../assets/images/notes.png"), "#f9a7a9", "note"]
        ];
        //set state values
        this.state = {
            tiles: standardTiles,
        };
    }

    render() {
        return (
            <div className="tilegrid">
                {
                    //map tileInfo to Tile-components and render
                    this.state.tiles.map((info, index) =>
                        <Tile
                            tileTitle={info[0]}
                            tileIcon={info[1]}
                            color={info[2]}
                            view={info[3]}
                            key={index}
                        />
                    )
                }
            </div>
        );
    }
}
