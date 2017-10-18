import React from 'react';
import {ToDoItem} from './ToDoItem.jsx';
import {LocalStorage} from "../../service/LocalStorage";
import update from 'immutability-helper';

//Parent of TodoItem and child of views/TodoView
export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        //Intiating states
        this.state = {
            filter: '',
            value: '',
            currentColor: '',
            colorData: [],
            data: [],
            displayedData: [],
            displayedColors: [],
            indexList: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
        this.filter = this.filter.bind(this);
    }

    componentDidMount() {
        LocalStorage.load(this.getSaveName(), (data) => {
            let colorData = data[0];
            let todoData = data[1];
            this.setState((prevState) => {
                return {
                ...prevState,
                    colorData: colorData,
                    data: todoData,
                };
            }, () => this.filter());
        }, [this.state.colorData, this.state.data]);
    }

    //Handles the color from category selection and shows all elements if no category is chosen.
    //If a category is chosen, then filter will ensure that only the given category items is shown.
    filter() {
        let color = this.props.selectedColor();
        this.setState({filter: color});
        if (color === undefined) {
            color = "#016D91";
        }
        this.setState({currentColor: color});
        let displayedColors = this.props.selectedColor() === undefined ? this.state.colorData :
            this.state.colorData.filter((color, index) => color === this.props.selectedColor());
        let displayedData = this.props.selectedColor() === undefined ? this.state.data :
            this.state.data.filter((todo, index) => this.state.colorData[index] === this.props.selectedColor());
        let indexList = [];
        this.state.colorData.forEach((color, index)=> {
            if(this.props.selectedColor() === undefined || this.props.selectedColor() === color) {
                indexList.push(index);
            }
        });
        this.setState({displayedColors: displayedColors, displayedData: displayedData, indexList: indexList});
    }

    //Fires everytime the input text field change, updates value
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    //Fires when Add button is clicked, updates states and stores data in localstorage.
    handleSubmit(event) {
        let todos = this.state.data;
        let colors = this.state.colorData;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.currentColor);
            this.setState({data: todos, colorData: colors, value: ""}, () => {
                this.filter();
                LocalStorage.save(this.getSaveName(), [this.state.colorData, this.state.data]);
            });
        }
        event.preventDefault();
    }

    //Handles checkbox clicks from child and removes the clicked item.
    handleClicks(index) {
        this.setState((prevState) => {
            return {
                ...prevState,
                colorData: update(prevState.colorData, {$splice: [[index, 1]]}),
                data: update(prevState.data, {$splice: [[index, 1]]}),
            };
        }, () => {
            this.filter();
            LocalStorage.save(this.getSaveName(), [this.state.colorData, this.state.data])
        });
    }

    getSaveName() {
        return "ToDo";
    }

    //Render the child elements from ToDoItem, sends down the displayed todoData and colors.
    renderToDoItems() {
        return this.state.displayedData.map((todo, index) =>
            <ToDoItem className="items" value={todo} key={this.state.indexList[index]} color={this.state.displayedColors[index]}
                      onClick={() => this.handleClicks(this.state.indexList[index])}/>
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


