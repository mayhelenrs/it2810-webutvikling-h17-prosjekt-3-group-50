import React from 'react';
import '../assets/styles/ToDo.css';
import {ToDo} from '../components/Todo/ToDo.jsx';
import {Categories} from '../components/categories/Categories.jsx';


export class ToDoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: <ToDo ref={instance => {

                this.todo = instance
            }}/>
        }

    }


    render() {
        return (

            <Categories id={2} filter={() => this.todo.filter()}>
                {this.state.todo}
            </Categories>
        );
    }
}
