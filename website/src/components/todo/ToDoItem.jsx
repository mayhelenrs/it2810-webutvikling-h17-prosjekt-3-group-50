import React from 'react';

//Child of Todo.jsx
export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //Updates the state of whether the checkbox is clicked or not.
    handleClick() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        const text = this.state.checked;
        return (
            <li key={this.props.index} className="todo-item">
                <div className="category-todo" style={{backgroundColor: '' + this.props.color}}/>
                <input type="submit"
                       className="todo-checkbox"
                       key={this.props.index}
                       label={text}
                       value=''
                       onClick={() => {
                           this.handleClick();
                           this.props.onClick();
                       }}
                       checked={this.state.checked}
                />
                <p className="todo-text">{this.props.value}</p>
            </li>
        );
    }
}
