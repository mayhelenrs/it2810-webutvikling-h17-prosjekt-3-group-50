import React from 'react';
import ToDoItem from './ToDoItem.js';
import {AsyncStorage, StyleSheet, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import update from 'immutability-helper';


//Parent of TodoItem and child of views/TodoView
export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        let index = 0;

        this.state = {
            value: '',
            filter: '',
            currentColor: '',
            colorData: [],
            data: [],
            displayedData: [],
            displayedColors: [],
            indexList: [],

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
        this.filter = this.filter.bind(this);
    }

    //Loads items from AsyncStorage and sets the states if something is stored.
    componentDidMount() {
        AsyncStorage.getItem('ToDo').then((data) => {
            if (data !== null) {
                data = JSON.parse(data);
                this.setState({data: data[1], colorData: data[0]},
                    () => this.filter());
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
        let indexList = [];
        this.state.colorData.forEach((color, index)=> {
            if(this.props.selectedColor() === undefined || this.props.selectedColor() === color) {
                indexList.push(index);
            }
        });
        this.setState({displayedColors: displayed_colors, displayedData: displayed_data, indexList: indexList});
    }

    //Fires when Add button is clicked, updates states and stores data in localstorage.
    handleSubmit() {
        let todos = this.state.data;
        let colors = this.state.colorData;
        let indexList = this.state.indexList;
        if (this.state.value.length > 0) {
            todos.push(this.state.value);
            colors.push(this.state.currentColor);
            indexList.push(this.index++);

            this.setState({data: todos, colorData: colors, indexList: indexList}, () => this.filter());
            try {
                AsyncStorage.setItem("ToDo", JSON.stringify([colors, todos]));
            } catch (error) {

            }
        }
        this.setState({value: ""});
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
            try {
                AsyncStorage.setItem("ToDo", JSON.stringify([this.state.colorData, this.state.data]));
            } catch (error) {

            }
        });



    }
    //Render the child elements from ToDoItem, sends down the displayed todoData and colors.
    renderToDoItems() {
        if(this.state.displayedData !== undefined) {
            return this.state.displayedData.map((todo, index) =>
                <ToDoItem value={todo} key={this.state.indexList[index]} index={this.state.indexList[index]}
                          color={this.state.displayedColors[index]}
                          onClick={() => this.handleClicks(this.state.indexList[index])}/>
            );
        }


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


