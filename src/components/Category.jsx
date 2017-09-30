import React from 'react';
import '../assets/styles/Component.css';

export class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            selected: false
        }
    }

    render() {
        return (
            <div style={{backgroundColor: '' + this.state.color, border: (this.state.selected ? this.state.color + " solid 6px" : "none")}} className={"Category"} onClick={() => {
                this.selectElement();
                this.props.selectElement(this);
            }}>
                {this.state.selected}
            </div>
        );
    }

    selectElement() {
        this.setState({selected: true});
    }

}