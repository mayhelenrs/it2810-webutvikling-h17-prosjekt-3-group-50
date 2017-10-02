import React from 'react';
import '../assets/styles/ToDo.css';


export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        if(localStorage.getItem("ToDo") != null) {
            todos = localStorage.getItem("ToDo").split(",");
        }
        this.state = {
            value: '',
            data: todos,
            checked: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

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

   handleClick(id) {
        console.log(id);


    }



    renderToDoItems() {
        return this.state.data.map((todo, index) =>
            <ToDoItem className="items" value={todo} key={index} onClick={() => this.handleClick(index)}/>
        );
    }

    render() {
        return (
            <div className="todo-list">
                <p className="todo-info"><span id="yellow">IPIM</span> - YOUR PERSONAL INFORMATION MANAGER</p>
                <h1 id="titleToDos">THIS IS YOUR TODO'S FOR NOW</h1>
                <p className="todo-info"><span id="yellow">CATEGORIES</span>- SELECT YOUR FILTER</p>
                <ul id="todo-holder">
                    {this.renderToDoItems()}
                </ul>
                <input type="text" placeholder="Write your TODO" value={this.state.value}
                       onChange={this.handleChange}/>
                <input type="submit" id="btn-green" value="Add" onClick={this.handleSubmit}/>
            </div>
        );
    }
}


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
            <li key={this.props.index} onClick={this.props.onClick}>
                <input type="checkbox" key={this.props.index} label={text} onClick={this.props.onClick}/>
                {this.props.value}
            </li>
        );
    }
}