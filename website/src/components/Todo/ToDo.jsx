import React from 'react';
import {ToDoItem} from './ToDoItem.jsx';

//Parent of TodoItem and child of views/TodoView
export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        let colors_todo = [];

        this.value = "";

        //Checking if localStorage has data, if it does it gets the stored data
        if (localStorage.getItem("ToDo") != null) {
            todos = JSON.parse(localStorage.getItem("ToDo"));
            colors_todo = JSON.parse(localStorage.getItem("Colors"));
        }
        //Intiating states
        this.state = {
            filter: '',
            value: '',
            current_color: '',
            color_data: colors_todo,
            data: todos,
            displayed_data: todos,
            displayed_colors: colors_todo,

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
        this.filter = this.filter.bind(this);
    }

    //Handles the color from category selection and shows all elements if no category is chosen.
    //If a category is chosen, then filter will ensure that only the given category items is shown.
    filter() {
        let color = this.props.selectedColor();
        this.setState({filter: color});
        if(color === undefined) {
            color = "#016D91";
        }
        this.setState({current_color: color});
        let displayed_colors = this.props.selectedColor() === undefined ? this.state.color_data :
            this.state.color_data.filter((color, index) => color === this.props.selectedColor());
        let displayed_data = this.props.selectedColor() === undefined ? this.state.data :
            this.state.data.filter((todo, index) => this.state.color_data[index] === this.props.selectedColor());
        this.setState({displayed_colors: displayed_colors, displayed_data: displayed_data});
    }

    //Fires everytime the input text field change, updates value
    handleChange(event){
        this.setState({value: event.target.value});
    }

    //Fires when Add button is clicked, updates states and stores data in localstorage.
    handleSubmit(event) {

        let todos = this.state.data;
        let colors = this.state.color_data;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.current_color);
                this.setState({ data: todos, color_data: colors},() => this.filter());

            if (typeof(Storage) !== "undefined" ) {
                localStorage.setItem("ToDo", JSON.stringify(todos));
                localStorage.setItem("Colors", JSON.stringify(colors));
            }
        }
        this.setState({value:  ""});
        event.preventDefault();
    }

    //Handles checkbox clicks from child and removes the clicked item.
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
       this.setState({ data: handledTodos, color_data: handledColors}, () => this.filter());
       localStorage.setItem("ToDo", JSON.stringify(handledTodos));
       localStorage.setItem("Colors", JSON.stringify(handledColors));
    }

    //Render the child elements from ToDoItem, sends down the displayed todoData and colors.
    renderToDoItems() {
        return this.state.displayed_data.map((todo, index) =>
            <ToDoItem className="items" value={todo} key={index} color={this.state.displayed_colors[index]}
                      onClick={() => this.handleClicks(index)}/>
        );

    }

    render() {
        return (
            <div className="Body">
                <div className="todo-list">
                    <ul id="todo-holder">
                        {this.renderToDoItems()}
                    </ul>
                    <input id="todo-text-field" type="text" placeholder="Write your TODO"
                           onChange={this.handleChange}/>
                    <input type="submit" id="btn-green" value="Add" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}


