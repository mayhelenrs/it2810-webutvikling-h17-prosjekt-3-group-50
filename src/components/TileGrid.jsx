import React from 'react';
import {Tile} from '../components/Tile';
import '../assets/styles/Component.css';
import {frontpage} from '../views';
import {Note} from './Notes/Note.jsx';

export class TileGrid extends React.Component {

	constructor(props) {
		super(props);
		this.colorPool = ["#c7b9e5", "#006e8e", "#20c2af", "#f9a7a9" ];
		//define starting tiles
		const tileInfo = [
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "red", <Note/>],
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "green", <Note/>],
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "yellow", <Note/>],
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "red", <Note/>]
		];
		//set state values
		this.state = {
			tiles: tileInfo,
			filteredTiles: tileInfo,
			filter: ""
		};
		//this is only nessecarry if you refer to the function without the ending (), for example this.appendTile instead of this.appendTile()
		this.appendTile 	= this.appendTile.bind(this);
		this.filterTiles 	= this.filterTiles.bind(this);
	}

	render() {

		return (
			<div className="tilegrid">
				{
					//map tileInfo to Tile-components and render
					this.state.filteredTiles.map( (info) =>
						<Tile 
							tileTitle={info[0]}
							tileIcon={info[1]}
							color={info[2]}
							view={info[4]}
						/>
					)
				}
				<br/>
				<div>
					<button className="add-button" onClick={() => this.appendTile("Hei", require("../assets/images/calendar.png"), this.colorPool[Math.floor((Math.random() * this.colorPool.length))], this.state.filter, <Note/>)}>Add</button>
					<button className="add-button" onClick={() => this.filterHandler("red")}>red</button>
					<button className="add-button" onClick={() => this.filterHandler("green")}>green</button>
					<button className="add-button" onClick={() => this.filterHandler("")}>all</button>
				</div>
			</div>
		);
	}

	appendTile(title, icon, color, category, view) {
		//use a function within the setState function to append new tile to prevState and update new state
		this.setState(function(prevState){
			prevState.tiles.push([title, icon, color, category, view])
			if(prevState.filter !== "") {
				return {tiles: prevState.tiles, filteredTiles: this.filterTiles(prevState.tiles, prevState.filter)}	
			}else {
				return {tiles: prevState.tiles, filteredTiles: prevState.tiles}
			}
		});
	}
	filterTiles(tiles, category) {
		//create temperary array for holding items after filtering
		const filteredItems = []
		//filter items using the tiles array from state
		tiles.forEach(function(element) {
			if (element[3] === category) {
				filteredItems.push(element)
			}
		});
		return filteredItems;
	}
	//handeling events
	filterHandler(category) {
		if(category !== "") {
			this.setState({filteredTiles: this.filterTiles(this.state.tiles, category), filter: category});
		}else {
			this.setState({filteredTiles: this.state.tiles});
		}
	}
}