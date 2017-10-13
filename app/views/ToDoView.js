import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToDo from '../components/Todo/ToDo'


export default class ToDoView extends React.Component {
    static navigationOptions = {
        title: 'ToDoView'
    };

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <View style={styles.todoHolder}>
                <ToDo/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    todoHolder: {
        display: "flex",
        backgroundColor: 'white',
    }


});






