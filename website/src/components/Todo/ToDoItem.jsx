import React from 'react';

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({checked: !this.state.checked});

    }

    render() {
        const text = this.state.checked;

        return (

            <li key={this.props.index} className="todo-item">
                <div className="category-todo" style={{backgroundColor: '' + this.props.color}}></div>
                <input type="checkbox" className="todo-checkbox" key={this.props.index} label={text}
                       onClick={this.props.onClick} onChange={() => this.handleClick()}/>
                <p className="todo-text">{this.props.value}</p>
            </li>
        );
    }
}
