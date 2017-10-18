import React from 'react';
import '../../assets/styles/App.css';
import '../assets/styles/Component.css';

// This component is used to display some generic text that looks the same for each page, though the text itself may
// change.
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