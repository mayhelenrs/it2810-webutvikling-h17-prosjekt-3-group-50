import React from 'react';
import '../assets/styles/Component.css';

export class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    render() {
        return (
            <div className={"Category " + (this.state.selected ? "Selected" : "")} onClick={() => {
                this.selectElement();
                this.props.selectElement(this);
            }}>
                {this.state.selected}
            </div>
        );
    }

    selectElement() {
        this.setState({selected: true});
        console.log(this.state.selected);
    }


}