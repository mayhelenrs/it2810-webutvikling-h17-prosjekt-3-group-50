import React from 'react';
import '../assets/styles/App.css';

export class Pagetext extends React.Component {
    render() {
        return (
            <div className={"Pagetext-container"}>
                <p className={"Pagetext-container-small"}>
                    <span className={"Pagetext-container-small-span"}>IPIM </span>
                    - DIN PERSONLIGE INFORMASJONSHJELPER
                </p>
                <p className={"Page-text-container-big"}>{this.props.pagetextContent}</p>
            </div>
        )
    }
}