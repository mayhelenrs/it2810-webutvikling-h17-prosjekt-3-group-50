import React from 'react';
import ToDoItem from './ToDoItem.js';
import {View, Button, TextInput, StyleSheet, AsyncStorage} from 'react-native';


export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        let colors_todo = [];
        console.log(this.getItems());
        console.log("I did not wait");
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
        this.getItems();


    }

    async getItems() {
        let todos;
        let colors;
        try {
            todos = await AsyncStorage.getItem('ToDo');
            //const colors = JSON.parse(AsyncStorage.getItem('Colors'));
            if (todos !== null){
                // We have data!!
                todos = JSON.parse(todos);
                this.setState({data: todos});
            }
        } catch (error) {
            console.log(error);
        }
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
    }

    handleSubmit(event) {
        let todos = this.state.data;
        let colors = this.state.color_data;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.current_color);
            this.setState({data: todos, color_data: colors});
            try {
                AsyncStorage.setItem("ToDo", JSON.stringify(todos));
                AsyncStorage.setItem("Colors", JSON.stringify(todos));
            } catch (error) {
                console.log(error);
            }
        }
        this.setState({value: ""});
        event.preventDefault();


    }

   async handleClicks(index) {
       let todos;
       let colors;
       try {
           todos = await AsyncStorage.getItem('ToDo');
           //const colors = JSON.parse(AsyncStorage.getItem('Colors'));
           if (todos !== null){
               // We have data!!
               todos = JSON.parse(todos);
           }
       } catch (error) {
           console.log(error);
       }
       let handledTodos = [];
       let handledColors = [];
       for (let i = 0; i < todos.length; i++) {
           if (i !== index) {
                handledTodos.push(todos[i]);
                //handledColors.push(colors[i]);
            }
        }
       this.setState({ data: handledTodos, color_data: handledColors});
       try {
           AsyncStorage.setItem("ToDo", JSON.stringify(handledTodos));
           AsyncStorage.setItem("Colors", JSON.stringify(handledColors));
       } catch (error) {
           console.log(error);
       }
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


