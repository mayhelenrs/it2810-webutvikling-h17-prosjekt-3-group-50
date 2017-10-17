import React from 'react';
import ToDo from '../components/Todo/ToDo';
import Categories from '../components/categories/Categories';
import {View, StyleSheet} from 'react-native';

export default class ToDoView extends React.Component {
    static navigationOptions = {
        title: 'ToDoView'
    };

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
            <View style={styles.backgroundTodo}>
                <Categories id={2} filter={() => this.todo.filter()}>
                    {this.state.todo}
                </Categories>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    backgroundTodo: {
        backgroundColor: 'white',
    },


});







