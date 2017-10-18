import React from 'react';
import ToDo from '../components/todo/ToDo';
import Categories from '../components/categories/Categories';
import {ScrollView, StyleSheet} from 'react-native';

//Parent of components/ToDo
export default class ToDoView extends React.Component {
    static navigationOptions = {
        title: 'TODOS',
        headerTitleStyle: {
            color: 'black',
            fontFamily: 'IntroRust'
        },
        headerStyle: {
            backgroundColor: 'white',
        }
    };

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
            <ScrollView style={styles.backgroundTodo}>
                <Categories id={2} filter={() => this.todo.filter()}>
                    {this.state.todo}
                </Categories>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    backgroundTodo: {
        backgroundColor: 'white',
    },


});







