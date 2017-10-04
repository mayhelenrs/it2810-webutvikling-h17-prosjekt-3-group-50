import React from 'react';
import {ToDo} from '../components/ToDo.jsx';
import {Navbar} from '../components/Navbar.jsx';
import {Category} from '../components/Category.jsx';

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
                <ToDo color={this.state.current_color}/>
                <Category  handleCategory={(color) => this.handleCategory(color)}/>
            </div>

        );
    }
}
