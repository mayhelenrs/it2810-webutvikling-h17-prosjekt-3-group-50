import React from 'react';
import '../assets/styles/Component.css';


export class Header extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <img alt={"icon of a speedometer"} src={require("../assets/images/navbar_lefticon.png")}/>
                <h1>{this.props.navbarLocation}</h1>
                <ul>
                    {this.props.navbarLinks}
                </ul>
            </div>
        );
    }
}