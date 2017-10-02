import React from 'react';
import {Tile} from '../components/Tile';
import '../assets/styles/Component.css';

export class TileGrid extends React.Component {
	render() {
		return (
			<div className="tilegrid">
				<Tile
                tileTitle={"CALENDAR"}
                tileIcon={require("../assets/images/calendar.png")}
	            />
	            <Tile
	                tileTitle={"TODO"}
	                tileIcon={require("../assets/images/todo.png")}
	            />
	            <Tile
	                tileTitle={"NOTIFICATION"}
	                tileIcon={require("../assets/images/notifications.png")}
	            />
	            <Tile
	                tileTitle={"NOTES"}
	                tileIcon={require("../assets/images/notes.png")}
	            />
	            <Tile
                tileTitle={"CALENDAR"}
                tileIcon={require("../assets/images/calendar.png")}
	            />
	            <Tile
	                tileTitle={"TODO"}
	                tileIcon={require("../assets/images/todo.png")}
	            />
	            <Tile
	                tileTitle={"NOTIFICATION"}
	                tileIcon={require("../assets/images/notifications.png")}
	            />
	            <Tile
	                tileTitle={"NOTES"}
	                tileIcon={require("../assets/images/notes.png")}
	            />

			</div>
		);
	}
}