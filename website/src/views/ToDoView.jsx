import React from 'react';
import '../assets/styles/ToDo.css';
import {ToDo} from '../components/todo/ToDo.jsx';
import {Categories} from '../components/categories/Categories.jsx';
import {Navbar} from "../components/common/Navbar";

//Parent of components/ToDo
export class ToDoView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: <ToDo ref={instance => {
                this.todo = instance
            }}/>
        }

    }

    //Encapsulates the ToDo inside the category component, which renders both category and Todo.

    render() {
        return (
            <div className={"body-fullwidth"}>
                <Navbar navbarLocation={"TODOS"} navbarImage={require("../assets/images/navbar_leftarrow.png")}/>
                <Categories id={2} title={"todos"} filter={() => this.todo.filter()}>
                    {this.state.todo}
                </Categories>
            </div>
        );
    }
}
