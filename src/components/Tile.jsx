import React from 'react';
import '../assets/styles/Component.css';

export class Tile extends React.Component {
    render() {
        return(
            <div className={"Frontpage-tile"}>
                <img alt={"Icon for tile"}/>
                <h3>{this.props.tileTitle}</h3>
                <button>Enter <img/></button>
            </div>
        );
    }
}