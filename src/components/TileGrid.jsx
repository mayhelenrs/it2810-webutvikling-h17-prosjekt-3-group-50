import React from 'react';
import {Tile} from '../components/Tile';
import '../assets/styles/Component.css';

export class TileGrid extends React.Component {


	constructor(props) {
		super(props);
		//define starting tiles
		const tileInfo = [
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "red"],
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "green"],
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "yellow"],
			["Title", require("../assets/images/calendar.png"), "#c7b9e5", "red"]
		];
		//set state values
		this.state = {
			tiles: tileInfo,
			filteredTiles: tileInfo,
			filter: ""
		};
		//this is only nessecarry if you refer to the function without the ending (), for example this.appendTile instead of this.appendTile()
		this.appendTile = this.appendTile.bind(this);
		this.filterTiles = this.filterTiles.bind(this);
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
						/>
					)
				}
				<br/>
				<div>
					<button className="add-button" onClick={() => this.appendTile("Hei", require("../assets/images/calendar.png"), "#c7b9e5", this.state.filter)}>Add</button>
					<button className="add-button" onClick={() => this.filterHandler("red")}>red</button>
					<button className="add-button" onClick={() => this.filterHandler("green")}>green</button>
					<button className="add-button" onClick={() => this.filterHandler("")}>all</button>
				</div>
			</div>
		);
	}

	appendTile(title, icon, color, category) {
		//use a function within the setState function to append new tile to prevState and update new state
		this.setState(function(prevState){
			prevState.tiles.push([title, icon, color, category])
			if(prevState.filter != "") {
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
			if (element[3] == category) {
				filteredItems.push(element)
			}
		});
		return filteredItems;
	}
	filterHandler(category) {
		if(category != "") {
			this.setState({filteredTiles: this.filterTiles(this.state.tiles, category), filter: category});
		}else {
			this.setState({filteredTiles: this.state.tiles});
		}
	}
}