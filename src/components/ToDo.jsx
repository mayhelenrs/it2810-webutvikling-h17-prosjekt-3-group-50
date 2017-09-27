import React from 'react';
import '../assets/styles/ToDo.css';


export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = localStorage.getItem("ToDo").split(",");

        this.state = {
            value: '',
            data: todos
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        const data = this.state.data;
        if (this.state.value.length > 0) {
            data.push(this.state.value);
            this.setState({ data: data});
        }
        if (typeof(Storage) !== "undefined" ) {
            localStorage.setItem("ToDo", data);
            console.log(localStorage.getItem("ToDo"));
        }
        event.preventDefault();


    }

    renderToDoItems() {
        return this.state.data.map((todo, index) =>
            <ToDoItem value={todo} key={index}/>
        );
    }


    render() {
        return (
            <div className="todo-list">
                <h1>Todo: </h1>
                <ul>
                    {this.renderToDoItems()}
                </ul>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Add" onClick={this.handleSubmit}/>
            </div>
        );
    }
}


export class ToDoItem extends React.Component {
    render() {
        return (
            <div className="toDo">
                <input type="checkbox" key={this.props.index} label="false"/>
                <li key={this.props.index}>{this.props.value}</li>
            </div>
        );
    }
}