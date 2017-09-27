import React from 'react';
import '../assets/styles/Component.css';


export class Header extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <img alt={"Icon of a speedometer"} src={"../assets/images/navbar-lefticon.png"}></img>
                <p></p>
            </div>
        );
    }
}