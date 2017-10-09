import React from 'react';
import '../assets/styles/App.css';
import '../assets/styles/Component.css';

export class Pagetext extends React.Component {
    render() {
        return (
            <div className={"Pagetext-container"}>
                <p className={"Pagetext-container-small"}>
                    <span className={"Pagetext-container-small-span"}>IPIM</span>
                    - DIN PERSONLIGE INFORMASJONSHJELPER
                </p>
                <p className={"Pagetext-container-big"}>{this.props.text}</p>
            </div>
        )
    }
}