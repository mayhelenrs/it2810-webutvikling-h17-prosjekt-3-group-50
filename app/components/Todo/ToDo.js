import React from 'react';
import ToDoItem from './ToDoItem.js';
import {View, Button, TextInput, StyleSheet} from 'react-native';


export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        let colors_todo = [];
        /*if (localStorage.getItem("ToDo") != null) {
            todos = JSON.parse(localStorage.getItem("ToDo"));
            colors_todo = JSON.parse(localStorage.getItem("Colors"));
        }*/
        this.state = {
            value: '',
            filter: '',
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




    handleChange(event){

        this.setState({value: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit(event) {
        let todos = this.state.data;
        let colors = this.state.color_data;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.current_color);
            this.setState({data: todos, color_data: colors});
        }
            /*if (typeof(Storage) !== "undefined" ) {
                localStorage.setItem("ToDo", JSON.stringify(todos));
                localStorage.setItem("Colors", JSON.stringify(colors));
            }*/

        this.setState({value: ""});
        event.preventDefault();


    }

   handleClicks(index) {
        /*let todos = JSON.parse(localStorage.getItem("ToDo"));
        let colors = JSON.parse(localStorage.getItem("Colors"));*/

        console.log("I was clicked");
        let handledTodos = this.state.data;
        let handledColors = this.state.color_data;
        for (let i = 0; i < todos.length; i++) {
            if (i !== index) {
                handledTodos.push(this.state.data[i]);
                //handledColors.push(colors[i]);
            }
        }
       this.setState({ data: handledTodos, color_data: handledColors});
      /* localStorage.setItem("ToDo", JSON.stringify(handledTodos));
       localStorage.setItem("Colors", JSON.stringify(handledColors));*/
    }





    renderToDoItems() {
        if(this.state.data.length != 0) {
            return this.state.data.map((todo, index) =>
                <ToDoItem value={todo} key={index} index={index}
                          onClick={() => this.handleClicks(index)}/>
            );
        }

    }

    render() {
        return (
            <View>
                <View>
                    <View>
                        {this.renderToDoItems()}
                    </View>
                    <TextInput
                        style={styles.todoText}
                        onChangeText={(text) => this.setState({value: text})}
                        value={this.state.value}
                    />
                    <Button
                        onPress={this.handleSubmit}
                        title="Add"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoText: {
        height: 40,
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1
    }
});


