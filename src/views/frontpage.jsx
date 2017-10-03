import React from 'react';
import '../assets/styles/App.css';
import {Navbar, Pagetext, TileGrid} from '../components';

export class Frontpage extends React.Component {
    render() {
        return (
            <div className="body-fullwidth">
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
                <div className="frontpage-body">
                    <br/>
                    <Pagetext pagetextContent={"VELKOMMEN TILBAKE, MARIUS!"}/>
                    <br/><br/>
                    <TileGrid/>
                </div>
            </div>
        );
    }
}