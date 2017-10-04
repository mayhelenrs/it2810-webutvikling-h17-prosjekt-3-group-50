import React from 'react';

export class Blaah extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        console.log(this.props.color);
    }



    render() {
        return (
            <li key={this.props.index} className="category-item">
                <input type="submit" className="btn-category" key={this.props.index} value=""
                       onClick={this.props.onClick} style={{backgroundColor: '' + this.props.color}}/>
                {this.props.value}
            </li>
        );
    }

}