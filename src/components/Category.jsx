import React from 'react';
import '../assets/styles/Component.css';

export class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
        }
    }

    render() {
        return (
            <div className="Category">
                <div style={{backgroundColor: '' + this.state.color}} className={"CategoryColor"}>
                </div>
                <div>
                    <input className={"CategoryName"} defaultValue="TODO"/>
                </div>
            </div>
        );
    }

    selectElement() {
        this.setState({selected: true});
    }

}