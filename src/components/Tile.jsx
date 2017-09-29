import React from 'react';
import '../assets/styles/Component.css';

export class Tile extends React.Component {
    render() {
        return(
            <div className={"Tile"}>
                <p><img  src={this.props.tileIcon} alt={"Icon for tile"} className={"Tile-img"}/></p>
                <h3>{this.props.tileTitle}</h3>
                <button>Enter <img alt={"Arrow pointing to the right"} /*src={require("djeie")}*//></button>
            </div>
        );
    }
}