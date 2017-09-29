import React from 'react';
import '../assets/styles/App.css';
import {Navbar} from '../components/Navbar.jsx'
import {Tile} from '../components/Tile'
import {Pagetext} from "../components/Pagetext";

export class Frontpage extends React.Component {
    render() {
        return (
            <body>
            <Navbar navbarLocation={"DASHBOARD"}

                    /*Remove this later, this is just to help with styling and an example */
                    navbarLinks={
                        <ul className={"Navbar-links"}>
                            <li>
                                <a><h2>Link 1</h2></a>
                            </li>
                            <li>
                                <a><h2>Link 2</h2></a>
                            </li>
                        </ul>
                    }
            />
            <Pagetext pagetextContent={"VELKOMMEN!"}/>
            <div id={"TileContainer"}>
                <Tile
                    tileTitle={"KALENDAR"}
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
            </body>
        );
    }
}