import React from 'react';
import '../assets/styles/ToDo.css';
import {ToDoItem} from './ToDoItem.jsx';

export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        if(localStorage.getItem("ToDo") !== null) {
            todos = localStorage.getItem("ToDo").split(",");
        }
        this.state = {
            value: '',
            data: todos
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);

    }


    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        const data = this.state.data;
        if (this.state.value.length > 0) {
            data.push(this.state.value);
            this.setState({ data: data});
            if (typeof(Storage) !== "undefined" ) {
                localStorage.setItem("ToDo", data);
            }
        }


        event.preventDefault();


    }

   handleClicks(index) {
        let todos = localStorage.getItem("ToDo").split(",");
        let handledTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (i !== index) {
                handledTodos.push(todos[i]);
            }
        }
       this.setState({ data: handledTodos});
       localStorage.setItem("ToDo", handledTodos);
    }



    renderToDoItems() {
        return this.state.data.map((todo, index) =>
            <ToDoItem className="items" value={todo} key={index} onClick={() => this.handleClicks(index)}/>
        );
    }

    render() {

        return (
            <div className="Body">
                <div className="todo-list">
                    <p className="todo-info"><span id="yellow">IPIM</span> - YOUR PERSONAL INFORMATION MANAGER</p>
                    <h1 id="titleToDos">THIS IS YOUR TODOS FOR NOW</h1>
                    <p className="todo-info"><span id="yellow">CATEGORIES</span>- SELECT YOUR FILTER</p>
                    <ul id="todo-holder">
                        {this.renderToDoItems()}
                    </ul>
                    <input type="text" placeholder="Write your TODO" value={this.state.value}
                           onChange={this.handleChange}/>
                    <input type="submit" id="btn-green" value="Add" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}


