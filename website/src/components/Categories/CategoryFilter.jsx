import React from 'react';
import '../Categories/Categories.css';

export class CategoryFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            selected: false
        }
    }

    render() {
        return (
            <div style={{backgroundColor: '' + this.state.color, border: (this.state.selected ? this.state.color + " solid 6px" : "none")}} className={"CategoryFilter"} onClick={() => {
                this.toggleElement();
                this.props.selectCategory(this);
            }}>
                {this.state.selected}
            </div>
        );
    }

    toggleElement() {
        this.setState(prevState => {
            return {...prevState, selected: !prevState.selected};
        });
    }

}