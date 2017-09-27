import React from 'react';
import '../assets/styles/App.css';
import {Navbar} from '../components/Navbar.jsx'
import {Tile} from '../components/Tile'

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
                    }/>
            <Tile
                tileTitle={"KALENDAR"}
            />
            <Tile
                tileTitle={"TODO"}
            />
            <Tile
                tileTitle={"NOTIFICATION"}
            />
            <Tile
                tileTitle={"NOTES"}
            />
            </body>
        );
    }
}