import React from 'react';
import '../../assets/styles/Component.css';

// Tile component used on the frontpage. Used to link to different underpages
export class Tile extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '' + this.props.color}} className={"Tile"}>
                <p><img src={this.props.tileIcon} alt={"Icon for tile"} className={"Tile-img"}/></p>
                <h3>{this.props.tileTitle}</h3>
                <a href={this.props.view} className="enter-button">
                    Enter
                    <img alt={"Arrow pointing to the right"} src={require("../assets/images/arrow_right.png")}/>
                </a>
            </div>
        );
    }
}
