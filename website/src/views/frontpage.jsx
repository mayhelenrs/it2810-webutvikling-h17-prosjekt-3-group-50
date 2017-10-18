import React from 'react';
import '../assets/styles/App.css';
import {Pagetext, TileGrid} from '../components';

export class Frontpage extends React.Component {

    render() {
        return (
            <div className="body-fullwidth">
                <div className="frontpage-body">
                    <br/>
                    <Pagetext text={"VELKOMMEN!"}/>
                    <br/><br/>
                    <div className={"tile-grid-wrapper"}>
                        <TileGrid/>
                    </div>
                </div>
            </div>
        );
    }
}
