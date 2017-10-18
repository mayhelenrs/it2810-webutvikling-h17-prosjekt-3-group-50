import React from 'react';
import ToDoItem from './ToDoItem.js';
import {AsyncStorage, StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';

//Parent of TodoItem and child of views/TodoView
export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        let colors_todo = [];

        this.state = {
            value: '',
            filter: '',
            current_color: '',
            color_data: colors_todo,
            data: todos,
            displayed_data: todos,
            displayed_colors: colors_todo,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
        this.filter = this.filter.bind(this);
        this.getItems();

    }

    //Gets items in AsyncStorage and sets the states if something is stored.
    async getItems() {
        let todos = [];
        let colors = [];
        try {
            const todos_async = await AsyncStorage.getItem('ToDo');
            const colors_async = await AsyncStorage.getItem('Colors');
            if (todos_async !== null && colors_async !== null) {
                // We have data!!
                todos = JSON.parse(todos_async);
                colors = JSON.parse(colors_async);
                this.setState({color_data: colors, data: todos, displayed_colors: colors, displayed_data: todos});
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Handles the color from category selection and shows all elements if no category is chosen.
    //If a category is chosen, then filter will ensure that only the given category items is shown.
    filter() {
        let color = this.props.selectedColor();
        this.setState({filter: color});
        if (color === undefined) {
            color = "#016D91";
        }
        this.setState({current_color: color});

        let displayed_colors = this.props.selectedColor() === undefined ? this.state.color_data :
            this.state.color_data.filter((color, index) => color === this.props.selectedColor());
        let displayed_data = this.props.selectedColor() === undefined ? this.state.data :
            this.state.data.filter((todo, index) => this.state.color_data[index] === this.props.selectedColor());
        this.setState({displayed_colors: displayed_colors, displayed_data: displayed_data});

    }

    //Fires when Add button is clicked, updates states and stores data in localstorage.
    handleSubmit(event) {
        let todos = this.state.data;
        let colors = this.state.color_data;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.current_color);

            this.setState({data: todos, color_data: colors}, () => this.filter());
            try {
                AsyncStorage.setItem("ToDo", JSON.stringify(todos));
                AsyncStorage.setItem("Colors", JSON.stringify(colors));
            } catch (error) {
                console.log(error);
            }
        }
        this.setState({value: ""});
        event.preventDefault();


    }

    //Handles checkbox clicks from child and removes the clicked item.
    async handleClicks(index) {
        let todos;
        let colors;
        try {
            todos = await AsyncStorage.getItem('ToDo');
            colors = await AsyncStorage.getItem('Colors');
            if (todos !== null) {
                // We have data!!
                todos = JSON.parse(todos);
                colors = JSON.parse(colors);
            }
        } catch (error) {
            console.log(error);
        }
        let handledTodos = [];
        let handledColors = [];
        for (let i = 0; i < todos.length; i++) {
            if (i !== index) {
                handledTodos.push(todos[i]);
                handledColors.push(colors[i]);
            }
        }
        this.setState({data: handledTodos, color_data: handledColors}, () => this.filter());
        try {

            AsyncStorage.setItem("ToDo", JSON.stringify(handledTodos));
            AsyncStorage.setItem("Colors", JSON.stringify(handledColors));
        } catch (error) {
            console.log(error);
        }
    }
    //Render the child elements from ToDoItem, sends down the displayed todoData and colors.
    renderToDoItems() {
        return this.state.displayed_data.map((todo, index) =>
            <ToDoItem value={todo} key={index} index={index} color={this.state.displayed_colors[index]}
                      onClick={() => this.handleClicks(index)}/>
        );


    }

    render() {
        return (
            <View style={styles.todoView}>
                <View>
                    {this.renderToDoItems()}
                </View>
                <TextInput
                    style={styles.todoText}
                    onChangeText={(text) => this.setState({value: text})}
                    placeholder="Write your todo's here"
                    value={this.state.value}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />

                <Button
                    onPress={this.handleSubmit}
                    title='ADD'
                    backgroundColor="#4CAF50"
                    fontFamily='IntroRust'
                    containerViewStyle={styles.todoButton}
                />
            </View>
        );
    }
}

//Styles the elements
const styles = StyleSheet.create({
    todoView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,

    },
    todoText: {
        height: 40,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 15,
        width: '90%',
    },
    todoButton: {
        width: '90%',
        marginBottom: 20,
    },


});


