import React from 'react';
import '../assets/styles/App.css';
import {Navbar, Pagetext, TileGrid} from '../components';

export class Frontpage extends React.Component {
    render() {
        return (
            <div className="body-fullwidth">
                <Navbar navbarLocation={"DASHBOARD"}/>
                <div className="frontpage-body">
                    <br/>
                    <Pagetext text={"VELKOMMEN!"}/>
                    <br/><br/>
                    <TileGrid/>
                </div>
            </div>
        );
    }
}
