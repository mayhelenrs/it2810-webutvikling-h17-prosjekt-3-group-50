import React from 'react';
import {ToDoItem} from './ToDoItem.jsx';


export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        let colors_todo = [];
        if (localStorage.getItem("ToDo") != null) {
            todos = JSON.parse(localStorage.getItem("ToDo"));
            colors_todo = JSON.parse(localStorage.getItem("Colors"));
        }
        this.state = {
            value: '',
            current_color: '',
            color_data: colors_todo,
            data: todos,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);


    }


    handleChange(event){
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        let todos = this.state.data;
        let colors = this.state.color_data;
        let color = "rgb(15, 110, 143)";
        if(this.props.color != null) {
            color = this.props.color;
        }
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(color);
                this.setState({ data: todos});
                this.setState({color_data: colors});
            if (typeof(Storage) !== "undefined" ) {
                localStorage.setItem("ToDo", JSON.stringify(todos));
                localStorage.setItem("Colors", JSON.stringify(colors));
            }
        }

        this.setState({value: ""});
        event.preventDefault();


    }

   handleClicks(index) {
        let todos = JSON.parse(localStorage.getItem("ToDo"));
        let colors = JSON.parse(localStorage.getItem("Colors"));
        let handledTodos = [];
        let handledColors = [];
        for (let i = 0; i < todos.length; i++) {
            if (i !== index) {
                handledTodos.push(todos[i]);
                handledColors.push(colors[i]);
            }
        }
       this.setState({ data: handledTodos});
       this.setState({ color_data: handledColors});
       localStorage.setItem("ToDo", JSON.stringify(handledTodos));
       localStorage.setItem("Colors", JSON.stringify(handledColors));
    }





    renderToDoItems() {
        return this.state.data.map((todo, index) =>
            <ToDoItem className="items" value={todo} key={index} color={this.state.color_data[index]}
                      onClick={() => this.handleClicks(index)}/>
        );
    }

    render() {
        return (
            <div className="Body">
                <div className="todo-list">
                    <p className="todo-info"><span id="yellow">IPIM</span> - YOUR PERSONAL INFORMATION MANAGER</p>
                    <h1 id="titleToDos">THIS IS YOUR TODOS FOR NOW</h1>
                    <ul id="todo-holder">
                        {this.renderToDoItems()}
                    </ul>
                    <input id="text-field" type="text" placeholder="Write your TODO" value={this.state.value}
                           onChange={this.handleChange}/>
                    <input type="submit" id="btn-green" value="Add" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}


