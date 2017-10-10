import React from 'react';
import '../assets/styles/ToDo.css';
import {ToDo} from '../components/Todo/ToDo.jsx';
import {Navbar} from '../components/Navbar.jsx';
import {Category} from '../components/Todo/Category.jsx';


export class ToDoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_color: null,
        };
        this.handleCategory = this.handleCategory.bind(this);
    }

    handleCategory(color){
        this.setState({current_color: color});
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div id="display-todo">
                    <ToDo color={this.state.current_color}/>
                    <Category  handleCategory={(color) => this.handleCategory(color)}/>
                </div>
            </div>

        );
    }
}
