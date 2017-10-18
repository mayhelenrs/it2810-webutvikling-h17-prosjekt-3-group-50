import React from 'react';
import '../assets/styles/App.css';
import {Pagetext, TileGrid} from '../components';
import {Navbar} from "../components/Navbar";

export class Frontpage extends React.Component {

    render() {
        return (
            <div className="body-fullwidth">
                <Navbar navbarLocation={"DASHBOARD"} navbarImage={require("../assets/images/navbar_lefticon.png")}/>
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
