import React from 'react';
import ToDoItem from './ToDoItem.js';
import {AsyncStorage, StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';

//Parent of TodoItem and child of views/TodoView
export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let todos = [];
        let colorsTodo = [];

        this.state = {
            value: '',
            filter: '',
            currentColor: '',
            colorData: colorsTodo,
            data: todos,
            displayedData: todos,
            displayedColors: colorsTodo,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
        this.filter = this.filter.bind(this);
        this.loadItems();

    }

    //Loads items from AsyncStorage and sets the states if something is stored.
    async loadItems() {
        AsyncStorage.getItem('ToDo').then((data) => {
            if (data !== null) {
                data = JSON.parse(data);
                this.setState({data: data,  displayedData: data});
            }
        }).catch((ex) => {

        });
        AsyncStorage.getItem('Colors').then((data) => {
            if (data !== null) {
                data = JSON.parse(data);
                this.setState({colorData: data,  displayedColors: data});
            }
        }).catch((ex) => {

        });
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

        let displayed_colors = this.props.selectedColor() === undefined ? this.state.colorData :
            this.state.colorData.filter((color, index) => color === this.props.selectedColor());
        let displayed_data = this.props.selectedColor() === undefined ? this.state.data :
            this.state.data.filter((todo, index) => this.state.colorData[index] === this.props.selectedColor());
        this.setState({displayedColors: displayed_colors, displayedData: displayed_data});

    }

    //Fires when Add button is clicked, updates states and stores data in localstorage.
    handleSubmit() {
        let todos = this.state.data;
        let colors = this.state.colorData;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.currentColor);

            this.setState({data: todos, colorData: colors}, () => this.filter());
            try {
                AsyncStorage.setItem("ToDo", JSON.stringify(todos));
                AsyncStorage.setItem("Colors", JSON.stringify(colors));
            } catch (error) {

            }
        }
        this.setState({value: ""});
    }

    //Handles checkbox clicks from child and removes the clicked item.
    async handleClicks(todoValue) {
        let todos = [];
        let colors = [];
        AsyncStorage.getItem('ToDo').then((data) => {
            if (data !== null) {
                todos = JSON.parse(data);

            }
        }).catch((ex) => {

        });
        AsyncStorage.getItem('Colors').then((data) => {
            if (data !== null) {
                colors = JSON.parse(data);
            }
        }).catch((ex) => {

        });
        let handledTodos = [];
        let handledColors = [];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] !== todoValue) {
                handledTodos.push(todos[i]);
                handledColors.push(colors[i]);
            }
        }
        this.setState({data: handledTodos, colorData: handledColors}, () => this.filter());
        try {

            AsyncStorage.setItem("ToDo", JSON.stringify(handledTodos));
            AsyncStorage.setItem("Colors", JSON.stringify(handledColors));
        } catch (error) {

        }
    }
    //Render the child elements from ToDoItem, sends down the displayed todoData and colors.
    renderToDoItems() {
        return this.state.displayedData.map((todo, index) =>
            <ToDoItem value={todo} key={index} index={index} color={this.state.displayedColors[index]}
                      onClick={() => this.handleClicks(todo)}/>
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


